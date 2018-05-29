"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strongly_typed_events_1 = require("strongly-typed-events");
var EventManager = /** @class */ (function () {
    function EventManager() {
        this._onJoystickMove = new strongly_typed_events_1.SimpleEventDispatcher();
        this._onMoveUp = new strongly_typed_events_1.SimpleEventDispatcher();
        this._onMoveRigth = new strongly_typed_events_1.SimpleEventDispatcher();
        this._onMoveDown = new strongly_typed_events_1.SimpleEventDispatcher();
        this._onMoveLeft = new strongly_typed_events_1.SimpleEventDispatcher();
        this._onNewClient = new strongly_typed_events_1.SimpleEventDispatcher();
        // just do nothing at the moment
    }
    // Subscribable Events
    EventManager.prototype.onMoveUp = function () {
        return this._onMoveUp.asEvent();
    };
    Object.defineProperty(EventManager.prototype, "onJoystickMove", {
        get: function () {
            return this._onJoystickMove.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventManager.prototype, "onNewClient", {
        get: function () {
            return this._onNewClient.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventManager.prototype, "onMoveRight", {
        get: function () {
            return this._onMoveRigth.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventManager.prototype, "onMoveLeft", {
        get: function () {
            return this._onMoveLeft.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventManager.prototype, "onMoveDown", {
        get: function () {
            return this._onMoveDown.asEvent();
        },
        enumerable: true,
        configurable: true
    });
    // Dispatch Methods 
    EventManager.prototype.dispatchJoystickMove = function (joystick) {
        this._onJoystickMove.dispatch(joystick);
    };
    EventManager.prototype.dispatchJoystickUp = function (joystick) {
        this._onMoveUp.dispatch(joystick);
    };
    EventManager.prototype.dispatchJoystickRight = function (joystick) {
        this._onMoveRigth.dispatch(joystick);
    };
    EventManager.prototype.dispatchJoystickDown = function (joystick) {
        this._onMoveDown.dispatch(joystick);
    };
    EventManager.prototype.dispatchJoystickLeft = function (joystick) {
        this._onMoveLeft.dispatch(joystick);
    };
    EventManager.prototype.dispatchNewClient = function (clientID) {
        this._onNewClient.dispatch(clientID);
    };
    return EventManager;
}());
exports.default = EventManager;
//# sourceMappingURL=event-manager.js.map