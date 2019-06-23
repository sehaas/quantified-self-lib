import { EventInterface } from '../../../event.interface';
export declare class EventImporterSuuntoJSON {
    static getFromJSONString(jsonString: string): Promise<EventInterface>;
    private static hasFusedLocData;
    private static setIntensityZones;
    private static setIBIData;
    private static getPointFromSample;
    private static getZones;
    private static getStats;
}
