"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var APIKey = /** @class */ (function () {
    function APIKey(key) {
        this._key = key;
        if (this.checkKey(key)) {
            this._room = this.getRoomID();
        }
        else {
            this._room = '';
        }
    }
    APIKey.prototype.isValid = function () {
        return this.checkKey(this._key);
    };
    APIKey.prototype.getRoomID = function () {
        return this._key;
    };
    APIKey.prototype.checkKey = function (key) {
        return true;
    };
    return APIKey;
}());
exports.APIKey = APIKey;
//# sourceMappingURL=api-Key.js.map