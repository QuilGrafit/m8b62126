
if (typeof gdjs.evtsExt__A3F__CheckDistanceV2 !== "undefined") {
  gdjs.evtsExt__A3F__CheckDistanceV2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__CheckDistanceV2 = {};
gdjs.evtsExt__A3F__CheckDistanceV2.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__CheckDistanceV2.GDObjectObjects1= [];
gdjs.evtsExt__A3F__CheckDistanceV2.GDTargetObjectObjects1= [];


gdjs.evtsExt__A3F__CheckDistanceV2.userFunc0x7d11c8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const TargetObjects = eventsFunctionContext.getObjects("TargetObject");
if (objects.length == 0 || TargetObjects.length == 0) {
    return;
}
const ObjectsLists = eventsFunctionContext.getObjectsLists("Object");
const ObjectPoint = eventsFunctionContext.getArgument("ObjectPoint");
const TargetsLists = eventsFunctionContext.getObjectsLists("TargetObject");
const TargetPoint = eventsFunctionContext.getArgument("TargetPoint");
const Operator = eventsFunctionContext.getArgument("Operator");
const Distance = eventsFunctionContext.getArgument("Distance");
const Arguments = {Ope: Operator, Dis: Distance, ObjP: ObjectPoint, TarP: TargetPoint};
//
eventsFunctionContext.returnValue = gdjs.evtTools.object.twoListsTest(
    (Object2D, Target2D, Arg) => {
        let ObjectPos;
        if (Arg.ObjP === "Center point") {
            ObjectPos = new THREE.Vector3(Object2D.getCenterXInScene(), Object2D.getCenterYInScene(), Object2D.getCenterZInScene());
        } else {
            ObjectPos = new THREE.Vector3(Object2D.getX(), Object2D.getY(), Object2D.getZ());
        }
        let TargetPos;
        if (Arg.TarP === "Center point") {
            TargetPos = new THREE.Vector3(Target2D.getCenterXInScene(), Target2D.getCenterYInScene(), Target2D.getCenterZInScene());
        } else {
            TargetPos = new THREE.Vector3(Target2D.getX(), Target2D.getY(), Target2D.getZ());
        }
        const Dis = ObjectPos.distanceTo(TargetPos);
        if (Arg.Ope == "=") {
            return (Dis == Arg.Dis);
        } else if (Arg.Ope == "<") {
            return (Dis < Arg.Dis);
        } else if (Arg.Ope == ">") {
            return (Dis > Arg.Dis);
        } else if (Arg.Ope == "≤") {
            return (Dis <= Arg.Dis);
        } else if (Arg.Ope == "≥") {
            return (Dis >= Arg.Dis);
        } else {
            // ≠
            return (Dis != Arg.Dis);
        }
    },
    ObjectsLists,
    TargetsLists,
    false,
    Arguments
);


};
gdjs.evtsExt__A3F__CheckDistanceV2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__CheckDistanceV2.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__CheckDistanceV2.GDObjectObjects1;
gdjs.evtsExt__A3F__CheckDistanceV2.userFunc0x7d11c8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__CheckDistanceV2.func = function(runtimeScene, Object, Capability3d, ObjectPoint, TargetObject, TargetCapability3d, TargetPoint, Operator, Distance, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
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
if (argName === "ObjectPoint") return ObjectPoint;
if (argName === "TargetPoint") return TargetPoint;
if (argName === "Operator") return Operator;
if (argName === "Distance") return Distance;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__CheckDistanceV2.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__CheckDistanceV2.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__A3F__CheckDistanceV2.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__CheckDistanceV2.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__CheckDistanceV2.GDTargetObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__A3F__CheckDistanceV2.registeredGdjsCallbacks = [];