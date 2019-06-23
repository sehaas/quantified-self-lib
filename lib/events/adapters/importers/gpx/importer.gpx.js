"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var activity_1 = require("../../../../activities/activity");
var creator_1 = require("../../../../creators/creator");
var data_temperature_1 = require("../../../../data/data.temperature");
var point_1 = require("../../../../points/point");
var data_latitude_degrees_1 = require("../../../../data/data.latitude-degrees");
var data_longitude_degrees_1 = require("../../../../data/data.longitude-degrees");
var data_altitude_1 = require("../../../../data/data.altitude");
var data_cadence_1 = require("../../../../data/data.cadence");
var data_sea_level_pressure_1 = require("../../../../data/data.sea-level-pressure");
var data_speed_1 = require("../../../../data/data.speed");
var data_vertical_speed_1 = require("../../../../data/data.vertical-speed");
var data_power_1 = require("../../../../data/data.power");
var data_heart_rate_1 = require("../../../../data/data.heart-rate");
var event_1 = require("../../../event");
var activity_types_1 = require("../../../../activities/activity.types");
var lap_1 = require("../../../../laps/lap");
var lap_types_1 = require("../../../../laps/lap.types");
var data_distance_1 = require("../../../../data/data.distance");
var data_duration_1 = require("../../../../data/data.duration");
var data_pause_1 = require("../../../../data/data.pause");
var event_utilities_1 = require("../../../utilities/event.utilities");
var data_pace_1 = require("../../../../data/data.pace");
var geolib_adapter_1 = require("../../../../geodesy/adapters/geolib.adapter");
var GXParser = require('gxparser').GXParser;
var EventImporterGPX = /** @class */ (function () {
    function EventImporterGPX() {
    }
    EventImporterGPX.getFromString = function (gpx, domParser, name) {
        var _this = this;
        if (name === void 0) { name = 'New Event'; }
        return new Promise(function (resolve, reject) {
            var parsedGPX = GXParser(gpx, domParser);
            // Create a creator
            var creator = new creator_1.Creator(parsedGPX.creator);
            creator.swInfo = parsedGPX.version;
            // Get the points
            var points = _this.getPointsFromGPX(parsedGPX);
            // Get the laps
            var laps = _this.getLaps(parsedGPX);
            // Find the activity type
            var activityType = activity_types_1.ActivityTypes.unknown;
            if (parsedGPX.trk[0].type) {
                activityType = activity_types_1.ActivityTypes[parsedGPX.trk[0].type[0]] || activity_types_1.ActivityTypes.unknown;
                ;
            }
            // Create an activity
            var activity = new activity_1.Activity(points[0].getDate(), points[points.length - 1].getDate(), activityType, creator);
            // Add the points to the activity
            points.forEach(function (point) { return activity.addPoint(point); });
            // Add the laps to the activity
            laps.forEach(function (lap) { return activity.addLap(lap); });
            // Create an event
            var event = new event_1.Event(name, activity.startDate, activity.endDate);
            // Add the activity to the event
            event.addActivity(activity);
            activity.sortPointsByDate();
            // Find and write the distance of the points
            var geoLib = new geolib_adapter_1.GeoLibAdapter();
            var distance = 0;
            event.getPointsWithPosition().reduce(function (prev, current, index) {
                if (index === 0) {
                    prev.addData(new data_distance_1.DataDistance(distance));
                }
                distance += geoLib.getDistance([prev, current]);
                current.addData(new data_distance_1.DataDistance(distance));
                return current;
            });
            // Generate missing stats
            event_utilities_1.EventUtilities.generateStats(event);
            // @todo move this elsewhere and refactor
            event.setDuration(new data_duration_1.DataDuration(activity.getDuration().getValue()));
            event.setPause(new data_pause_1.DataPause(activity.getPause().getValue()));
            event.setDistance(new data_distance_1.DataDistance(activity.getDistance().getValue()));
            resolve(event);
        });
    };
    EventImporterGPX.getPointsFromGPX = function (parsedGPX) {
        var _this = this;
        return parsedGPX.trk.reduce(function (pointsArray, track) {
            track.trkseg.forEach(function (trackSegment) {
                trackSegment.trkpt.forEach(function (trackPoint) {
                    // If we have no time available it's not supported
                    if (!trackPoint.time) {
                        throw new Error('GPX track point does not contain a time field');
                    }
                    // Create a point
                    var point = new point_1.Point(new Date(trackPoint.time[0]));
                    // Add lat long
                    point.addData(new data_latitude_degrees_1.DataLatitudeDegrees(Number(trackPoint.lat)));
                    point.addData(new data_longitude_degrees_1.DataLongitudeDegrees(Number(trackPoint.lon)));
                    // Check if elevation is available and add it
                    if (trackPoint.ele) {
                        point.addData(new data_altitude_1.DataAltitude(Number(trackPoint.ele[0])));
                    }
                    // Go over the extensions
                    if (trackPoint.extensions && trackPoint.extensions[0]) {
                        _this.addExtensionDataToPoint(point, trackPoint.extensions[0]);
                    }
                    pointsArray.push(point);
                });
            });
            return pointsArray;
        }, []);
    };
    EventImporterGPX.addExtensionDataToPoint = function (point, extensionData) {
        // First check the keys for known
        for (var _i = 0, _a = Object.keys(extensionData); _i < _a.length; _i++) {
            var key = _a[_i];
            // Special case. If the key is again an extension recall this
            if (key === 'TrackPointExtension') {
                this.addExtensionDataToPoint(point, extensionData[key][0]);
            }
            if (key === 'altitude') {
                point.addData(new data_altitude_1.DataAltitude(Number(extensionData[key][0])));
            }
            if (key === 'heartrate' || key === 'hr') {
                point.addData(new data_heart_rate_1.DataHeartRate(Number(extensionData[key][0])));
            }
            if (key === 'cadence' || key === 'cad') {
                point.addData(new data_cadence_1.DataCadence(Number(extensionData[key][0])));
            }
            if (key === 'seaLevelPressure') {
                point.addData(new data_sea_level_pressure_1.DataSeaLevelPressure(Number(extensionData[key][0])));
            }
            if (key === 'speed') {
                point.addData(new data_speed_1.DataSpeed(Number(extensionData[key][0])));
                point.addData(new data_pace_1.DataPace(event_utilities_1.convertSpeedToPace(Number(extensionData[key][0]))));
            }
            if (key === 'verticalSpeed') {
                point.addData(new data_vertical_speed_1.DataVerticalSpeed(Number(extensionData[key][0])));
            }
            if (key === 'power') {
                point.addData(new data_power_1.DataPower(Number(extensionData[key][0])));
            }
            if (key === 'temp' || key === 'atemp') {
                point.addData(new data_temperature_1.DataTemperature(Number(extensionData[key][0])));
            }
        }
    };
    EventImporterGPX.getLaps = function (parsedGPX) {
        if (!parsedGPX.extensions) {
            return [];
        }
        return parsedGPX.extensions.reduce(function (lapsArray, extension) {
            extension.lap.forEach(function (lapExtension) {
                // Skip 0 duration laps
                // @todo validate
                if (Number(lapExtension.elapsedTime) === 0) {
                    return;
                }
                var lap = new lap_1.Lap(new Date(lapExtension.startTime), new Date((new Date(lapExtension.startTime)).getTime() + (Number(lapExtension.elapsedTime) * 1000)), lap_types_1.LapTypes.Manual);
                lapsArray.push(lap);
            });
            return lapsArray;
        }, []);
    };
    return EventImporterGPX;
}());
exports.EventImporterGPX = EventImporterGPX;
