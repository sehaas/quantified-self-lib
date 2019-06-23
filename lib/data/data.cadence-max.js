"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var data_cadence_1 = require("./data.cadence");
var DataCadenceMax = /** @class */ (function (_super) {
    __extends(DataCadenceMax, _super);
    function DataCadenceMax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataCadenceMax.className = 'DataCadenceMax';
    DataCadenceMax.type = 'Max Cadence';
    return DataCadenceMax;
}(data_cadence_1.DataCadence));
exports.DataCadenceMax = DataCadenceMax;
