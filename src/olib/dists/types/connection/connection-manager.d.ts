import EventManager from "../events/event-manager";
export default class ConnectionManager {
    eventmanager: EventManager;
    private connection;
    private roomID;
    constructor(roomID: string, eventmanager: EventManager);
    createRoom(roomID: string): void;
}
