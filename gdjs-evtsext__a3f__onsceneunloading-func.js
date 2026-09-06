
if (typeof gdjs.evtsExt__A3F__onSceneUnloading !== "undefined") {
  gdjs.evtsExt__A3F__onSceneUnloading.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__onSceneUnloading = {};
gdjs.evtsExt__A3F__onSceneUnloading.idToCallbackMap = new Map();


gdjs.evtsExt__A3F__onSceneUnloading.userFunc0xaf8060 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._A3F.AudioListener) {
    gdjs._A3F.AudioListener.removeFromParent();
}
gdjs._A3F.AudioBufferCache.clear();


};
gdjs.evtsExt__A3F__onSceneUnloading.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__A3F__onSceneUnloading.userFunc0xaf8060(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__onSceneUnloading.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__A3F__onSceneUnloading.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__A3F__onSceneUnloading.registeredGdjsCallbacks = [];
gdjs.evtsExt__A3F__onSceneUnloading.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__A3F__onSceneUnloading.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneUnloadingCallback(gdjs.evtsExt__A3F__onSceneUnloading.registeredGdjsCallbacks[gdjs.evtsExt__A3F__onSceneUnloading.registeredGdjsCallbacks.length - 1]);
