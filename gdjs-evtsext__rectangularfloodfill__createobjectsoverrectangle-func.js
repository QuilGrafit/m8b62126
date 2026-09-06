
if (typeof gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle !== "undefined") {
  gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle = {};
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.idToCallbackMap = new Map();
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1= [];
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects2= [];
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects3= [];
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4= [];
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects5= [];
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects6= [];


gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.mapOfGDgdjs_9546evtsExt_9595_9595RectangularFloodFill_9595_9595CreateObjectsOverRectangle_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1});
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.mapOfGDgdjs_9546evtsExt_9595_9595RectangularFloodFill_9595_9595CreateObjectsOverRectangle_9546GDObjectObjects4Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4});
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Zorder") != 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4, gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects5[i].setZOrder(eventsFunctionContext.getArgument("Zorder"));
}
}
}

}


};gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount4 = eventsFunctionContext.getArgument("NumberOfColumns");
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1, gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4);


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.mapOfGDgdjs_9546evtsExt_9595_9595RectangularFloodFill_9595_9595CreateObjectsOverRectangle_9546GDObjectObjects4Objects, eventsFunctionContext.getArgument("StartingPositionX") + eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() * (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() + eventsFunctionContext.getArgument("ColumnSpacing")), eventsFunctionContext.getArgument("StartingPositionY") + eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber() * (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() + eventsFunctionContext.getArgument("RowSpacing")), eventsFunctionContext.getArgument("Layer"));
}
{for(var i = 0, len = gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4[i].getVariables().get("RowID")).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber() + 1);
}
}
{for(var i = 0, len = gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4[i].getVariables().get("ColumnID")).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() + 1);
}
}
{for(var i = 0, len = gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4[i].returnVariable(gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4[i].getVariables().get("CreationID")).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(4).getAsNumber());
}
}
{eventsFunctionContext.localVariables[0].getFromIndex(2).add(1);
}
{eventsFunctionContext.localVariables[0].getFromIndex(4).add(1);
}

{ //Subevents: 
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(3).add(1);
}
}

}


};gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount2 = eventsFunctionContext.getArgument("NumberOfRows");
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(0);
}

{ //Subevents: 
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.eventsList3 = function(runtimeScene, eventsFunctionContext) {

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
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("x", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("y", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("CreationID", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.mapOfGDgdjs_9546evtsExt_9595_9595RectangularFloodFill_9595_9595CreateObjectsOverRectangle_9546GDObjectObjects1Objects, 0, 0, "");
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1[0].getWidth()));
}
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber((( gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1[0].getHeight()));
}
{for(var i = 0, len = gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.func = function(runtimeScene, Object, NumberOfColumns, NumberOfRows, StartingPositionX, StartingPositionY, ColumnSpacing, RowSpacing, Layer, Zorder, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
if (argName === "NumberOfColumns") return NumberOfColumns;
if (argName === "NumberOfRows") return NumberOfRows;
if (argName === "StartingPositionX") return StartingPositionX;
if (argName === "StartingPositionY") return StartingPositionY;
if (argName === "ColumnSpacing") return ColumnSpacing;
if (argName === "RowSpacing") return RowSpacing;
if (argName === "Layer") return Layer;
if (argName === "Zorder") return Zorder;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects2.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects3.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects5.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects6.length = 0;

gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects1.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects2.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects3.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects4.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects5.length = 0;
gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.GDObjectObjects6.length = 0;


return;
}

gdjs.evtsExt__RectangularFloodFill__CreateObjectsOverRectangle.registeredGdjsCallbacks = [];