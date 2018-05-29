import ConnectionManager from './connection-manager';
export default class Connection {
    private _socket;
    private _connectionManger;
    private roomId;
    constructor(connectionManger: ConnectionManager);
    createRoom(roomId: string): void;
    private listen(socket);
}
