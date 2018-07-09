export declare class Joystick {
    _distance: number;
    _angle: number;
    constructor(angle: number, distance: number);
    update(radius: number, distance: number): void;
}
