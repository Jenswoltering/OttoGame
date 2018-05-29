import { Joystick } from './models';
import { ISimpleEvent } from "strongly-typed-events";
export default class OttoLib {
    onJoystickMove: ISimpleEvent<Joystick>;
    private connectionManager;
    private eventManager;
    private key;
    constructor(appKey: string);
    start(roomID: string): void;
    private initEvent();
}
