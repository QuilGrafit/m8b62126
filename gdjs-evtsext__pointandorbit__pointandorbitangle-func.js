
if (typeof gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle !== "undefined") {
  gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle = {};
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.idToCallbackMap = new Map();
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1= [];
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2= [];
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects3= [];


gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Gun"), gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(180 + eventsFunctionContext.getArgument("TargetAngle") - (( gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2[0].getAngle()), 360) < 180);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2 */
{runtimeScene.getScene().getVariables().get("__PointAndOrbit").getChild("NextFrameAngle").setNumber((( gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2[0].getAngle()) - (eventsFunctionContext.getArgument("PointSpeed") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Gun"), gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(180 + (( gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1[0].getAngle()) - eventsFunctionContext.getArgument("TargetAngle"), 360) < 180);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1 */
{runtimeScene.getScene().getVariables().get("__PointAndOrbit").getChild("NextFrameAngle").setNumber((( gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1[0].getAngle()) + (eventsFunctionContext.getArgument("PointSpeed") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}

}


};gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Gun"), gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1);
{for(var i = 0, len = gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1[i].putAround(eventsFunctionContext.getArgument("OrbitXpos"), eventsFunctionContext.getArgument("OrbitYpos"), eventsFunctionContext.getArgument("OrbitDistance"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__PointAndOrbit").getChild("NextFrameAngle")));
}
}
{for(var i = 0, len = gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1[i].rotateTowardAngle(eventsFunctionContext.getArgument("TargetAngle"), eventsFunctionContext.getArgument("PointSpeed"), runtimeScene);
}
}
}

}


};

gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.func = function(runtimeScene, Gun, OrbitXpos, OrbitYpos, OrbitDistance, TargetAngle, PointSpeed, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Gun": Gun
},
  _objectArraysMap: {
"Gun": gdjs.objectsListsToArray(Gun)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PointAndOrbit"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PointAndOrbit"),
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
if (argName === "OrbitXpos") return OrbitXpos;
if (argName === "OrbitYpos") return OrbitYpos;
if (argName === "OrbitDistance") return OrbitDistance;
if (argName === "TargetAngle") return TargetAngle;
if (argName === "PointSpeed") return PointSpeed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1.length = 0;
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2.length = 0;
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects3.length = 0;

gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects1.length = 0;
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects2.length = 0;
gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.GDGunObjects3.length = 0;


return;
}

gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.registeredGdjsCallbacks = [];