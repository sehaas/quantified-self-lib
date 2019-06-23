"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_interface_1 = require("./data.interface");
var Data = /** @class */ (function () {
    function Data(value) {
        if ((typeof value !== 'string') && (typeof value !== 'number') && (typeof value !== 'boolean')) {
            throw new Error('Value is not boolean or number or string ');
        }
        this.value = value;
    }
    Data.prototype.setValue = function (value) {
        this.value = value;
    };
    Data.prototype.getValue = function () {
        return this.value;
    };
    Data.prototype.getDisplayValue = function () {
        var value = this.getValue();
        if (typeof value === 'boolean') {
            value = String(value);
        }
        return value;
    };
    Data.prototype.getType = function () {
        return this.constructor.type;
    };
    Data.prototype.getUnit = function () {
        return this.constructor.unit;
    };
    Data.prototype.getDisplayUnit = function () {
        return this.getUnit();
    };
    Data.prototype.getUnitSystem = function () {
        return this.constructor.unitSystem;
    };
    Data.prototype.getClassName = function () {
        return this.constructor.className;
    };
    Data.prototype.toJSON = function () {
        return {
            className: this.getClassName(),
            value: this.getValue(),
        };
    };
    Data.unitSystem = data_interface_1.UnitSystem.Metric;
    return Data;
}());
exports.Data = Data;
