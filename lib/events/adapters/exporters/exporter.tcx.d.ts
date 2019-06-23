import { EventInterface } from '../../event.interface';
export declare class EventExporterTCX {
    static fileType: string;
    static fileExtension: string;
    static getAsString(event: EventInterface): Promise<string>;
}
