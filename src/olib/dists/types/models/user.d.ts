/// <reference types="socket.io-client" />
export declare class User {
    private id;
    private socket;
    private interactionManager;
    constructor(socket: SocketIOClient.Socket);
}
