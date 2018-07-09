export declare class InteractionManager {
    private joystick;
    private buttonA;
    constructor();
    updateJoystickPosition(radius: number, distance: number): void;
    buttonPressed(buttonID: number): void;
}
