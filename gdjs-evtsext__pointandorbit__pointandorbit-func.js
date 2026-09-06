
if (typeof gdjs.evtsExt__PointAndOrbit__PointAndOrbit !== "undefined") {
  gdjs.evtsExt__PointAndOrbit__PointAndOrbit.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PointAndOrbit__PointAndOrbit = {};
gdjs.evtsExt__PointAndOrbit__PointAndOrbit.idToCallbackMap = new Map();
gdjs.evtsExt__PointAndOrbit__PointAndOrbit.GDGunObjects1= [];
gdjs.evtsExt__PointAndOrbit__PointAndOrbit.GDGunObjects2= [];


gdjs.evtsExt__PointAndOrbit__PointAndOrbit.mapOfGDgdjs_9546evtsExt_9595_9595PointAndOrbit_9595_9595PointAndOrbit_9546GDGunObjects1Objects = Hashtable.newFrom({"Gun": gdjs.evtsExt__PointAndOrbit__PointAndOrbit.GDGunObjects1});
gdjs.evtsExt__PointAndOrbit__PointAndOrbit.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Gun"), gdjs.evtsExt__PointAndOrbit__PointAndOrbit.GDGunObjects1);
{runtimeScene.getScene().getVariables().get("__PointAndOrbit").getChild("TargetAngle").setNumber(gdjs.evtTools.common.angleBetweenPositions(eventsFunctionContext.getArgument("OrbitXpos"), eventsFunctionContext.getArgument("OrbitYpos"), eventsFunctionContext.getArgument("PointXpos"), eventsFunctionContext.getArgument("PointYpos")));
}
{gdjs.evtsExt__PointAndOrbit__PointAndOrbitAngle.func(runtimeScene, gdjs.evtsExt__PointAndOrbit__PointAndOrbit.mapOfGDgdjs_9546evtsExt_9595_9595PointAndOrbit_9595_9595PointAndOrbit_9546GDGunObjects1Objects, eventsFunctionContext.getArgument("OrbitXpos"), eventsFunctionContext.getArgument("OrbitYpos"), eventsFunctionContext.getArgument("OrbitDistance"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__PointAndOrbit").getChild("TargetAngle")), eventsFunctionContext.getArgument("PointSpeed"), eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__PointAndOrbit__PointAndOrbit.func = function(runtimeScene, Gun, OrbitXpos, OrbitYpos, OrbitDistance, PointXpos, PointYpos, PointSpeed, parentEventsFunctionContext) {
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
if (argName === "PointXpos") return PointXpos;
if (argName === "PointYpos") return PointYpos;
if (argName === "PointSpeed") return PointSpeed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PointAndOrbit__PointAndOrbit.GDGunObjects1.length = 0;
gdjs.evtsExt__PointAndOrbit__PointAndOrbit.GDGunObjects2.length = 0;

gdjs.evtsExt__PointAndOrbit__PointAndOrbit.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PointAndOrbit__PointAndOrbit.GDGunObjects1.length = 0;
gdjs.evtsExt__PointAndOrbit__PointAndOrbit.GDGunObjects2.length = 0;


return;
}

gdjs.evtsExt__PointAndOrbit__PointAndOrbit.registeredGdjsCallbacks = [];