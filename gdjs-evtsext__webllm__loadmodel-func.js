
if (typeof gdjs.evtsExt__WebLLM__loadModel !== "undefined") {
  gdjs.evtsExt__WebLLM__loadModel.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WebLLM__loadModel = {};
gdjs.evtsExt__WebLLM__loadModel.idToCallbackMap = new Map();


gdjs.evtsExt__WebLLM__loadModel.userFunc0x9f45d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
var modelId = eventsFunctionContext.getArgument('modelId');
var sceneVars = runtimeScene.getVariables();
var wllmVars = sceneVars.get('__WebLLM');

(async function() {
  if (!gdjs._WebLLM) return;

  // Wait for the library import to settle
  if (!gdjs._WebLLM.lib && gdjs._WebLLM._pendingImport) {
    await gdjs._WebLLM._pendingImport;
  }

  if (!gdjs._WebLLM.lib) {
    wllmVars.getChild('Status').setString('error');
    wllmVars.getChild('LoadText').setString('Failed to load WebLLM library. Check the browser console.');
    return;
  }

  var finalModelId = modelId || wllmVars.getChild('ModelId').getAsString() || 'Llama-3.2-1B-Instruct-q4f32_1-MLC';

  wllmVars.getChild('Status').setString('loading');
  wllmVars.getChild('LoadProgress').setNumber(0);
  wllmVars.getChild('LoadText').setString('Initializing...');

  try {
    var engine = await gdjs._WebLLM.lib.CreateMLCEngine(finalModelId, {
      initProgressCallback: function(progress) {
        var pct = Math.round((progress.progress || 0) * 100);
        wllmVars.getChild('LoadProgress').setNumber(pct);
        wllmVars.getChild('LoadText').setString(progress.text || '');
      }
    });

    runtimeScene._WebLLM = runtimeScene._WebLLM || {};
    runtimeScene._WebLLM.engine = engine;
    runtimeScene._WebLLM.modelId = finalModelId;

    wllmVars.getChild('Status').setString('ready');
    wllmVars.getChild('LoadProgress').setNumber(100);
    wllmVars.getChild('LoadText').setString('Model loaded: ' + finalModelId);
  } catch (err) {
    wllmVars.getChild('Status').setString('error');
    wllmVars.getChild('LoadText').setString(err.message || String(err));
    console.error('[WebLLM] loadModel error:', err);
  }
})();
};
gdjs.evtsExt__WebLLM__loadModel.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WebLLM__loadModel.userFunc0x9f45d8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__loadModel.func = function(runtimeScene, modelId, parentEventsFunctionContext) {
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
if (argName === "modelId") return modelId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WebLLM__loadModel.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WebLLM__loadModel.registeredGdjsCallbacks = [];