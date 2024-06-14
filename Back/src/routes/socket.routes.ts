import { SocketController } from './../controllers/socket.controller';
import express from 'express-ws';
import { WebSocket } from 'ws';
import expressWs from 'express-ws';
import { DATA_IS_EMPTY, MESSAGE_NOT_VALID, UNKNOWN_MESSAGE_TYPE } from '../utilities/messages.utility';


const socketController = new SocketController();

export const setupSocketRoutes = (path: string, app: express.Application, expressWsInstance: expressWs) => {
    expressWsInstance.applyTo(app);
    
    app.ws(`${ path }/room/:id/:username/:avatar`, (ws, req) => {
        const idRoom = req.params.id;
        const userName = req.params.username;
        const userAvatar = req.params.avatar;
        const userPoints = 0;
        
        handleSocketConnection(idRoom, userName, userAvatar, userPoints, ws);
    });

    return app;
}

const handleSocketConnection = (idRoom: number, userName: string, userAvatar: string, userPoints: number, ws: WebSocket) => {
    socketController.joinRoom(idRoom, userName, userAvatar, userPoints, ws);

    ws.on('message', async (msg: string) => {
        handleIncomingMessage(idRoom, userName, msg, ws, userAvatar, userPoints);
    });

    ws.on('close', () => {
        socketController.leaveRoom(idRoom, ws, userName, userAvatar, userPoints);
    });

    ws.on('disconnect', () => {
        socketController.leaveRoom(idRoom, ws, userName, userAvatar, userPoints);
    });
}

const handleIncomingMessage = (idRoom: number, userName: string, msg: string, ws: WebSocket, userAvatar: string, userPoints: number) => {
    let jsonMessage: { type: string, data?: any, pointsToSum?: number };
    
    try {
        jsonMessage = JSON.parse(msg);
    } catch(error) {
        socketController.sendMessageToUser(idRoom, MESSAGE_NOT_VALID, ws);
        return;
    }

    switch (jsonMessage.type) {
        case "GET_ROOM_USERS":
            socketController.sendRoomUsers(idRoom, ws);
            break;
        case 'DRAW_HISTORY':
            socketController.drawHistory(idRoom, ws);
            break;
        case 'BOARD_ERASE':
            socketController.eraseBoard(idRoom);
            socketController.sendMessageToRoom(idRoom, JSON.stringify({type: 'BOARD_ERASE'}), ws);
            break;
        case 'DRAW_LINE':
            if (!jsonMessage.data) {
                socketController.sendMessageToUser(idRoom, DATA_IS_EMPTY, ws);
                return;
            }
            socketController.drawLine(idRoom, ws, jsonMessage.data);
            break;

        case 'SEND_MESSAGE':
            if (!jsonMessage.data) {
                socketController.sendMessageToUser(idRoom, DATA_IS_EMPTY, ws);
                return;
            }
            socketController.tryToGuessWord(idRoom, jsonMessage.data, ws, userName, userAvatar, userPoints, jsonMessage.pointsToSum || 0);
            break;
        case 'START_TURN':
            socketController.startTurnInRoom(idRoom, ws);
            break;
        case 'FINISH_TURN':
            socketController.sendMessageToRoom(idRoom, `${ userName } has finished their turn.`, ws);
            socketController.finishTurn(idRoom, ws, userName, true);
            break;
        case 'CLOSE_ROOM':
            socketController.sendMessageToRoom(idRoom, `The game has been finished.`, ws);
            socketController.closeRoom(idRoom);
            break;
        case 'LEAVE_ROOM':
            socketController.sendMessageToRoom(idRoom, `${ userName } has left.`, ws);
            socketController.leaveRoom(idRoom, ws, userName, userAvatar, userPoints);
            break;
        default:
            socketController.sendMessageToUser(idRoom, UNKNOWN_MESSAGE_TYPE, ws);
            return;
    }
}
