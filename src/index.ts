import 'prestart';
import { server, socketIO } from 'src/server';
import DependencyInjection from '@services/DependencyInjection';
import SocketIOServices from '@services/SocketIOServices';
import { APPLICATION_CONFIG } from '@configs/index';
import { SocketIoEmission } from '@constants/socketIoEmission';

server.listen(APPLICATION_CONFIG.PORT, DependencyInjection.getInstance);
socketIO.on(SocketIoEmission.CONNECTION, SocketIOServices.getInstance);