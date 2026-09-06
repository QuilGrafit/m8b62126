
if (typeof gdjs.evtsExt__WebLLM__getAvailableModels !== "undefined") {
  gdjs.evtsExt__WebLLM__getAvailableModels.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebLLM__getAvailableModels = {};
gdjs.evtsExt__WebLLM__getAvailableModels.idToCallbackMap = new Map();


gdjs.evtsExt__WebLLM__getAvailableModels.userFunc0xd35350 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs._WebLLM || !gdjs._WebLLM.lib) {
  eventsFunctionContext.returnValue = '';
  return;
}
var models = gdjs._WebLLM.lib.prebuiltAppConfig.model_list.map(function(m) {
  return m.model_id;
});
eventsFunctionContext.returnValue = models.join(',');
};
gdjs.evtsExt__WebLLM__getAvailableModels.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebLLM__getAvailableModels.userFunc0xd35350(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__getAvailableModels.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__WebLLM__getAvailableModels.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WebLLM__getAvailableModels.registeredGdjsCallbacks = [];