
if (typeof gdjs.evtsExt__A3F__RotateChildTowardObject !== "undefined") {
  gdjs.evtsExt__A3F__RotateChildTowardObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__RotateChildTowardObject = {};
gdjs.evtsExt__A3F__RotateChildTowardObject.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__RotateChildTowardObject.GDObjectObjects1= [];
gdjs.evtsExt__A3F__RotateChildTowardObject.GDTargetObjects1= [];


gdjs.evtsExt__A3F__RotateChildTowardObject.userFunc0xac2710 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2Ds = objects;
const Target2Ds = eventsFunctionContext.getObjects("Target");
if (Object2Ds.length === 0 || Target2Ds.length === 0) {
    return;
}
const Target2D = Target2Ds[0];
const Target3D = Target2D.get3DRendererObject();
const ChildName = eventsFunctionContext.getArgument("Child");
const Front = eventsFunctionContext.getArgument("Front");
const Angle = eventsFunctionContext.getArgument("Angle");
const TargetPoint = eventsFunctionContext.getArgument("TargetPoint");
const TarWorPos = gdjs._A3F.Vec1;

if (TargetPoint === "Center point") {
    TarWorPos.set(Target2D.getCenterXInScene(), -Target2D.getCenterYInScene(), Target2D.getCenterZInScene());
} else {
    TarWorPos.set(Target2D.getX(), -Target2D.getY(), Target2D.getZ());
}

const ObjWorQua = gdjs._A3F.Qua1;
const TarQua = gdjs._A3F.Qua2;
const Qua = gdjs._A3F.Qua3;

const ObjDir = gdjs._A3F.Vec2;
if (Front == "x") {
    ObjDir.set(1, 0, 0);
} else if (Front == "y") {
    ObjDir.set(0, 1, 0);
} else if (Front == "z") {
    ObjDir.set(0, 0, 1);
} else if (Front == "-x") {
    ObjDir.set(-1, 0, 0);
} else if (Front == "-y") {
    ObjDir.set(0, -1, 0);
} else { //Front == "-z"
    ObjDir.set(0, 0, -1);
}
const ObjWorDir = gdjs._A3F.Vec3;
const TarWorDir = gdjs._A3F.Vec4;
const ObjWorPos = gdjs._A3F.Vec5;

for (const Object2D of Object2Ds) {
    const Object3D = Object2D.get3DRendererObject();
    const Child = Object3D.getObjectByName(ChildName);
    if (!Child) {continue};

    Child.getWorldQuaternion(ObjWorQua);
    Child.getWorldPosition(ObjWorPos);
    ObjWorDir.copy(ObjDir).applyQuaternion(ObjWorQua).normalize(); // 現在の前方（ワールド空間）
    TarWorDir.subVectors(TarWorPos, ObjWorPos).normalize(); // 目標方向（ワールド空間）
    TarQua.setFromUnitVectors(ObjWorDir, TarWorDir).multiply(ObjWorQua); // 目標ワールド回転
    ObjWorQua.rotateTowards(TarQua, gdjs.toRad(Angle)); // 角度制限付き回転
    Child.parent.getWorldQuaternion(Qua).invert();
    Child.quaternion.copy(Qua).multiply(ObjWorQua); // ローカルに変換
}


};
gdjs.evtsExt__A3F__RotateChildTowardObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__RotateChildTowardObject.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__RotateChildTowardObject.GDObjectObjects1;
gdjs.evtsExt__A3F__RotateChildTowardObject.userFunc0xac2710(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__RotateChildTowardObject.func = function(runtimeScene, Object, Capability3d, Child, Front, Angle, Target, TargetCapability3d, TargetPoint, parentEventsFunctionContext) {
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
if (argName === "Angle") return Angle;
if (argName === "TargetPoint") return TargetPoint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__RotateChildTowardObject.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__RotateChildTowardObject.GDTargetObjects1.length = 0;

gdjs.evtsExt__A3F__RotateChildTowardObject.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__RotateChildTowardObject.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__RotateChildTowardObject.GDTargetObjects1.length = 0;


return;
}

gdjs.evtsExt__A3F__RotateChildTowardObject.registeredGdjsCallbacks = [];