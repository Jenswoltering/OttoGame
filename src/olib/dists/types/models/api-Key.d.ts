export declare class APIKey {
    private _key;
    private _room;
    constructor(key: string);
    isValid(): boolean;
    getRoomID(): string;
    private checkKey(key);
}
