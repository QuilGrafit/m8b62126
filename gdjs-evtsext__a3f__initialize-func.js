
if (typeof gdjs.evtsExt__A3F__Initialize !== "undefined") {
  gdjs.evtsExt__A3F__Initialize.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__Initialize = {};
gdjs.evtsExt__A3F__Initialize.idToCallbackMap = new Map();


gdjs.evtsExt__A3F__Initialize.userFunc0xcb4330 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._A3F) return;
gdjs._A3F = {};
gdjs._A3F.MakeUniqueMaterial = function(Obj3D) {
    if (!Obj3D.userData.A3F) {
        Obj3D.userData.A3F = {};
    }
    if (!Obj3D.userData.A3F.UniqueMaterial) {
        Obj3D.userData.A3F.UniqueMaterial = true;
        //
        Obj3D.addEventListener("removed", gdjs._A3F.DisposeUniqueMaterial);
        //
        const CopyMat = {};
        Obj3D.traverse((Child) => {
            if (Child.material) {
                if (Array.isArray(Child.material)) {
                    for (let i = 0; i < Child.material.length; i++) {
                        if (!CopyMat[Child.material[i].uuid]) {
                            CopyMat[Child.material[i].uuid] = Child.material[i].clone();
                        }
                        Child.material[i] = CopyMat[Child.material[i].uuid];
                    }
                } else {
                    if (!CopyMat[Child.material.uuid]) {
                        CopyMat[Child.material.uuid] = Child.material.clone();
                    }
                    Child.material = CopyMat[Child.material.uuid];
                }
            }
        });
    }
};
//
gdjs._A3F.DisposeUniqueMaterial = function(Evt) {
    const Obj3D = Evt.target;// this
    Obj3D.traverse((Child) => {
        if (Child.material) {
            if (Array.isArray(Child.material)) {
                for (let i = 0; i < Child.material.length; i++) {
                    Child.material[i].dispose()
                }
            } else {
                Child.material.dispose()
            }
        }
    });
};
//
gdjs._A3F.LightIntensityScale = 1;//Math.PI// Three.js r160 だがRenderer.useLegacyLightsがTrueなので旧仕様のまま
gdjs._A3F.LightIntensityCandela = 1;//10000;//適当// Three.js r160 だがRenderer.useLegacyLightsがTrueなので旧仕様のまま
//
gdjs._A3F.DumpChildren = function(Obj3D, Depth = 0, Lines = []) {
    const indent = ' '.repeat(Depth);
    Lines.push(`${indent}${Obj3D.name || '(no name)'}`);
    Obj3D.children.forEach((child) => {
        gdjs._A3F.DumpChildren(child, Depth + 1, Lines);
    });
    return Lines;
}


};
gdjs.evtsExt__A3F__Initialize.userFunc0x82a9f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._A3F.Vec) return;
//
gdjs._A3F.Vec1 = new THREE.Vector3();
gdjs._A3F.Vec2 = new THREE.Vector3();
gdjs._A3F.Vec3 = new THREE.Vector3();
gdjs._A3F.Vec4 = new THREE.Vector3();
gdjs._A3F.Vec5 = new THREE.Vector3();

gdjs._A3F.Qua1 = new THREE.Quaternion();
gdjs._A3F.Qua2 = new THREE.Quaternion();
gdjs._A3F.Qua3 = new THREE.Quaternion();
gdjs._A3F.Qua4 = new THREE.Quaternion();
gdjs._A3F.Qua5 = new THREE.Quaternion();

gdjs._A3F.Eul1 = new THREE.Euler();
gdjs._A3F.Eul2 = new THREE.Euler();


};
gdjs.evtsExt__A3F__Initialize.userFunc0xc21488 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._A3F.AudioBufferCache) return;
/**
 * CustomAudioListenerForGD
 * 
 * Y軸スケールが-1で反転したシーン（GDevelop等）用のAudioListener。
 * 反転したシーンでも正しい方向から音が聞こえるように補正する。
 * 
 * 特徴:
 * - Y軸反転シーン対応（scale.y = -1）
 * - 完全なワールド座標変換（位置・forward・up）
 * - メモリ効率的（オブジェクト再利用、GC発生なし）
 * - スムーズな音声遷移（linearRampToValueAtTime使用）
 * - 新旧Web Audio API両対応
 */
class CustomAudioListenerForGD extends THREE.AudioListener {

    // 再利用可能な一時オブジェクト（GC回避）
    _position = new THREE.Vector3();
    _quaternion = new THREE.Quaternion();
    _scale = new THREE.Vector3();
    _forward = new THREE.Vector3();
    _up = new THREE.Vector3();

    updateMatrixWorld(force) {
        super.updateMatrixWorld(force);

        const listener = this.context.listener;

        // ワールド変換を取得（スケールも取得して反転を検出）
        this.matrixWorld.decompose(this._position, this._quaternion, this._scale);

        // ローカル軸をワールド空間に変換
        this._forward.set(0, 0, -1).applyQuaternion(this._quaternion);
        this._up.set(0, 1, 0).applyQuaternion(this._quaternion);

        // Y軸が反転している場合、forward と up を補正
        // 負のスケールは座標系の反転を意味するため、ベクトルを反転して補正
        if (this._scale.y < 0) {
            this._forward.y *= -1;
            this._up.y *= -1;
        }

        if (listener.positionX) {
            // 新仕様 Web Audio API
            const endTime = this.context.currentTime + this.timeDelta;

            // 位置（Y軸反転を補正）
            const posY = this._scale.y < 0 ? -this._position.y : this._position.y;
            listener.positionX.linearRampToValueAtTime(this._position.x, endTime);
            listener.positionY.linearRampToValueAtTime(posY, endTime);
            listener.positionZ.linearRampToValueAtTime(this._position.z, endTime);

            // forward方向のスケジュールをキャンセルしてから更新
            listener.forwardX.cancelScheduledValues(this.context.currentTime);
            listener.forwardY.cancelScheduledValues(this.context.currentTime);
            listener.forwardZ.cancelScheduledValues(this.context.currentTime);
            listener.forwardX.linearRampToValueAtTime(this._forward.x, endTime);
            listener.forwardY.linearRampToValueAtTime(this._forward.y, endTime);
            listener.forwardZ.linearRampToValueAtTime(this._forward.z, endTime);

            // up方向のスケジュールをキャンセルしてから更新
            listener.upX.cancelScheduledValues(this.context.currentTime);
            listener.upY.cancelScheduledValues(this.context.currentTime);
            listener.upZ.cancelScheduledValues(this.context.currentTime);
            listener.upX.linearRampToValueAtTime(this._up.x, endTime);
            listener.upY.linearRampToValueAtTime(this._up.y, endTime);
            listener.upZ.linearRampToValueAtTime(this._up.z, endTime);

        } else {
            // 旧仕様（Safari等）
            const posY = this._scale.y < 0 ? -this._position.y : this._position.y;
            listener.setPosition(
                this._position.x,
                posY,
                this._position.z
            );
            listener.setOrientation(
                this._forward.x, this._forward.y, this._forward.z,
                this._up.x, this._up.y, this._up.z
            );
        }
    }
}
// AudioListener and AudioBufferCache
if (THREE) {
    gdjs._A3F.AudioListener = new CustomAudioListenerForGD();
}
gdjs._A3F.AudioBufferCache = new Map();


};
gdjs.evtsExt__A3F__Initialize.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__A3F__Initialize.userFunc0xcb4330(runtimeScene, eventsFunctionContext);

}


{


gdjs.evtsExt__A3F__Initialize.userFunc0x82a9f8(runtimeScene, eventsFunctionContext);

}


{


gdjs.evtsExt__A3F__Initialize.userFunc0xc21488(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__Initialize.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("A3F"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("A3F"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__A3F__Initialize.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__A3F__Initialize.registeredGdjsCallbacks = [];