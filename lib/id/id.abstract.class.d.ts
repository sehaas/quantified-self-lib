import { IDClassInterface } from './id.class.interface';
export declare abstract class IDClass implements IDClassInterface {
    private id;
    getID(): string;
    setID(id: string): void;
}
