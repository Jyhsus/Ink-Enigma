import { SocketService } from './../services/socket.service';
import { WebSocket } from 'ws';


export class SocketController {
    private socketService: SocketService;

    constructor() {
        this.socketService = new SocketService();
    }

    public joinRoom = (idRoom: number, userName: string, userAvatar: string, userPoints: number, ws: WebSocket) => {
        try {
            this.socketService.joinRoom(idRoom, userName, userAvatar, userPoints,  ws);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public leaveRoom = (idRoom: number, ws: WebSocket, userName: string, userAvatar: string, userPoints: number) => {
        try {
            this.socketService.leaveRoom(idRoom, ws, userName, userAvatar, userPoints);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public startTurnInRoom = (idRoom: number, ws: WebSocket) => {
        try {
            this.socketService.startTurnInRoom(idRoom,  ws);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public sendMessageToUser = (idRoom: number, message: string, ws: WebSocket) => {
        try {
            this.socketService.sendMessageToUser(idRoom, message, ws);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public sendMessageToRoom = (idRoom: number, message: string, ws: WebSocket) => {
        try {
            this.socketService.sendMessageToRoom(idRoom, message, ws);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public tryToGuessWord = (idRoom: number, word: string, ws: WebSocket, userName: string, userAvatar: string, userPoints: number, pointsToSum: number) => {
        try {
            this.socketService.tryToGuessWord(idRoom, word, ws, userName, userAvatar, userPoints, pointsToSum);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public finishTurn = (idRoom: number, ws: WebSocket, userName: string, timeFinish: boolean) => {
        try {
            this.socketService.finishTurn(idRoom, ws, userName, timeFinish);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public closeRoom = (idRoom: number) => {
        this.socketService.closeRoom(idRoom);
    }

    public drawLine = (idRoom: number, ws: WebSocket, mouseMovement: any) => {
        try {
            this.socketService.drawLine(idRoom, ws, mouseMovement);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public drawHistory = (idRoom: number, ws: WebSocket) => {
        try {
            this.socketService.drawHistory(idRoom, ws);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }

    public eraseBoard = (idRoom: number) => {
        this.socketService.eraseBoard(idRoom);
    }

    public sendRoomUsers = (idRoom: number, ws: WebSocket) => {
        try {
            this.socketService.sendRoomUsers(idRoom, ws);
        } catch(error) {
            this.socketService.sendMessageToRoom(idRoom, `Error: ${ error.message }.`, ws);
        }
    }
}
