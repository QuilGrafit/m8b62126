
gdjs.evtsExt__A3F__A3I = gdjs.evtsExt__A3F__A3I || {};

/**
 * Behavior generated from Advanced 3D Initial Properties
 */
gdjs.evtsExt__A3F__A3I.A3I = class A3I extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__A3F__A3I.A3I.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Capability3d = behaviorData.Capability3d !== undefined ? behaviorData.Capability3d : "";
    this._behaviorData.AxesHelper = behaviorData.AxesHelper !== undefined ? behaviorData.AxesHelper : false;
    this._behaviorData.Blend = behaviorData.Blend !== undefined ? behaviorData.Blend : "Keep model blend mode";
    this._behaviorData.Opacity = behaviorData.Opacity !== undefined ? behaviorData.Opacity : Number("255") || 0;
    this._behaviorData.CastShadow = behaviorData.CastShadow !== undefined ? behaviorData.CastShadow : false;
    this._behaviorData.ReceiveShadow = behaviorData.ReceiveShadow !== undefined ? behaviorData.ReceiveShadow : false;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Capability3d !== undefined)
      this._behaviorData.Capability3d = behaviorOverriding.Capability3d;
    if (behaviorOverriding.AxesHelper !== undefined)
      this._behaviorData.AxesHelper = behaviorOverriding.AxesHelper;
    if (behaviorOverriding.Blend !== undefined)
      this._behaviorData.Blend = behaviorOverriding.Blend;
    if (behaviorOverriding.Opacity !== undefined)
      this._behaviorData.Opacity = behaviorOverriding.Opacity;
    if (behaviorOverriding.CastShadow !== undefined)
      this._behaviorData.CastShadow = behaviorOverriding.CastShadow;
    if (behaviorOverriding.ReceiveShadow !== undefined)
      this._behaviorData.ReceiveShadow = behaviorOverriding.ReceiveShadow;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Capability3d: this._behaviorData.Capability3d,
    AxesHelper: this._behaviorData.AxesHelper,
    Blend: this._behaviorData.Blend,
    Opacity: this._behaviorData.Opacity,
    CastShadow: this._behaviorData.CastShadow,
    ReceiveShadow: this._behaviorData.ReceiveShadow,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Capability3d !== undefined)
      this._behaviorData.Capability3d = networkSyncData.props.Capability3d;
    if (networkSyncData.props.AxesHelper !== undefined)
      this._behaviorData.AxesHelper = networkSyncData.props.AxesHelper;
    if (networkSyncData.props.Blend !== undefined)
      this._behaviorData.Blend = networkSyncData.props.Blend;
    if (networkSyncData.props.Opacity !== undefined)
      this._behaviorData.Opacity = networkSyncData.props.Opacity;
    if (networkSyncData.props.CastShadow !== undefined)
      this._behaviorData.CastShadow = networkSyncData.props.CastShadow;
    if (networkSyncData.props.ReceiveShadow !== undefined)
      this._behaviorData.ReceiveShadow = networkSyncData.props.ReceiveShadow;
  }

  // Properties:
  
  _getCapability3d() {
    return this._behaviorData.Capability3d !== undefined ? this._behaviorData.Capability3d : "";
  }
  _setCapability3d(newValue) {
    this._behaviorData.Capability3d = newValue;
  }
  _getAxesHelper() {
    return this._behaviorData.AxesHelper !== undefined ? this._behaviorData.AxesHelper : false;
  }
  _setAxesHelper(newValue) {
    this._behaviorData.AxesHelper = newValue;
  }
  _toggleAxesHelper() {
    this._setAxesHelper(!this._getAxesHelper());
  }
  _getBlend() {
    return this._behaviorData.Blend !== undefined ? this._behaviorData.Blend : "Keep model blend mode";
  }
  _setBlend(newValue) {
    this._behaviorData.Blend = newValue;
  }
  _getOpacity() {
    return this._behaviorData.Opacity !== undefined ? this._behaviorData.Opacity : Number("255") || 0;
  }
  _setOpacity(newValue) {
    this._behaviorData.Opacity = newValue;
  }
  _getCastShadow() {
    return this._behaviorData.CastShadow !== undefined ? this._behaviorData.CastShadow : false;
  }
  _setCastShadow(newValue) {
    this._behaviorData.CastShadow = newValue;
  }
  _toggleCastShadow() {
    this._setCastShadow(!this._getCastShadow());
  }
  _getReceiveShadow() {
    return this._behaviorData.ReceiveShadow !== undefined ? this._behaviorData.ReceiveShadow : false;
  }
  _setReceiveShadow(newValue) {
    this._behaviorData.ReceiveShadow = newValue;
  }
  _toggleReceiveShadow() {
    this._setReceiveShadow(!this._getReceiveShadow());
  }
}

/**
 * Shared data generated from Advanced 3D Initial Properties
 */
gdjs.evtsExt__A3F__A3I.A3I.SharedData = class A3ISharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__A3F__A3I.A3I.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._A3F_A3ISharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._A3F_A3ISharedData = new gdjs.evtsExt__A3F__A3I.A3I.SharedData(
      initialData
    );
  }
  return instanceContainer._A3F_A3ISharedData;
}

// Methods:
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext = {};
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595A3F_9595_9595A3I_9546A3I_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1});
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595A3F_9595_9595A3I_9546A3I_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1});
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595A3F_9595_9595A3I_9546A3I_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1});
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__A3F__Initialize.func(runtimeScene, eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAxesHelper();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1);
{gdjs.evtsExt__A3F__AddAxesHelper.func(runtimeScene, gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595A3F_9595_9595A3I_9546A3I_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("Capability3d"), eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBlend() != "Keep model blend mode");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1);
{gdjs.evtsExt__A3F__ChangeBlendModeV2.func(runtimeScene, gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595A3F_9595_9595A3I_9546A3I_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("Capability3d"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBlend(), false, eventsFunctionContext);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacity() != 255);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1);
{gdjs.evtsExt__A3F__ChangeOpacityV2.func(runtimeScene, gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595A3F_9595_9595A3I_9546A3I_9546prototype_9546onCreatedContext_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("Capability3d"), "=", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacity(), false, eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Capability3d": this._getCapability3d()
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__A3F__A3I.A3I.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__A3F__A3I.A3I.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("A3F::A3I", gdjs.evtsExt__A3F__A3I.A3I);
