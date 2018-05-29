import ConnectionManager from '../connection/connection-manager';
import EventManager from '../events/event-manager';
declare const Factory: {
    createConnectionManager(key: string, eventmgr: EventManager): ConnectionManager;
    createEventManager(): EventManager;
};
export default Factory;
