"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interactionManager_1 = require("./interactionManager");
var User = /** @class */ (function () {
    function User(socket) {
        this.socket = socket;
        this.id = socket.id;
        this.interactionManager = new interactionManager_1.InteractionManager();
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map