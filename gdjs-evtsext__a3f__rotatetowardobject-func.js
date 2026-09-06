
if (typeof gdjs.evtsExt__A3F__RotateTowardObject !== "undefined") {
  gdjs.evtsExt__A3F__RotateTowardObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__RotateTowardObject = {};
gdjs.evtsExt__A3F__RotateTowardObject.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__RotateTowardObject.GDObjectObjects1= [];
gdjs.evtsExt__A3F__RotateTowardObject.GDTargetObjects1= [];


gdjs.evtsExt__A3F__RotateTowardObject.userFunc0xad5a38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2Ds = objects;
const Target2Ds = eventsFunctionContext.getObjects("Target");
if (Object2Ds.length === 0 || Target2Ds.length === 0) {
    return;
}
const Target2D = Target2Ds[0];
const Target3D = Target2D.get3DRendererObject();
const Angle = eventsFunctionContext.getArgument("Angle");
const TargetPoint = eventsFunctionContext.getArgument("TargetPoint");
const TarPos = gdjs._A3F.Vec1;
if (TargetPoint === "Center point") {
    TarPos.set(Target2D.getCenterXInScene(), Target2D.getCenterYInScene(), Target2D.getCenterZInScene());
} else {
    TarPos.set(Target2D.getX(), Target2D.getY(), Target2D.getZ());
}

for (const Object2D of Object2Ds) {
    const Object3D = Object2D.get3DRendererObject();

    // オブジェクトの「正面」ベクトルを取得
    const ObjDir = gdjs._A3F.Vec2.set(1, 0, 0);
    ObjDir.applyQuaternion(Object3D.quaternion);
    // ターゲットへの理想的な方向ベクトルを計算
    const TarDir = gdjs._A3F.Vec3;
    TarDir.subVectors(TarPos, Object3D.position).normalize();
    // 「現在の向き」から「ターゲットの向き」への差分回転（Quaternion）を計算
    const Qua = gdjs._A3F.Qua1;
    Qua.setFromUnitVectors(ObjDir, TarDir);
    // 「最短距離で向く」という目標のクォータニオンを算出
    const TarQua = Object3D.quaternion.clone().premultiply(Qua);
    // 一定の角速度で回転させる
    Object3D.quaternion.rotateTowards(TarQua, gdjs.toRad(Angle));
    // 反映
    Object2D._rotationX = gdjs.toDegrees(Object3D.rotation.x);
    Object2D._rotationY = gdjs.toDegrees(Object3D.rotation.y);
    Object2D.angle = gdjs.toDegrees(Object3D.rotation.z);
    Object2D.getRenderer().updateRotation();
}


};
gdjs.evtsExt__A3F__RotateTowardObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__RotateTowardObject.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__RotateTowardObject.GDObjectObjects1;
gdjs.evtsExt__A3F__RotateTowardObject.userFunc0xad5a38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__RotateTowardObject.func = function(runtimeScene, Object, Capability3d, Angle, Target, TargetCapability3d, TargetPoint, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Target": Target
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Target": gdjs.objectsListsToArray(Target)
},
  _behaviorNamesMap: {
"Capability3d": Capability3d
, "TargetCapability3d": TargetCapability3d
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
if (argName === "Angle") return Angle;
if (argName === "TargetPoint") return TargetPoint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__RotateTowardObject.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__RotateTowardObject.GDTargetObjects1.length = 0;

gdjs.evtsExt__A3F__RotateTowardObject.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__RotateTowardObject.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__RotateTowardObject.GDTargetObjects1.length = 0;


return;
}

gdjs.evtsExt__A3F__RotateTowardObject.registeredGdjsCallbacks = [];