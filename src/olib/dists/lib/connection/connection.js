"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketio_ = require("socket.io-client");
var models_1 = require("../models");
var Connection = /** @class */ (function () {
    function Connection(connectionManger) {
        this._connectionManger = connectionManger;
        this.roomId = '';
        var socketio = socketio_.default || socketio_;
        this._socket = socketio('https://ottoheroku.herokuapp.com');
    }
    Connection.prototype.createRoom = function (roomId) {
        this._socket.emit('create', roomId);
        this.listen(this._socket);
    };
    Connection.prototype.listen = function (socket) {
        var _this = this;
        var joystick = new models_1.Joystick(1);
        socket.on('jsm', function (data) { return _this._connectionManger.eventmanager.dispatchJoystickMove(joystick); });
        socket.on('jss', function (data) { return console.log(data); });
    };
    return Connection;
}());
exports.default = Connection;
//# sourceMappingURL=connection.js.map