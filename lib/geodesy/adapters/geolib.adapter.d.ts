import { GeoLibAdapterInterface } from './adapter.interface';
import { PointInterface } from '../../points/point.interface';
import { DataPositionInterface } from '../../data/data.position.interface';
export declare class GeoLibAdapter implements GeoLibAdapterInterface {
    constructor();
    getDistance(points: PointInterface[]): number;
    getNearestPointToPosition(postition: DataPositionInterface, points: PointInterface[]): PointInterface | void;
}
