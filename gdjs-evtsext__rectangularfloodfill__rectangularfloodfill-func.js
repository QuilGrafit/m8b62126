
if (typeof gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill !== "undefined") {
  gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill = {};
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.idToCallbackMap = new Map();
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachIndex2 = 0;

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachObjects2 = [];

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachTemporary2 = null;

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachTotalCount2 = 0;

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects1= [];
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2= [];
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1= [];
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects2= [];


gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.mapOfGDgdjs_9546evtsExt_9595_9595RectangularFloodFill_9595_9595RectangularFloodFill_9546GDFillObjectObjects1Objects = Hashtable.newFrom({"FillObject": gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1});
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.mapOfGDgdjs_9546evtsExt_9595_9595RectangularFloodFill_9595_9595RectangularFloodFill_9546GDFillObjectObjects2Objects = Hashtable.newFrom({"FillObject": gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects2});
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TargetObject"), gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects1);

for (gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachIndex2 = 0;gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachIndex2 < gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects1.length;++gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachIndex2) {
gdjs.copyArray(gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1, gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects2);

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length = 0;


gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachTemporary2 = gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects1[gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachIndex2];
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.push(gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.func(runtimeScene, gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.mapOfGDgdjs_9546evtsExt_9595_9595RectangularFloodFill_9595_9595RectangularFloodFill_9546GDFillObjectObjects2Objects, Math.floor((( gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2[0].getWidth()) / (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() + eventsFunctionContext.getArgument("SpaceBetweenColumns"))), Math.floor((( gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2[0].getHeight()) / (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() + eventsFunctionContext.getArgument("SpaceBetweenRows"))), (( gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2[0].getCenterXInScene()) - (( gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2[0].getWidth()) / 2, (( gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2[0].getCenterYInScene()) - (( gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2[0].getHeight()) / 2, eventsFunctionContext.getArgument("SpaceBetweenColumns"), eventsFunctionContext.getArgument("SpaceBetweenRows"), eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("Zorder"), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("ObjectWidth", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("ObjectHeight", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.mapOfGDgdjs_9546evtsExt_9595_9595RectangularFloodFill_9595_9595RectangularFloodFill_9546GDFillObjectObjects1Objects, 0, 0, "");
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1[0].getWidth()));
}
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber((( gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1[0].getHeight()));
}
{for(var i = 0, len = gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.func = function(runtimeScene, TargetObject, FillObject, SpaceBetweenColumns, SpaceBetweenRows, Layer, Zorder, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"TargetObject": TargetObject
, "FillObject": FillObject
},
  _objectArraysMap: {
"TargetObject": gdjs.objectsListsToArray(TargetObject)
, "FillObject": gdjs.objectsListsToArray(FillObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RectangularFloodFill"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RectangularFloodFill"),
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
if (argName === "SpaceBetweenColumns") return SpaceBetweenColumns;
if (argName === "SpaceBetweenRows") return SpaceBetweenRows;
if (argName === "Layer") return Layer;
if (argName === "Zorder") return Zorder;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length = 0;
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1.length = 0;
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects2.length = 0;

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects1.length = 0;
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDTargetObjectObjects2.length = 0;
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects1.length = 0;
gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.GDFillObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__RectangularFloodFill__RectangularFloodFill.registeredGdjsCallbacks = [];