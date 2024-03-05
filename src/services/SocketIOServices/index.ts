import { SocketIoEmission } from '@constants/socketIoEmission';
import type { DisconnectReason, Socket } from 'socket.io';

class SocketIOServices {
    private static instance: SocketIOServices;
    private socketInstance!: Socket;
    constructor(socket: Socket) {
        this.initialize();
        this.socketInstance = socket;
    };
    public static getInstance(socket?: Socket): SocketIOServices {
        if (!SocketIOServices.instance) {
            SocketIOServices.instance = new SocketIOServices(socket!);
        }
        return SocketIOServices.instance;
    };

    private initialize() {
        this.listenOnDisconnected();
        this.listenOnMessage();
    };

    private listenOnMessage() {
        this.socketInstance.on(SocketIoEmission.MESSAGE, (io) => {
            console.log('[ ' + SocketIoEmission.MESSAGE + ' ]: ' + JSON.stringify(io, null, 4));
        });
    };

    private listenOnDisconnected() {
        this.socketInstance.on('disconnect', (io: DisconnectReason) => {
            console.log('[ ' + SocketIoEmission.DISCONNECT + ' ]: ' + this.socketInstance.id);
        });
    };

}; interface ISocketIOServices extends SocketIOServices { };

export type { ISocketIOServices };
export default SocketIOServices;
