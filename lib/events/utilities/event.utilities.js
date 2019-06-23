"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var exporter_tcx_1 = require("../adapters/exporters/exporter.tcx");
var event_1 = require("../event");
var data_heart_rate_1 = require("../../data/data.heart-rate");
var data_cadence_1 = require("../../data/data.cadence");
var data_speed_1 = require("../../data/data.speed");
var data_vertical_speed_1 = require("../../data/data.vertical-speed");
var data_temperature_1 = require("../../data/data.temperature");
var data_altitude_1 = require("../../data/data.altitude");
var data_power_1 = require("../../data/data.power");
var data_altitude_max_1 = require("../../data/data.altitude-max");
var data_altitude_min_1 = require("../../data/data.altitude-min");
var data_altitude_avg_1 = require("../../data/data.altitude-avg");
var data_heart_rate_max_1 = require("../../data/data.heart-rate-max");
var data_heart_rate_min_1 = require("../../data/data.heart-rate-min");
var data_heart_rate_avg_1 = require("../../data/data.heart-rate-avg");
var data_cadence_max_1 = require("../../data/data.cadence-max");
var data_cadence_min_1 = require("../../data/data.cadence-min");
var data_cadence_avg_1 = require("../../data/data.cadence-avg");
var data_speed_max_1 = require("../../data/data.speed-max");
var data_speed_min_1 = require("../../data/data.speed-min");
var data_speed_avg_1 = require("../../data/data.speed-avg");
var data_vertical_speed_max_1 = require("../../data/data.vertical-speed-max");
var data_vertical_speed_min_1 = require("../../data/data.vertical-speed-min");
var data_vertical_speed_avg_1 = require("../../data/data.vertical-speed-avg");
var data_power_max_1 = require("../../data/data.power-max");
var data_power_min_1 = require("../../data/data.power-min");
var data_power_avg_1 = require("../../data/data.power-avg");
var data_temperature_max_1 = require("../../data/data.temperature-max");
var data_temperature_min_1 = require("../../data/data.temperature-min");
var data_temperature_avg_1 = require("../../data/data.temperature-avg");
var data_distance_1 = require("../../data/data.distance");
var data_duration_1 = require("../../data/data.duration");
var data_pause_1 = require("../../data/data.pause");
var data_ascent_1 = require("../../data/data.ascent");
var data_descent_1 = require("../../data/data.descent");
var geolib_adapter_1 = require("../../geodesy/adapters/geolib.adapter");
var data_pace_max_1 = require("../../data/data.pace-max");
var data_pace_1 = require("../../data/data.pace");
var data_pace_min_1 = require("../../data/data.pace-min");
var data_pace_avg_1 = require("../../data/data.pace-avg");
var activity_1 = require("../../activities/activity");
var data_number_of_points_1 = require("../../data/data.number-of-points");
var data_battery_charge_1 = require("../../data/data.battery-charge");
var data_battery_consumption_1 = require("../../data/data.battery-consumption");
var data_battery_life_estimation_1 = require("../../data/data.battery-life-estimation");
var exporter_json_1 = require("../adapters/exporters/exporter.json");
var EventUtilities = /** @class */ (function () {
    function EventUtilities() {
    }
    EventUtilities.getEventAsTCXBloB = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var tcxString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exporter_tcx_1.EventExporterTCX.getAsString(event)];
                    case 1:
                        tcxString = _a.sent();
                        return [2 /*return*/, (new Blob([tcxString], { type: exporter_tcx_1.EventExporterTCX.fileType }))];
                }
            });
        });
    };
    EventUtilities.getEventAsJSONBloB = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var tcxString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exporter_json_1.EventExporterJSON.getAsString(event)];
                    case 1:
                        tcxString = _a.sent();
                        return [2 /*return*/, (new Blob([tcxString], { type: exporter_tcx_1.EventExporterTCX.fileType }))];
                }
            });
        });
    };
    EventUtilities.getDataTypeAvg = function (event, dataType, startDate, endDate, activities) {
        var count = 0;
        var averageForDataType = event.getPoints(startDate, endDate, activities).reduce(function (average, point) {
            var data = point.getDataByType(dataType);
            if (!data) {
                return average;
            }
            average += Number(data.getValue());
            count++;
            return average;
        }, 0);
        return (averageForDataType / count);
    };
    EventUtilities.getDateTypeMax = function (event, dataType, startDate, endDate, activities) {
        return this.getDataTypeMinOrMax(true, event, dataType, startDate, endDate, activities);
    };
    EventUtilities.getDateTypeMin = function (event, dataType, startDate, endDate, activities) {
        return this.getDataTypeMinOrMax(false, event, dataType, startDate, endDate, activities);
    };
    EventUtilities.getDataTypeDifference = function (event, dataType, startDate, endDate, activities) {
        return this.getDateTypeMax(event, dataType, startDate, endDate, activities) - this.getDateTypeMin(event, dataType, startDate, endDate, activities);
    };
    EventUtilities.mergeEvents = function (events) {
        return new Promise(function (resolve, reject) {
            // First sort the events by first point date
            events.sort(function (eventA, eventB) {
                return +eventA.getFirstActivity().startDate - +eventB.getFirstActivity().startDate;
            });
            var activities = [];
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event_2 = events_1[_i];
                for (var _a = 0, _b = event_2.getActivities(); _a < _b.length; _a++) {
                    var activity = _b[_a];
                    activities.push(activity);
                }
            }
            var event = new event_1.Event("Merged at " + (new Date()).toISOString(), activities[0].startDate, activities[activities.length - 1].endDate);
            activities.forEach(function (activity) { return event.addActivity(activity); });
            // Set the totals for the event
            event.setDuration(new data_duration_1.DataDuration(event.getActivities().reduce(function (duration, activity) { return activity.getDuration().getValue(); }, 0)));
            event.setDistance(new data_distance_1.DataDistance(event.getActivities().reduce(function (duration, activity) { return activity.getDistance() ? activity.getDistance().getValue() : 0; }, 0)));
            event.setPause(new data_pause_1.DataPause(event.getActivities().reduce(function (duration, activity) { return activity.getPause().getValue(); }, 0)));
            //@todo add generate
            return resolve(event);
        });
    };
    EventUtilities.calculatePointDistance = function (activity) {
        // const geoLib = new GeoLibAdapter();
        // let distance = 0;
        // activity.getPointsWithPosition().reduce((prev: PointInterface, current: PointInterface, index: number) => {
        //   if (index === 0) {
        //     prev.addData(new DataDistance(distance))
        //   }
        //   distance += geoLib.getDistance([prev, current]);
        //   current.addData(new DataDistance(distance));
        //   return current;
        // });
    };
    EventUtilities.cropDistance = function (startDistance, endDistance, activity) {
        // Short to do the search just in case
        activity.sortPointsByDate();
        var startDistanceDate; // Does not sound right
        var endDistanceDate;
        activity.getPoints().forEach(function (point) {
            // find start and end date
            var pointDistance = point.getDataByType(data_distance_1.DataDistance.type);
            if (!startDistanceDate && pointDistance && pointDistance.getValue() >= startDistance) {
                startDistanceDate = point.getDate();
                return;
            }
            if (!endDistanceDate && pointDistance && pointDistance.getValue() >= endDistance) {
                endDistanceDate = point.getDate();
                return;
            }
        });
        activity = this.cropTime(activity, startDistanceDate, endDistanceDate);
        // Should  reset all stats
        activity.clearStats();
        // Set the distance
        activity.setDistance(new data_distance_1.DataDistance(endDistance));
        return activity;
    };
    EventUtilities.cropTime = function (activity, startDate, endDate) {
        activity.getPoints().forEach(function (point) {
            // Remove depending on Date
            if (startDate && point.getDate() < startDate) {
                activity.removePoint(point);
            }
            if (endDate && point.getDate() > endDate) {
                activity.removePoint(point);
            }
            // Clear up the distance data as it's accumulated
            point.removeDataByType(data_distance_1.DataDistance.type);
        });
        activity.startDate = startDate || activity.endDate;
        activity.endDate = endDate || activity.endDate;
        return activity;
    };
    EventUtilities.generateStats = function (event) {
        var _this = this;
        // Todo should also work for event
        event.getActivities().map(function (activity) {
            // Generate for activities
            _this.generateStatsForActivityOrLap(event, activity);
            activity.getLaps().map(function (lap) {
                _this.generateStatsForActivityOrLap(event, lap);
            });
        });
    };
    EventUtilities.getEventDataTypeGain = function (event, dataType, starDate, endDate, activities, minDiff) {
        return this.getEventDataTypeGainOrLoss(true, event, dataType, starDate, endDate, activities, minDiff);
    };
    EventUtilities.getEventDataTypeLoss = function (event, dataType, starDate, endDate, activities, minDiff) {
        return this.getEventDataTypeGainOrLoss(false, event, dataType, starDate, endDate, activities, minDiff);
    };
    EventUtilities.getEventDataTypeGainOrLoss = function (gain, event, dataType, starDate, endDate, activities, minDiff) {
        if (minDiff === void 0) { minDiff = 5; }
        var gainOrLoss = 0;
        var points = event.getPoints(starDate, endDate, activities);
        // Todo get by type
        points.reduce(function (previous, next) {
            var previousDataType = previous.getDataByType(dataType);
            var nextDataType = next.getDataByType(dataType);
            if (!previousDataType) {
                return next;
            }
            if (!nextDataType) {
                return previous;
            }
            // For gain
            if (gain) {
                // Increase the gain if eligible first check to be greater plus diff  [200, 300, 400, 100, 101, 102]
                if ((previousDataType.getValue() + minDiff) <= nextDataType.getValue()) {
                    gainOrLoss += nextDataType.getValue() - previousDataType.getValue();
                    return next;
                }
                // if not eligible check if smaller without the diff and if yes do not register it and send it back as the last to check against
                if (previousDataType.getValue() < nextDataType.getValue()) {
                    return previous;
                }
                return next;
            }
            // For Loss
            if ((previousDataType.getValue() - minDiff) >= nextDataType.getValue()) {
                gainOrLoss += previousDataType.getValue() - nextDataType.getValue();
                return next;
            }
            // if not eligible check if smaller without the diff and if yes do not register it and send it back as the last to check against
            if (previousDataType.getValue() > nextDataType.getValue()) {
                return previous;
            }
            return next;
        });
        return gainOrLoss;
    };
    EventUtilities.getDataTypeMinOrMax = function (max, event, dataType, startDate, endDate, activities) {
        var dataValuesArray = event.getPoints(startDate, endDate, activities).reduce(function (dataValues, point) {
            var pointData = point.getDataByType(dataType);
            if (pointData) {
                dataValues.push(pointData.getValue());
            }
            return dataValues;
        }, []);
        // This is needed due to calling the max stack size of args if using Math.max(...dataValuesArray);
        if (max) {
            return dataValuesArray.reduce(function (previousValue, currentValue) {
                return Math.max(previousValue, currentValue);
            }, -Infinity);
        }
        return dataValuesArray.reduce(function (previousValue, currentValue) {
            return Math.min(previousValue, currentValue);
        }, Infinity);
    };
    EventUtilities.generateStatsForActivityOrLap = function (event, subject) {
        // Add the number of points this activity has
        if (subject instanceof activity_1.Activity) {
            subject.addStat(new data_number_of_points_1.DataNumberOfPoints(subject.getPoints().length));
        }
        // If there is no duration define that from the start date and end date
        if (!subject.getStat(data_duration_1.DataDuration.className)) {
            subject.addStat(new data_duration_1.DataDuration((subject.endDate.getTime() - subject.startDate.getTime()) / 1000));
        }
        // If there is no pause define that from the start date and end date and duration
        if (!subject.getStat(data_pause_1.DataPause.className)) {
            subject.addStat(new data_pause_1.DataPause(((subject.endDate.getTime() - subject.startDate.getTime()) / 1000) - subject.getDuration().getValue()));
        }
        // If there is no distance
        if (!subject.getStat(data_distance_1.DataDistance.className)) {
            subject.addStat(new data_distance_1.DataDistance(this.getDistanceForEvent(event, subject.startDate, subject.endDate)));
        }
        // Ascent (altitude gain)
        if (!subject.getStat(data_ascent_1.DataAscent.className)
            && event.getPointsWithDataType(data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_ascent_1.DataAscent(this.getEventDataTypeGain(event, data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate)));
        }
        // Descent (altitude loss)
        if (!subject.getStat(data_descent_1.DataDescent.className)
            && event.getPointsWithDataType(data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_descent_1.DataDescent(this.getEventDataTypeLoss(event, data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate)));
        }
        // Altitude Max
        if (!subject.getStat(data_altitude_max_1.DataAltitudeMax.className)
            && event.getPointsWithDataType(data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_altitude_max_1.DataAltitudeMax(this.getDateTypeMax(event, data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate)));
        }
        // Altitude Min
        if (!subject.getStat(data_altitude_min_1.DataAltitudeMin.className)
            && event.getPointsWithDataType(data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_altitude_min_1.DataAltitudeMin(this.getDateTypeMin(event, data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate)));
        }
        // Altitude Avg
        if (!subject.getStat(data_altitude_avg_1.DataAltitudeAvg.className)
            && event.getPointsWithDataType(data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_altitude_avg_1.DataAltitudeAvg(this.getDataTypeAvg(event, data_altitude_1.DataAltitude.type, subject.startDate, subject.endDate)));
        }
        // Heart Rate  Max
        if (!subject.getStat(data_heart_rate_max_1.DataHeartRateMax.className)
            && event.getPointsWithDataType(data_heart_rate_1.DataHeartRate.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_heart_rate_max_1.DataHeartRateMax(this.getDateTypeMax(event, data_heart_rate_1.DataHeartRate.type, subject.startDate, subject.endDate)));
        }
        // Heart Rate Min
        if (!subject.getStat(data_heart_rate_min_1.DataHeartRateMin.className)
            && event.getPointsWithDataType(data_heart_rate_1.DataHeartRate.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_heart_rate_min_1.DataHeartRateMin(this.getDateTypeMin(event, data_heart_rate_1.DataHeartRate.type, subject.startDate, subject.endDate)));
        }
        // Heart Rate Avg
        if (!subject.getStat(data_heart_rate_avg_1.DataHeartRateAvg.className)
            && event.getPointsWithDataType(data_heart_rate_1.DataHeartRate.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_heart_rate_avg_1.DataHeartRateAvg(this.getDataTypeAvg(event, data_heart_rate_1.DataHeartRate.type, subject.startDate, subject.endDate)));
        }
        // Cadence Max
        if (!subject.getStat(data_cadence_max_1.DataCadenceMax.className)
            && event.getPointsWithDataType(data_cadence_1.DataCadence.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_cadence_max_1.DataCadenceMax(this.getDateTypeMax(event, data_cadence_1.DataCadence.type, subject.startDate, subject.endDate)));
        }
        // Cadence Min
        if (!subject.getStat(data_cadence_min_1.DataCadenceMin.className)
            && event.getPointsWithDataType(data_cadence_1.DataCadence.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_cadence_min_1.DataCadenceMin(this.getDateTypeMin(event, data_cadence_1.DataCadence.type, subject.startDate, subject.endDate)));
        }
        // Cadence Avg
        if (!subject.getStat(data_cadence_avg_1.DataCadenceAvg.className)
            && event.getPointsWithDataType(data_cadence_1.DataCadence.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_cadence_avg_1.DataCadenceAvg(this.getDataTypeAvg(event, data_cadence_1.DataCadence.type, subject.startDate, subject.endDate)));
        }
        // Speed Max
        if (!subject.getStat(data_speed_max_1.DataSpeedMax.className)
            && event.getPointsWithDataType(data_speed_1.DataSpeed.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_speed_max_1.DataSpeedMax(this.getDateTypeMax(event, data_speed_1.DataSpeed.type, subject.startDate, subject.endDate)));
        }
        // Speed Min
        if (!subject.getStat(data_speed_min_1.DataSpeedMin.className)
            && event.getPointsWithDataType(data_speed_1.DataSpeed.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_speed_min_1.DataSpeedMin(this.getDateTypeMin(event, data_speed_1.DataSpeed.type, subject.startDate, subject.endDate)));
        }
        // Speed Avg
        if (!subject.getStat(data_speed_avg_1.DataSpeedAvg.className)
            && event.getPointsWithDataType(data_speed_1.DataSpeed.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_speed_avg_1.DataSpeedAvg(this.getDataTypeAvg(event, data_speed_1.DataSpeed.type, subject.startDate, subject.endDate)));
        }
        // Pace Max
        if (!subject.getStat(data_pace_max_1.DataPaceMax.className)
            && event.getPointsWithDataType(data_pace_1.DataPace.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_pace_max_1.DataPaceMax(this.getDateTypeMin(event, data_pace_1.DataPace.type, subject.startDate, subject.endDate))); // Intentionally min
        }
        // Pace Min
        if (!subject.getStat(data_pace_min_1.DataPaceMin.className)
            && event.getPointsWithDataType(data_pace_1.DataPace.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_pace_min_1.DataPaceMin(this.getDateTypeMax(event, data_pace_1.DataPace.type, subject.startDate, subject.endDate))); // Intentionally max
        }
        // Pace Avg
        if (!subject.getStat(data_pace_avg_1.DataPaceAvg.className)
            && event.getPointsWithDataType(data_pace_1.DataPace.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_pace_avg_1.DataPaceAvg(this.getDataTypeAvg(event, data_pace_1.DataPace.type, subject.startDate, subject.endDate)));
        }
        // Vertical Speed Max
        if (!subject.getStat(data_vertical_speed_max_1.DataVerticalSpeedMax.className)
            && event.getPointsWithDataType(data_vertical_speed_1.DataVerticalSpeed.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_vertical_speed_max_1.DataVerticalSpeedMax(this.getDateTypeMax(event, data_vertical_speed_1.DataVerticalSpeed.type, subject.startDate, subject.endDate)));
        }
        // Vertical Speed Min
        if (!subject.getStat(data_vertical_speed_min_1.DataVerticalSpeedMin.className)
            && event.getPointsWithDataType(data_vertical_speed_1.DataVerticalSpeed.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_vertical_speed_min_1.DataVerticalSpeedMin(this.getDateTypeMin(event, data_vertical_speed_1.DataVerticalSpeed.type, subject.startDate, subject.endDate)));
        }
        // Vertical Speed Avg
        if (!subject.getStat(data_vertical_speed_avg_1.DataVerticalSpeedAvg.className)
            && event.getPointsWithDataType(data_vertical_speed_1.DataVerticalSpeed.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_vertical_speed_avg_1.DataVerticalSpeedAvg(this.getDataTypeAvg(event, data_vertical_speed_1.DataVerticalSpeed.type, subject.startDate, subject.endDate)));
        }
        // Power Max
        if (!subject.getStat(data_power_max_1.DataPowerMax.className)
            && event.getPointsWithDataType(data_power_1.DataPower.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_power_max_1.DataPowerMax(this.getDateTypeMax(event, data_power_1.DataPower.type, subject.startDate, subject.endDate)));
        }
        // Power Min
        if (!subject.getStat(data_power_min_1.DataPowerMin.className)
            && event.getPointsWithDataType(data_power_1.DataPower.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_power_min_1.DataPowerMin(this.getDateTypeMin(event, data_power_1.DataPower.type, subject.startDate, subject.endDate)));
        }
        if (!subject.getStat(data_power_avg_1.DataPowerAvg.className)
            && event.getPointsWithDataType(data_power_1.DataPower.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_power_avg_1.DataPowerAvg(this.getDataTypeAvg(event, data_power_1.DataPower.type, subject.startDate, subject.endDate)));
        }
        // Temperature Max
        if (!subject.getStat(data_temperature_max_1.DataTemperatureMax.className)
            && event.getPointsWithDataType(data_temperature_1.DataTemperature.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_temperature_max_1.DataTemperatureMax(this.getDateTypeMax(event, data_temperature_1.DataTemperature.type, subject.startDate, subject.endDate)));
        }
        // Temperature Min
        if (!subject.getStat(data_temperature_min_1.DataTemperatureMin.className)
            && event.getPointsWithDataType(data_temperature_1.DataTemperature.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_temperature_min_1.DataTemperatureMin(this.getDateTypeMin(event, data_temperature_1.DataTemperature.type, subject.startDate, subject.endDate)));
        }
        // Temperature Avg
        if (!subject.getStat(data_temperature_avg_1.DataTemperatureAvg.className)
            && event.getPointsWithDataType(data_temperature_1.DataTemperature.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_temperature_avg_1.DataTemperatureAvg(this.getDataTypeAvg(event, data_temperature_1.DataTemperature.type, subject.startDate, subject.endDate)));
        }
        // Battery Consumption Avg
        if (!subject.getStat(data_battery_consumption_1.DataBatteryConsumption.className)
            && event.getPointsWithDataType(data_battery_charge_1.DataBatteryCharge.type, subject.startDate, subject.endDate).length) {
            subject.addStat(new data_battery_consumption_1.DataBatteryConsumption(this.getDataTypeDifference(event, data_battery_charge_1.DataBatteryCharge.type, subject.startDate, subject.endDate)));
        }
        // Battery Life Estimation based on Consumption
        if (!subject.getStat(data_battery_life_estimation_1.DataBatteryLifeEstimation.className)) {
            var consumption = subject.getStat(data_battery_consumption_1.DataBatteryConsumption.className);
            if (consumption && consumption.getValue()) {
                subject.addStat(new data_battery_life_estimation_1.DataBatteryLifeEstimation(Number((+subject.endDate - +subject.startDate) / 1000 * 100) / Number(consumption.getValue())));
            }
        }
    };
    EventUtilities.getDistanceForEvent = function (event, startDate, endDate, activities) {
        return (new geolib_adapter_1.GeoLibAdapter()).getDistance(event.getPointsWithPosition(startDate, endDate, activities));
    };
    return EventUtilities;
}());
exports.EventUtilities = EventUtilities;
function isNumberOrString(property) {
    return (typeof property === 'number' || typeof property === 'string');
}
exports.isNumberOrString = isNumberOrString;
/**
 * Converts speed from m/s to pace as of seconds
 * @param {number} number
 * @return {number}
 */
function convertSpeedToPace(number) {
    return number === 0 ? number : (1000 / number);
}
exports.convertSpeedToPace = convertSpeedToPace;
