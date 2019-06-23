import { SerializableClassInterface } from '../serializable/serializable.class.interface';
export interface DataInterface extends SerializableClassInterface {
    setValue(value: number | string): void;
    getValue(): number | string | boolean;
    getDisplayValue(): number | string;
    getType(): string;
    getUnit(): string;
    getDisplayUnit(): string;
    getClassName(): string;
    getUnitSystem(): UnitSystem;
}
export declare enum UnitSystem {
    Metric = 0,
    Imperial = 1
}
