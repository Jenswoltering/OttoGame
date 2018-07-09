import { Joystick, UserClient } from './models';
import { ISimpleEvent } from "strongly-typed-events";
export default class OttoLib {
    onJoystickMove: ISimpleEvent<Joystick>;
    newUserJoined: ISimpleEvent<UserClient>;
    private connectionManager;
    private eventManager;
    private key;
    constructor(appKey: string);
    start(roomID: string): void;
    private initEvent();
}
