
if (typeof gdjs.evtsExt__A3F__DistanceObjectsV2 !== "undefined") {
  gdjs.evtsExt__A3F__DistanceObjectsV2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__DistanceObjectsV2 = {};
gdjs.evtsExt__A3F__DistanceObjectsV2.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__DistanceObjectsV2.GDObjectObjects1= [];
gdjs.evtsExt__A3F__DistanceObjectsV2.GDTargetObjectObjects1= [];


gdjs.evtsExt__A3F__DistanceObjectsV2.userFunc0xb9aae0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const ObjectPoint = eventsFunctionContext.getArgument("ObjectPoint");
const TargetObjects = eventsFunctionContext.getObjects("TargetObject");
const TargetPoint = eventsFunctionContext.getArgument("TargetPoint");
if (objects.length == 0 || TargetObjects.length == 0) {
    return;
}
const Object2D = objects[0];
const Target2D = TargetObjects[0];
const Object3D = Object2D.get3DRendererObject();
const Target3D = Target2D.get3DRendererObject();
let Distance = 0;
if (Object3D && Target3D) {
    let ObjectPos;
    if (ObjectPoint === "Center point") {
        ObjectPos = new THREE.Vector3(Object2D.getCenterXInScene(), Object2D.getCenterYInScene(), Object2D.getCenterZInScene());
    } else {
        ObjectPos = new THREE.Vector3(Object2D.getX(), Object2D.getY(), Object2D.getZ());
    }
    let TargetPos;
    if (TargetPoint === "Center point") {
        TargetPos = new THREE.Vector3(Target2D.getCenterXInScene(), Target2D.getCenterYInScene(), Target2D.getCenterZInScene());
    } else {
        TargetPos = new THREE.Vector3(Target2D.getX(), Target2D.getY(), Target2D.getZ());
    }
    Distance = ObjectPos.distanceTo(TargetPos);
}
eventsFunctionContext.returnValue = Distance;


};
gdjs.evtsExt__A3F__DistanceObjectsV2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__DistanceObjectsV2.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__DistanceObjectsV2.GDObjectObjects1;
gdjs.evtsExt__A3F__DistanceObjectsV2.userFunc0xb9aae0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__DistanceObjectsV2.func = function(runtimeScene, Object, ObjectPoint, TargetObject, TargetPoint, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__DistanceObjectsV2.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__DistanceObjectsV2.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__A3F__DistanceObjectsV2.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__DistanceObjectsV2.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__DistanceObjectsV2.GDTargetObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__A3F__DistanceObjectsV2.registeredGdjsCallbacks = [];