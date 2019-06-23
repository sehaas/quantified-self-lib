import { EventInterface } from '../../../event.interface';
export declare class EventImporterTCX {
    static getFromXML(xml: Document, name?: string): Promise<EventInterface>;
    private static getPoints;
    private static getCreator;
    private static getLaps;
}
