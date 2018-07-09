"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_manager_1 = require("../connection/connection-manager");
var event_manager_1 = require("../events/event-manager");
var Factory = {
    createConnectionManager: function (key, eventmgr) {
        return new connection_manager_1.default(key, eventmgr);
    },
    createEventManager: function () {
        return new event_manager_1.default();
    }
};
exports.default = Factory;
//# sourceMappingURL=factory.js.map