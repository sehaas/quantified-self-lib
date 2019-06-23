"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventExporterJSON = /** @class */ (function () {
    function EventExporterJSON() {
    }
    EventExporterJSON.getAsString = function (event) {
        return new Promise(function (resolve, reject) {
            resolve(JSON.stringify(event));
        });
    };
    EventExporterJSON.fileType = 'application/json';
    EventExporterJSON.fileExtension = 'json';
    return EventExporterJSON;
}());
exports.EventExporterJSON = EventExporterJSON;
