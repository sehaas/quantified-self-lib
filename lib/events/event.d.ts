import { EventInterface } from './event.interface';
import { ActivityInterface } from '../activities/activity.interface';
import { PointInterface } from '../points/point.interface';
import { DurationClassAbstract } from '../duration/duration.class.abstract';
export declare class Event extends DurationClassAbstract implements EventInterface {
    name: string;
    private activities;
    constructor(name: string, startDate: Date, endDate: Date);
    addActivity(activity: ActivityInterface): void;
    removeActivity(activityToRemove: ActivityInterface): void;
    getActivities(): ActivityInterface[];
    getFirstActivity(): ActivityInterface;
    getLastActivity(): ActivityInterface;
    getPoints(startDate?: Date, endDate?: Date, activities?: ActivityInterface[]): PointInterface[];
    getPointsWithPosition(startDate?: Date, endDate?: Date, activities?: ActivityInterface[]): PointInterface[];
    getPointsWithDataType(dataType: string, startDate?: Date, endDate?: Date, activities?: ActivityInterface[]): PointInterface[];
    toJSON(): any;
}
