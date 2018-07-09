"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joystick_1 = require("./joystick");
var button_1 = require("./button");
var InteractionManager = /** @class */ (function () {
    function InteractionManager() {
        this.joystick = new joystick_1.Joystick(1);
        this.buttonA = new button_1.Button(1);
    }
    InteractionManager.prototype.updateJoystickPosition = function (radius, distance) {
        this.joystick.update(radius, distance);
    };
    InteractionManager.prototype.buttonPressed = function (buttonID) {
        // button A trigger
    };
    return InteractionManager;
}());
exports.InteractionManager = InteractionManager;
//# sourceMappingURL=interactionManager.js.map