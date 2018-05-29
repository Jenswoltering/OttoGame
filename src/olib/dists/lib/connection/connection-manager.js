"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("./connection");
var ConnectionManager = /** @class */ (function () {
    function ConnectionManager(roomID, eventmanager) {
        this.roomID = roomID;
        this.eventmanager = eventmanager;
        this.connection = new connection_1.default(this);
    }
    ConnectionManager.prototype.createRoom = function (roomID) {
        this.connection.createRoom(roomID);
    };
    return ConnectionManager;
}());
exports.default = ConnectionManager;
//# sourceMappingURL=connection-manager.js.map