"use strict";
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("./utils/factory");
var api_Key_1 = require("./models/api-Key");
var OttoLib = /** @class */ (function () {
    function OttoLib(appKey) {
        this.key = new api_Key_1.APIKey(appKey);
        if (this.key.isValid()) {
            this.eventManager = factory_1.default.createEventManager();
            this.connectionManager = factory_1.default.createConnectionManager(this.key.getRoomID(), this.eventManager);
            this.initEvent();
        }
    }
    OttoLib.prototype.start = function (roomID) {
        this.connectionManager.createRoom(roomID);
    };
    OttoLib.prototype.initEvent = function () {
        // add more Events hier
        this.onJoystickMove = this.eventManager.onJoystickMove;
        this.newUserJoined = this.eventManager.onNewClient;
    };
    return OttoLib;
}());
exports.default = OttoLib;
//# sourceMappingURL=ottolib.js.map