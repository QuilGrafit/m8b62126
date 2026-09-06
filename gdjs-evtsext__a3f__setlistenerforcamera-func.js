
if (typeof gdjs.evtsExt__A3F__SetListenerForCamera !== "undefined") {
  gdjs.evtsExt__A3F__SetListenerForCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__SetListenerForCamera = {};
gdjs.evtsExt__A3F__SetListenerForCamera.idToCallbackMap = new Map();


gdjs.evtsExt__A3F__SetListenerForCamera.userFunc0xafaa50 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const Layer = eventsFunctionContext.getArgument("Layer");
const Camera3D = runtimeScene.getLayer(Layer).getRenderer().getThreeCamera();
if (!Camera3D) {
    return;
}
if (!gdjs._A3F.AudioListener) {
    return;
}
Camera3D.add(gdjs._A3F.AudioListener);
gdjs._A3F.AudioListener.rotation.set(gdjs.toRad(0), gdjs.toRad(0), gdjs.toRad(0),"ZYX");


};
gdjs.evtsExt__A3F__SetListenerForCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__A3F__SetListenerForCamera.userFunc0xafaa50(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__SetListenerForCamera.func = function(runtimeScene, Layer, parentEventsFunctionContext) {
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
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__A3F__SetListenerForCamera.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__A3F__SetListenerForCamera.registeredGdjsCallbacks = [];