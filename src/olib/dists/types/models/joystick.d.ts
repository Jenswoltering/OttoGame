export declare class Joystick {
    private id;
    private _polarX;
    private _polarY;
    private _direction;
    constructor(id: number);
    update(radius: number, distance: number): void;
}
