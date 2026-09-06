
gdjs.evtsExt__WebLLM__LLM = gdjs.evtsExt__WebLLM__LLM || {};

/**
 * Behavior generated from LLM
 */
gdjs.evtsExt__WebLLM__LLM.LLM = class LLM extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WebLLM__LLM.LLM.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData._lastMessage = "";
    this._behaviorData._message = "";
    this._behaviorData._lastError = "";
    this._behaviorData._error = "";
    this._behaviorData._streamDelta = "";
    this._behaviorData._status = "idle";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding._lastMessage !== undefined)
      this._behaviorData._lastMessage = behaviorOverriding._lastMessage;
    if (behaviorOverriding._message !== undefined)
      this._behaviorData._message = behaviorOverriding._message;
    if (behaviorOverriding._lastError !== undefined)
      this._behaviorData._lastError = behaviorOverriding._lastError;
    if (behaviorOverriding._error !== undefined)
      this._behaviorData._error = behaviorOverriding._error;
    if (behaviorOverriding._streamDelta !== undefined)
      this._behaviorData._streamDelta = behaviorOverriding._streamDelta;
    if (behaviorOverriding._status !== undefined)
      this._behaviorData._status = behaviorOverriding._status;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    _lastMessage: this._behaviorData._lastMessage,
    _message: this._behaviorData._message,
    _lastError: this._behaviorData._lastError,
    _error: this._behaviorData._error,
    _streamDelta: this._behaviorData._streamDelta,
    _status: this._behaviorData._status,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props._lastMessage !== undefined)
      this._behaviorData._lastMessage = networkSyncData.props._lastMessage;
    if (networkSyncData.props._message !== undefined)
      this._behaviorData._message = networkSyncData.props._message;
    if (networkSyncData.props._lastError !== undefined)
      this._behaviorData._lastError = networkSyncData.props._lastError;
    if (networkSyncData.props._error !== undefined)
      this._behaviorData._error = networkSyncData.props._error;
    if (networkSyncData.props._streamDelta !== undefined)
      this._behaviorData._streamDelta = networkSyncData.props._streamDelta;
    if (networkSyncData.props._status !== undefined)
      this._behaviorData._status = networkSyncData.props._status;
  }

  // Properties:
  
  _get_lastMessage() {
    return this._behaviorData._lastMessage !== undefined ? this._behaviorData._lastMessage : "";
  }
  _set_lastMessage(newValue) {
    this._behaviorData._lastMessage = newValue;
  }
  _get_message() {
    return this._behaviorData._message !== undefined ? this._behaviorData._message : "";
  }
  _set_message(newValue) {
    this._behaviorData._message = newValue;
  }
  _get_lastError() {
    return this._behaviorData._lastError !== undefined ? this._behaviorData._lastError : "";
  }
  _set_lastError(newValue) {
    this._behaviorData._lastError = newValue;
  }
  _get_error() {
    return this._behaviorData._error !== undefined ? this._behaviorData._error : "";
  }
  _set_error(newValue) {
    this._behaviorData._error = newValue;
  }
  _get_streamDelta() {
    return this._behaviorData._streamDelta !== undefined ? this._behaviorData._streamDelta : "";
  }
  _set_streamDelta(newValue) {
    this._behaviorData._streamDelta = newValue;
  }
  _get_status() {
    return this._behaviorData._status !== undefined ? this._behaviorData._status : "idle";
  }
  _set_status(newValue) {
    this._behaviorData._status = newValue;
  }
}

/**
 * Shared data generated from LLM
 */
gdjs.evtsExt__WebLLM__LLM.LLM.SharedData = class LLMSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WebLLM__LLM.LLM.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WebLLM_LLMSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WebLLM_LLMSharedData = new gdjs.evtsExt__WebLLM__LLM.LLM.SharedData(
      initialData
    );
  }
  return instanceContainer._WebLLM_LLMSharedData;
}

// Methods:
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.GDObjectObjects1= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.userFunc0x135cca0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var behavior = objects[0].getBehavior('LLM');
var text = eventsFunctionContext.getArgument('text');
var systemPrompt = eventsFunctionContext.getArgument('systemPrompt');

behavior._set_error('');
behavior._set_lastError('');
behavior._set_status('generating');

var engine = runtimeScene._WebLLM && runtimeScene._WebLLM.engine;
if (!engine) {
  behavior._set_error('Model not loaded. Use the Load Model action first.');
  behavior._set_status('error');
  return;
}

var messages = [];
if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
messages.push({ role: 'user', content: text });

engine.chat.completions.create({
  messages: messages,
  stream: false
}).then(function(response) {
  behavior._set_message(response.choices[0].message.content);
  behavior._set_status('done');
}).catch(function(err) {
  behavior._set_error(err.message || String(err));
  behavior._set_status('error');
});
};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.GDObjectObjects1;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.userFunc0x135cca0(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessage = function(text, systemPrompt, parentEventsFunctionContext) {

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
if (argName === "text") return text;
if (argName === "systemPrompt") return systemPrompt;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.GDObjectObjects1= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.userFunc0x1359f38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var behavior = objects[0].getBehavior('LLM');
var contextArray = eventsFunctionContext.getArgument('context');
var systemPrompt = eventsFunctionContext.getArgument('systemPrompt');

behavior._set_error('');
behavior._set_lastError('');
behavior._set_status('generating');

var engine = runtimeScene._WebLLM && runtimeScene._WebLLM.engine;
if (!engine) {
  behavior._set_error('Model not loaded. Use the Load Model action first.');
  behavior._set_status('error');
  return;
}

var messages = [];
if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
messages = messages.concat(contextArray._childrenArray);

engine.chat.completions.create({
  messages: messages,
  stream: false
}).then(function(response) {
  behavior._set_message(response.choices[0].message.content);
  behavior._set_status('done');
}).catch(function(err) {
  behavior._set_error(err.message || String(err));
  behavior._set_status('error');
  contextArray._childrenArray.pop();
});
};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.GDObjectObjects1;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.userFunc0x1359f38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContext = function(context, systemPrompt, parentEventsFunctionContext) {

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
if (argName === "context") return context;
if (argName === "systemPrompt") return systemPrompt;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.GDObjectObjects1= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.userFunc0x135cc48 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var behavior = objects[0].getBehavior('LLM');
var contextArray = eventsFunctionContext.getArgument('context');
var message = eventsFunctionContext.getArgument('text');
var role = eventsFunctionContext.getArgument('role');

contextArray._childrenArray.push({ content: message, role: role });
};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.GDObjectObjects1;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.userFunc0x135cc48(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContext = function(text, role, context, parentEventsFunctionContext) {

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
if (argName === "text") return text;
if (argName === "role") return role;
if (argName === "context") return context;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.addMessageToContextContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.userFunc0x135ec48 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var behavior = objects[0].getBehavior('LLM');
var text = eventsFunctionContext.getArgument('text');
var systemPrompt = eventsFunctionContext.getArgument('systemPrompt');

behavior._set_streamDelta('');
behavior.__deltaCount = 0;
behavior.__lastDeltaCount = 0;
behavior._set_error('');
behavior._set_lastError('');
behavior._set_status('generating');

var engine = runtimeScene._WebLLM && runtimeScene._WebLLM.engine;
if (!engine) {
  behavior._set_error('Model not loaded. Use the Load Model action first.');
  behavior._set_status('error');
  return;
}

var messages = [];
if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
messages.push({ role: 'user', content: text });

(async function() {
  try {
    var stream = await engine.chat.completions.create({ messages: messages, stream: true });
    var fullMessage = '';
    for await (var chunk of stream) {
      var delta = (chunk.choices[0] && chunk.choices[0].delta && chunk.choices[0].delta.content) || '';
      if (delta) {
        fullMessage += delta;
        behavior._set_streamDelta(delta);
        behavior.__deltaCount = (behavior.__deltaCount || 0) + 1;
      }
    }
    behavior._set_message(fullMessage);
    behavior._set_status('done');
  } catch (err) {
    behavior._set_error(err.message || String(err));
    behavior._set_status('error');
  }
})();
};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.GDObjectObjects1;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.userFunc0x135ec48(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreaming = function(text, systemPrompt, parentEventsFunctionContext) {

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
if (argName === "text") return text;
if (argName === "systemPrompt") return systemPrompt;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessageStreamingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.GDObjectObjects1= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.userFunc0x130e9a8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var behavior = objects[0].getBehavior('LLM');
var contextArray = eventsFunctionContext.getArgument('context');
var systemPrompt = eventsFunctionContext.getArgument('systemPrompt');

behavior._set_streamDelta('');
behavior.__deltaCount = 0;
behavior.__lastDeltaCount = 0;
behavior._set_error('');
behavior._set_lastError('');
behavior._set_status('generating');

var engine = runtimeScene._WebLLM && runtimeScene._WebLLM.engine;
if (!engine) {
  behavior._set_error('Model not loaded. Use the Load Model action first.');
  behavior._set_status('error');
  return;
}

var messages = [];
if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
messages = messages.concat(contextArray._childrenArray);

(async function() {
  try {
    var stream = await engine.chat.completions.create({ messages: messages, stream: true });
    var fullMessage = '';
    for await (var chunk of stream) {
      var delta = (chunk.choices[0] && chunk.choices[0].delta && chunk.choices[0].delta.content) || '';
      if (delta) {
        fullMessage += delta;
        behavior._set_streamDelta(delta);
        behavior.__deltaCount = (behavior.__deltaCount || 0) + 1;
      }
    }
    behavior._set_message(fullMessage);
    behavior._set_status('done');
  } catch (err) {
    behavior._set_error(err.message || String(err));
    behavior._set_status('error');
    contextArray._childrenArray.pop();
  }
})();
};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.GDObjectObjects1;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.userFunc0x130e9a8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreaming = function(context, systemPrompt, parentEventsFunctionContext) {

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
if (argName === "context") return context;
if (argName === "systemPrompt") return systemPrompt;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.sendMessagesContextStreamingContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects1= [];
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects2= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_message());}
}

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponse = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getResponseContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects1= [];
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects2= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_error());}
}

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getError = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getErrorContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects1= [];
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects2= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_streamDelta());}
}

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDelta = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.getLastDeltaContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1= [];
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects2= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_lastMessage() != (gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_message()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1[k] = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(16047764);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._set_lastMessage((gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_message()));
}
}
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessage = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onMessageContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1= [];
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects2= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_lastError() != (gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_error()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[k] = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_error() != "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[k] = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(16050268);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._set_lastError((gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_error()));
}
}
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onError = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onErrorContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.GDObjectObjects1= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.userFunc0x1360ba8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var behavior = objects[0].getBehavior('LLM');
var current = behavior.__deltaCount || 0;
var last = behavior.__lastDeltaCount || 0;
if (current !== last) {
  behavior.__lastDeltaCount = current;
  eventsFunctionContext.returnValue = true;
} else {
  eventsFunctionContext.returnValue = false;
}
};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.GDObjectObjects1;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.userFunc0x1360ba8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceived = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.onDeltaReceivedContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext = {};
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.idToCallbackMap = new Map();
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1= [];
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects2= [];


gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._get_status() == "generating" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1[k] = gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGenerating = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WebLLM__LLM.LLM.prototype.isGeneratingContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WebLLM__LLM.LLM.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WebLLM::LLM", gdjs.evtsExt__WebLLM__LLM.LLM);
