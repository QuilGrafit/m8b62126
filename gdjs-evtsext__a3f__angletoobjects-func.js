
if (typeof gdjs.evtsExt__A3F__AngleToObjects !== "undefined") {
  gdjs.evtsExt__A3F__AngleToObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__A3F__AngleToObjects = {};
gdjs.evtsExt__A3F__AngleToObjects.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__AngleToObjects.GDObjectObjects1= [];
gdjs.evtsExt__A3F__AngleToObjects.GDTargetObjects1= [];


gdjs.evtsExt__A3F__AngleToObjects.userFunc0xaa4d98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
const Targets = eventsFunctionContext.getObjects("Target");
const TargetPoint = eventsFunctionContext.getArgument("TargetPoint");
//
if (Targets.length === 0) {
    return;
}
const Target2D = Targets[0];
const Target3D = Target2D.get3DRendererObject();
//
if (!Object3D || !Target3D) {
    return;
}
//
let TargetPos;
if (TargetPoint === "Center point") {
    TargetPos = new THREE.Vector3(Target2D.getCenterXInScene(), -Target2D.getCenterYInScene(), Target2D.getCenterZInScene());
} else {
    TargetPos = new THREE.Vector3(Target2D.getX(), -Target2D.getY(), Target2D.getZ());
}
const ObjectPos = Object3D.getWorldPosition(new THREE.Vector3());
const Dir = TargetPos.sub(ObjectPos).normalize();
// matrixWorld に含まれるGDevelopのY軸反転が transformDirection() に悪影響を与えていたため、
// クォータニオンで回転のみを取り出す方式に変更。
const WorldQuaternion = new THREE.Quaternion();
Object3D.getWorldQuaternion(WorldQuaternion);
Dir.applyQuaternion(WorldQuaternion.invert());
//
eventsFunctionContext.returnValue = gdjs.toDegrees(Math.acos(THREE.MathUtils.clamp(-Dir.x, -1, 1)));


};
gdjs.evtsExt__A3F__AngleToObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__AngleToObjects.GDObjectObjects1);

const objects = gdjs.evtsExt__A3F__AngleToObjects.GDObjectObjects1;
gdjs.evtsExt__A3F__AngleToObjects.userFunc0xaa4d98(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__A3F__AngleToObjects.func = function(runtimeScene, Object, Target, TargetPoint, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Target": Target
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
, "Target": gdjs.objectsListsToArray(Target)
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
if (argName === "TargetPoint") return TargetPoint;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__A3F__AngleToObjects.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__AngleToObjects.GDTargetObjects1.length = 0;

gdjs.evtsExt__A3F__AngleToObjects.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__AngleToObjects.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__AngleToObjects.GDTargetObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__A3F__AngleToObjects.registeredGdjsCallbacks = [];