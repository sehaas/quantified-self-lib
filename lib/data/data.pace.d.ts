import { DataDuration } from './data.duration';
export declare class DataPace extends DataDuration {
    static className: string;
    static type: string;
    static unit: string;
    getDisplayValue(): string;
    getDisplayUnit(): string;
}
