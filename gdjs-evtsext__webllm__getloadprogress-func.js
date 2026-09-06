
if (typeof gdjs.evtsExt__WebLLM__getLoadProgress !== "undefined") {
  gdjs.evtsExt__WebLLM__getLoadProgress.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebLLM__getLoadProgress = {};
gdjs.evtsExt__WebLLM__getLoadProgress.idToCallbackMap = new Map();


gdjs.evtsExt__WebLLM__getLoadProgress.userFunc0xb2b2b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var sceneVars = runtimeScene.getVariables();
var wllmVars = sceneVars.get('__WebLLM');
eventsFunctionContext.returnValue = wllmVars.getChild('LoadProgress').getAsNumber();
};
gdjs.evtsExt__WebLLM__getLoadProgress.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebLLM__getLoadProgress.userFunc0xb2b2b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__getLoadProgress.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__WebLLM__getLoadProgress.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__WebLLM__getLoadProgress.registeredGdjsCallbacks = [];