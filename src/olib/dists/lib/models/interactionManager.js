"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("./button");
var InteractionManager = /** @class */ (function () {
    function InteractionManager() {
        this.buttonA = new button_1.Button(1);
    }
    InteractionManager.prototype.updateJoystickPosition = function (radius, distance) {
        // do something
    };
    InteractionManager.prototype.buttonPressed = function (buttonID) {
        // button A trigger
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;
//# sourceMappingURL=interactionManager.js.map