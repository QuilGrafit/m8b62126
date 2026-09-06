
if (typeof gdjs.evtsExt__WebLLM__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__WebLLM__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebLLM__onFirstSceneLoaded = {};
gdjs.evtsExt__WebLLM__onFirstSceneLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__WebLLM__onFirstSceneLoaded.userFunc0x9f3cd8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Avoid loading the library multiple times
if (gdjs._WebLLM != null) return;

// Polyfill the Cache Storage API for non-secure (HTTP) contexts.
// window.caches is only available on https:// or http://localhost.
// On plain HTTP (e.g. a LAN IP), it is undefined and WebLLM crashes
// with 'caches is not defined'. This no-op polyfill lets WebLLM run
// without persistent model caching — models re-download each session.
// Host on HTTPS in production to get proper browser-side caching.
if (typeof caches === 'undefined') {
  var _noopCache = {
    match: function() { return Promise.resolve(undefined); },
    put: function() { return Promise.resolve(); },
    delete: function() { return Promise.resolve(false); },
    keys: function() { return Promise.resolve([]); },
    add: function() { return Promise.resolve(); },
    addAll: function() { return Promise.resolve(); }
  };
  window.caches = {
    open: function() { return Promise.resolve(_noopCache); },
    match: function() { return Promise.resolve(undefined); },
    delete: function() { return Promise.resolve(false); },
    has: function() { return Promise.resolve(false); },
    keys: function() { return Promise.resolve([]); }
  };
}

gdjs._WebLLM = {
  lib: null,
  _pendingImport: null,
  _importError: null
};

// Load WebLLM as an ES module via dynamic import
gdjs._WebLLM._pendingImport = import('https://esm.run/@mlc-ai/web-llm')
  .then(function(lib) {
    gdjs._WebLLM.lib = lib;
  })
  .catch(function(err) {
    gdjs._WebLLM._importError = err;
    console.error('[WebLLM] Failed to load library:', err);
  });
};
gdjs.evtsExt__WebLLM__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebLLM__onFirstSceneLoaded.userFunc0x9f3cd8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__WebLLM__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WebLLM__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__WebLLM__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__WebLLM__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__WebLLM__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__WebLLM__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
