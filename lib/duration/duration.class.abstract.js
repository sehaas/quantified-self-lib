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
var stats_class_abstract_1 = require("../stats/stats.class.abstract");
var data_pause_1 = require("../data/data.pause");
var data_duration_1 = require("../data/data.duration");
var DurationClassAbstract = /** @class */ (function (_super) {
    __extends(DurationClassAbstract, _super);
    function DurationClassAbstract(statDate, endDate) {
        var _this = this;
        if (!statDate || !endDate) {
            throw new Error('Start and end dates are required');
        }
        _this = _super.call(this) || this;
        _this.startDate = statDate;
        _this.endDate = endDate;
        return _this;
    }
    DurationClassAbstract.prototype.getDuration = function () {
        return this.stats.get(data_duration_1.DataDuration.className);
    };
    DurationClassAbstract.prototype.getPause = function () {
        return this.stats.get(data_pause_1.DataPause.className);
    };
    DurationClassAbstract.prototype.setDuration = function (duration) {
        this.stats.set(data_duration_1.DataDuration.className, duration);
    };
    DurationClassAbstract.prototype.setPause = function (pause) {
        this.stats.set(data_pause_1.DataPause.className, pause);
    };
    return DurationClassAbstract;
}(stats_class_abstract_1.StatsClassAbstract));
exports.DurationClassAbstract = DurationClassAbstract;
