"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["No"] = 0] = "No";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Joystick = /** @class */ (function () {
    function Joystick(angle, distance) {
        this._angle = angle;
        this._distance = distance;
    }
    Joystick.prototype.update = function (radius, distance) {
        // do something
    };
    return Joystick;
}());
exports.Joystick = Joystick;
//# sourceMappingURL=joystick.js.map