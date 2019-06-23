import { DataDistance } from '../data/data.distance';
import { DataInterface } from '../data/data.interface';
import { IDClassInterface } from '../id/id.class.interface';
export interface StatsClassInterface extends IDClassInterface {
    getDistance(): DataDistance;
    getStat(statType: string): DataInterface | void;
    getStats(): Map<string, DataInterface>;
    removeStat(statType: string): void;
    clearStats(): void;
    setDistance(distance: DataDistance): void;
    addStat(stat: DataInterface): void;
}
