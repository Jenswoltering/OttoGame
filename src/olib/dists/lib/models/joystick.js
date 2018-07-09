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
    function Joystick(id) {
        this.id = id;
        this._polarX = 0;
        this._polarY = 0;
        this._direction = Direction.No;
    }
    Joystick.prototype.update = function (radius, distance) {
        // do something
    };
    return Joystick;
}());
exports.Joystick = Joystick;
//# sourceMappingURL=joystick.js.map