
if (typeof gdjs.evtsExt__A3F__RotateTowardOnAxis !== "undefined") {
  gdjs.evtsExt__A3F__RotateTowardOnAxis.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__RotateTowardOnAxis = {};
gdjs.evtsExt__A3F__RotateTowardOnAxis.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__RotateTowardOnAxis.GDObjectObjects1= [];
gdjs.evtsExt__A3F__RotateTowardOnAxis.GDTargetObjects1= [];


gdjs.evtsExt__A3F__RotateTowardOnAxis.userFunc0xb27968 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2Ds = objects;
const Target2Ds = eventsFunctionContext.getObjects("Target");
if (Object2Ds.length === 0 || Target2Ds.length === 0) {
  return;
}
const Target2D = Target2Ds[0];
const Target3D = Target2D.get3DRendererObject();
const Axis = eventsFunctionContext.getArgument("Axis");
const Angle = eventsFunctionContext.getArgument("Angle");
const TargetPoint = eventsFunctionContext.getArgument("TargetPoint");
const TarPos = gdjs._A3F.Vec1;
if (TargetPoint === "Center point") {
  TarPos.set(Target2D.getCenterXInScene(), -Target2D.getCenterYInScene(), Target2D.getCenterZInScene());
} else {
  TarPos.set(Target2D.getX(), -Target2D.getY(), Target2D.getZ());
}

for (const Object2D of Object2Ds) {
  const Object3D = Object2D.get3DRendererObject();
  const LocalPos = gdjs._A3F.Vec3;
  LocalPos.copy(TarPos);
  // 1. ターゲットの座標を自分のローカル座標系に変換（！TarPosを直接書き換えないよう注意）
  const TargetLocalPos = Object3D.worldToLocal(LocalPos);
  // 2. ローカル空間でのターゲットへの方向（正規化）
  const Direction = TargetLocalPos.normalize();
  //
  if (Axis == "y") {
    const AxisVec = gdjs._A3F.Vec2;
    const Qua = gdjs._A3F.Qua1;
    AxisVec.set(0, 1, 0);
    // 自分の正面（+X）と、ターゲットのローカルXZ平面上の位置から、必要な回転角を計算
    let Diff = Math.atan2(-Direction.z, Direction.x);
    // -π 〜 π の範囲に補正（最短ルートの計算）
    if (Diff > Math.PI) Diff -= Math.PI * 2;
    if (Diff < -Math.PI) Diff += Math.PI * 2;
    // 1フレームで回転する量を制限
    const Step = Math.sign(Diff) * Math.min(Math.abs(Diff), gdjs.toRad(Angle));
    // 現在の姿勢の「右側」から掛け合わせることで、常にローカルY軸で回転させる
    Object3D.quaternion.multiply(Qua.setFromAxisAngle(AxisVec, Step));
  } else {
    const AxisVec = gdjs._A3F.Vec2;
    const Qua = gdjs._A3F.Qua1;
    AxisVec.set(0, 0, 1);
    let Diff = Math.atan2(Direction.y, Direction.x);
    if (Diff > Math.PI) Diff -= Math.PI * 2;
    if (Diff < -Math.PI) Diff += Math.PI * 2;
    const Step = Math.sign(Diff) * Math.min(Math.abs(Diff), gdjs.toRad(Angle));
    Object3D.quaternion.multiply(Qua.setFromAxisAngle(AxisVec, Step));
  }
  // 反映
  Object2D._rotationX = gdjs.toDegrees(Object3D.rotation.x);
  Object2D._rotationY = gdjs.toDegrees(Object3D.rotation.y);
  Object2D.angle = gdjs.toDegrees(Object3D.rotation.z);
  Object2D.getRenderer().updateRotation();
}


};
gdjs.evtsExt__A3F__RotateTowardOnAxis.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__RotateTowardOnAxis.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__RotateTowardOnAxis.GDObjectObjects1;
gdjs.evtsExt__A3F__RotateTowardOnAxis.userFunc0xb27968(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__RotateTowardOnAxis.func = function(runtimeScene, Object, Capability3d, Axis, Angle, Target, TargetCapability3d, TargetPoint, parentEventsFunctionContext) {
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
if (argName === "Axis") return Axis;
if (argName === "Angle") return Angle;
if (argName === "TargetPoint") return TargetPoint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__RotateTowardOnAxis.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__RotateTowardOnAxis.GDTargetObjects1.length = 0;

gdjs.evtsExt__A3F__RotateTowardOnAxis.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__RotateTowardOnAxis.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__RotateTowardOnAxis.GDTargetObjects1.length = 0;


return;
}

gdjs.evtsExt__A3F__RotateTowardOnAxis.registeredGdjsCallbacks = [];