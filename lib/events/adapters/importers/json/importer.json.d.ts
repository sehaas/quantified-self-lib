import { EventInterface } from '../../../event.interface';
export declare class EventImporterJSON {
    static getFromJSONString(jsonString: string): Promise<EventInterface>;
    private static getGeoLocationInfo;
    private static getWeather;
}
