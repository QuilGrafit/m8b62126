
if (typeof gdjs.evtsExt__WebLLM__getStatus !== "undefined") {
  gdjs.evtsExt__WebLLM__getStatus.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebLLM__getStatus = {};
gdjs.evtsExt__WebLLM__getStatus.idToCallbackMap = new Map();


gdjs.evtsExt__WebLLM__getStatus.userFunc0xccece8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var sceneVars = runtimeScene.getVariables();
var wllmVars = sceneVars.get('__WebLLM');
eventsFunctionContext.returnValue = wllmVars.getChild('Status').getAsString();
};
gdjs.evtsExt__WebLLM__getStatus.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebLLM__getStatus.userFunc0xccece8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__getStatus.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WebLLM"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WebLLM"),
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


gdjs.evtsExt__WebLLM__getStatus.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WebLLM__getStatus.registeredGdjsCallbacks = [];