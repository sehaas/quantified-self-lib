import { DataNumber } from './data.number';
export declare class DataCadence extends DataNumber {
    static className: string;
    static type: string;
    static unit: string;
    getDisplayValue(): number;
}
