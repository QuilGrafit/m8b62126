
if (typeof gdjs.evtsExt__A3F__CheckAngleToObjects !== "undefined") {
  gdjs.evtsExt__A3F__CheckAngleToObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__CheckAngleToObjects = {};
gdjs.evtsExt__A3F__CheckAngleToObjects.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__CheckAngleToObjects.GDObjectObjects1= [];
gdjs.evtsExt__A3F__CheckAngleToObjects.GDTargetObjects1= [];


gdjs.evtsExt__A3F__CheckAngleToObjects.userFunc0xdf0710 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Targets = eventsFunctionContext.getObjects("Target");
if (objects.length == 0 || Targets.length == 0) {
    return;
}
const TargetsLists = eventsFunctionContext.getObjectsLists("Target");
const ObjectsLists = eventsFunctionContext.getObjectsLists("Object");
const TargetPoint = eventsFunctionContext.getArgument("TargetPoint");
const Operator = eventsFunctionContext.getArgument("Operator");
const Angle = eventsFunctionContext.getArgument("Angle");
const Arguments = {Poi:TargetPoint, Ope: Operator, Ang: Angle};
//
eventsFunctionContext.returnValue = gdjs.evtTools.object.twoListsTest(
    (Object2D, Target2D, Arg) => {
        const Object3D = Object2D.get3DRendererObject();
        // const Target3D = Target2D.get3DRendererObject();
        //
        let TargetPos;
        if (Arg.Poi === "Center point") {
            TargetPos = new THREE.Vector3(Target2D.getCenterXInScene(), -Target2D.getCenterYInScene(), Target2D.getCenterZInScene());
        } else {
            TargetPos = new THREE.Vector3(Target2D.getX(), -Target2D.getY(), Target2D.getZ());
        }
        const ObjectPos = Object3D.getWorldPosition(new THREE.Vector3());
        const Dir = TargetPos.sub(ObjectPos).normalize();
        const WorldQuaternion = new THREE.Quaternion();
        Object3D.getWorldQuaternion(WorldQuaternion);
        Dir.applyQuaternion(WorldQuaternion.invert());
        const Ang = gdjs.toDegrees(Math.acos(THREE.MathUtils.clamp(-Dir.x, -1, 1)));
        if (Arg.Ope == "=") {
            return (Ang == Arg.Ang);
        } else if (Arg.Ope == "<") {
            return (Ang < Arg.Ang);
        } else if (Arg.Ope == ">") {
            return (Ang > Arg.Ang);
        } else if (Arg.Ope == "≤") {
            return (Ang <= Arg.Ang);
        } else if (Arg.Ope == "≥") {
            return (Ang >= Arg.Ang);
        } else {
            // ≠
            return (Ang != Arg.Ang);
        }
    },
    ObjectsLists,
    TargetsLists,
    false,
    Arguments
);


};
gdjs.evtsExt__A3F__CheckAngleToObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__CheckAngleToObjects.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__CheckAngleToObjects.GDObjectObjects1;
gdjs.evtsExt__A3F__CheckAngleToObjects.userFunc0xdf0710(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__CheckAngleToObjects.func = function(runtimeScene, Object, Capability3d, Target, TargetCapability3d, TargetPoint, Operator, Angle, parentEventsFunctionContext) {
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
if (argName === "TargetPoint") return TargetPoint;
if (argName === "Operator") return Operator;
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__CheckAngleToObjects.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__CheckAngleToObjects.GDTargetObjects1.length = 0;

gdjs.evtsExt__A3F__CheckAngleToObjects.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__CheckAngleToObjects.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__CheckAngleToObjects.GDTargetObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__A3F__CheckAngleToObjects.registeredGdjsCallbacks = [];