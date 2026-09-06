
if (typeof gdjs.evtsExt__A3F__SetListenerForObject !== "undefined") {
  gdjs.evtsExt__A3F__SetListenerForObject.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__SetListenerForObject = {};
gdjs.evtsExt__A3F__SetListenerForObject.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__SetListenerForObject.GDObjectObjects1= [];


gdjs.evtsExt__A3F__SetListenerForObject.userFunc0xb42600 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length == 0) {
    return;
}
if (!gdjs._A3F.AudioListener) {
    return;
}
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
Object3D.add(gdjs._A3F.AudioListener);
gdjs._A3F.AudioListener.rotation.set(gdjs.toRad(90), gdjs.toRad(0), gdjs.toRad(-90),"ZYX");


};
gdjs.evtsExt__A3F__SetListenerForObject.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__SetListenerForObject.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__SetListenerForObject.GDObjectObjects1;
gdjs.evtsExt__A3F__SetListenerForObject.userFunc0xb42600(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__SetListenerForObject.func = function(runtimeScene, Object, Capability3d, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Capability3d": Capability3d
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

gdjs.evtsExt__A3F__SetListenerForObject.GDObjectObjects1.length = 0;

gdjs.evtsExt__A3F__SetListenerForObject.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__SetListenerForObject.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__A3F__SetListenerForObject.registeredGdjsCallbacks = [];