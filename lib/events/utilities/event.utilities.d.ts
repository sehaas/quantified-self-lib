import { EventInterface } from '../event.interface';
import { ActivityInterface } from '../../activities/activity.interface';
export declare class EventUtilities {
    static getEventAsTCXBloB(event: EventInterface): Promise<Blob>;
    static getEventAsJSONBloB(event: EventInterface): Promise<Blob>;
    static getDataTypeAvg(event: EventInterface, dataType: string, startDate?: Date, endDate?: Date, activities?: ActivityInterface[]): number;
    static getDateTypeMax(event: EventInterface, dataType: string, startDate?: Date, endDate?: Date, activities?: ActivityInterface[]): number;
    static getDateTypeMin(event: EventInterface, dataType: string, startDate?: Date, endDate?: Date, activities?: ActivityInterface[]): number;
    static getDataTypeDifference(event: EventInterface, dataType: string, startDate?: Date, endDate?: Date, activities?: ActivityInterface[]): number;
    static mergeEvents(events: EventInterface[]): Promise<EventInterface>;
    static calculatePointDistance(activity: ActivityInterface): void;
    static cropDistance(startDistance: number, endDistance: number, activity: ActivityInterface): ActivityInterface;
    static cropTime(activity: ActivityInterface, startDate?: Date, endDate?: Date): ActivityInterface;
    static generateStats(event: EventInterface): void;
    static getEventDataTypeGain(event: EventInterface, dataType: string, starDate?: Date, endDate?: Date, activities?: ActivityInterface[], minDiff?: number): number;
    static getEventDataTypeLoss(event: EventInterface, dataType: string, starDate?: Date, endDate?: Date, activities?: ActivityInterface[], minDiff?: number): number;
    private static getEventDataTypeGainOrLoss;
    private static getDataTypeMinOrMax;
    private static generateStatsForActivityOrLap;
    static getDistanceForEvent(event: EventInterface, startDate?: Date, endDate?: Date, activities?: ActivityInterface[]): number;
}
export declare function isNumberOrString(property: any): boolean;
/**
 * Converts speed from m/s to pace as of seconds
 * @param {number} number
 * @return {number}
 */
export declare function convertSpeedToPace(number: number): number;
