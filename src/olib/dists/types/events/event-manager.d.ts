import { ISimpleEvent } from "strongly-typed-events";
import { Joystick, UserClient } from "../models";
export default class EventManager {
    private _onJoystickMove;
    private _onMoveUp;
    private _onMoveRigth;
    private _onMoveDown;
    private _onMoveLeft;
    private _onNewClient;
    constructor();
    onMoveUp(): ISimpleEvent<Joystick>;
    readonly onJoystickMove: ISimpleEvent<Joystick>;
    readonly onNewClient: ISimpleEvent<UserClient>;
    readonly onMoveRight: ISimpleEvent<Joystick>;
    readonly onMoveLeft: ISimpleEvent<Joystick>;
    readonly onMoveDown: ISimpleEvent<Joystick>;
    dispatchJoystickMove(joystick: Joystick): void;
    dispatchJoystickUp(joystick: Joystick): void;
    dispatchJoystickRight(joystick: Joystick): void;
    dispatchJoystickDown(joystick: Joystick): void;
    dispatchJoystickLeft(joystick: Joystick): void;
    dispatchNewClient(userClient: UserClient): void;
}
