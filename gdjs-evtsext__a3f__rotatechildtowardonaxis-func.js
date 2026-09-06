
if (typeof gdjs.evtsExt__A3F__RotateChildTowardOnAxis !== "undefined") {
  gdjs.evtsExt__A3F__RotateChildTowardOnAxis.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__RotateChildTowardOnAxis = {};
gdjs.evtsExt__A3F__RotateChildTowardOnAxis.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__RotateChildTowardOnAxis.GDObjectObjects1= [];
gdjs.evtsExt__A3F__RotateChildTowardOnAxis.GDTargetObjects1= [];


gdjs.evtsExt__A3F__RotateChildTowardOnAxis.userFunc0xcb4b88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2Ds = objects;
const Target2Ds = eventsFunctionContext.getObjects("Target");
if (Object2Ds.length === 0 || Target2Ds.length === 0) return;

const Target2D = Target2Ds[0];
const ChildName = eventsFunctionContext.getArgument("Child");
const Front = eventsFunctionContext.getArgument("Front");
const Axis = eventsFunctionContext.getArgument("Axis");
const Angle = eventsFunctionContext.getArgument("Angle");
const TargetPoint = eventsFunctionContext.getArgument("TargetPoint");

const frontAxis = Front.replace("-", "");
if (frontAxis === Axis) return;

const TarWorPos = gdjs._A3F.Vec1;
if (TargetPoint === "Center point") {
  TarWorPos.set(Target2D.getCenterXInScene(), -Target2D.getCenterYInScene(), Target2D.getCenterZInScene());
} else {
  TarWorPos.set(Target2D.getX(), -Target2D.getY(), Target2D.getZ());
}

const idxMap = { x: 0, y: 1, z: 2 };
const frontNeg = Front.startsWith("-");
const frontIdx = idxMap[frontAxis];
const rotIdx = idxMap[Axis];
const sideIdx = [0, 1, 2].find(i => i !== frontIdx && i !== rotIdx);
const sign = ((frontIdx + 1) % 3 === sideIdx) ? -1 : 1;
const maxStep = gdjs.toRad(Angle);

const AxisVec = gdjs._A3F.Vec2;
AxisVec.set(Axis === "x" ? 1 : 0, Axis === "y" ? 1 : 0, Axis === "z" ? 1 : 0);

for (const Object2D of Object2Ds) {
  const Object3D = Object2D.get3DRendererObject();
  const Child = Object3D.getObjectByName(ChildName);
  if (!Child) continue;

  const lp = gdjs._A3F.Vec3;
  lp.copy(TarWorPos);
  Child.worldToLocal(lp);
  if (lp.lengthSq() < 1e-10) continue;
  lp.normalize();

  const d = [lp.x, lp.y, lp.z];
  const angle = Math.atan2(-d[sideIdx] * sign, frontNeg ? -d[frontIdx] : d[frontIdx]);
  const step = Math.max(-maxStep, Math.min(maxStep, angle));
  if (Math.abs(step) < 1e-10) continue;

  gdjs._A3F.Qua1.setFromAxisAngle(AxisVec, step);
  Child.quaternion.multiply(gdjs._A3F.Qua1);

  // 反映
  Object2D._rotationX = gdjs.toDegrees(Object3D.rotation.x);
  Object2D._rotationY = gdjs.toDegrees(Object3D.rotation.y);
  Object2D.angle = gdjs.toDegrees(Object3D.rotation.z);
  Object2D.getRenderer().updateRotation();
}
};
gdjs.evtsExt__A3F__RotateChildTowardOnAxis.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__RotateChildTowardOnAxis.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__RotateChildTowardOnAxis.GDObjectObjects1;
gdjs.evtsExt__A3F__RotateChildTowardOnAxis.userFunc0xcb4b88(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__RotateChildTowardOnAxis.func = function(runtimeScene, Object, Capability3d, Child, Front, Axis, Angle, Target, TargetCapability3d, TargetPoint, parentEventsFunctionContext) {
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
if (argName === "Child") return Child;
if (argName === "Front") return Front;
if (argName === "Axis") return Axis;
if (argName === "Angle") return Angle;
if (argName === "TargetPoint") return TargetPoint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__RotateChildTowardOnAxis.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__RotateChildTowardOnAxis.GDTargetObjects1.length = 0;

gdjs.evtsExt__A3F__RotateChildTowardOnAxis.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__RotateChildTowardOnAxis.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__RotateChildTowardOnAxis.GDTargetObjects1.length = 0;


return;
}

gdjs.evtsExt__A3F__RotateChildTowardOnAxis.registeredGdjsCallbacks = [];