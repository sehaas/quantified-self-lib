"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var importer_gpx_1 = require("./events/adapters/importers/gpx/importer.gpx");
var importer_tcx_1 = require("./events/adapters/importers/tcx/importer.tcx");
var importer_fit_1 = require("./events/adapters/importers/fit/importer.fit");
var importer_suunto_json_1 = require("./events/adapters/importers/suunto/importer.suunto.json");
var importer_json_1 = require("./events/adapters/importers/json/importer.json");
var exporter_tcx_1 = require("./events/adapters/exporters/exporter.tcx");
var QuantifiedSelfLib = /** @class */ (function () {
    function QuantifiedSelfLib() {
    }
    /**
     * Parses and returns an event using GPX format
     * @param gpxString
     * @param domParser custom DomParse (case of NodeJs usage)
     */
    QuantifiedSelfLib.importFromGPX = function (gpxString, domParser) {
        return importer_gpx_1.EventImporterGPX.getFromString(gpxString, domParser);
    };
    ;
    /**
     * Parses and returns an event using TCX format
     * @param xmlDocument
     */
    QuantifiedSelfLib.importFromTCX = function (xmlDocument) {
        return importer_tcx_1.EventImporterTCX.getFromXML(xmlDocument);
    };
    ;
    /**
     * Parses and returns an event using FIT format
     * @param arrayBuffer
     */
    QuantifiedSelfLib.importFromFit = function (arrayBuffer) {
        return importer_fit_1.EventImporterFIT.getFromArrayBuffer(arrayBuffer);
    };
    ;
    /**
     * Parses and returns an event using Suunto format
     * @param jsonString
     */
    QuantifiedSelfLib.importFromSuunto = function (jsonString) {
        return importer_suunto_json_1.EventImporterSuuntoJSON.getFromJSONString(jsonString);
    };
    /**
     * Parses and returns an event using native format (QuantifiedSelfLib exported format)
     * @param jsonString
     */
    QuantifiedSelfLib.importFromJSON = function (jsonString) {
        return importer_json_1.EventImporterJSON.getFromJSONString(jsonString);
    };
    /**
     * Exports an event as a TCX string
     * @param event
     */
    QuantifiedSelfLib.exportToTCX = function (event) {
        return exporter_tcx_1.EventExporterTCX.getAsString(event);
    };
    return QuantifiedSelfLib;
}());
exports.QuantifiedSelfLib = QuantifiedSelfLib;
