import { DataBare } from './data.bare';
export declare abstract class DataString extends DataBare {
    static className: string;
    static unit: string;
    protected value: string;
    constructor(value: string);
    getValue(): string;
}
