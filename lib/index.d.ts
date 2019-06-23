import { EventInterface } from './events/event.interface';
export declare class QuantifiedSelfLib {
    /**
     * Parses and returns an event using GPX format
     * @param gpxString
     * @param domParser custom DomParse (case of NodeJs usage)
     */
    static importFromGPX(gpxString: string, domParser?: Function): Promise<EventInterface>;
    /**
     * Parses and returns an event using TCX format
     * @param xmlDocument
     */
    static importFromTCX(xmlDocument: XMLDocument): Promise<EventInterface>;
    /**
     * Parses and returns an event using FIT format
     * @param arrayBuffer
     */
    static importFromFit(arrayBuffer: ArrayBuffer): Promise<EventInterface>;
    /**
     * Parses and returns an event using Suunto format
     * @param jsonString
     */
    static importFromSuunto(jsonString: string): Promise<EventInterface>;
    /**
     * Parses and returns an event using native format (QuantifiedSelfLib exported format)
     * @param jsonString
     */
    static importFromJSON(jsonString: string): Promise<EventInterface>;
    /**
     * Exports an event as a TCX string
     * @param event
     */
    static exportToTCX(event: EventInterface): Promise<string>;
}
