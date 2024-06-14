import express from 'express';
import { RoomController } from '../controllers/room.controller';


export const roomRouter = express.Router();
const roomController = new RoomController();

roomRouter.get('/getAll', roomController.getAllRooms);
roomRouter.get('/findById/:id', roomController.findRoomById);
roomRouter.get('/getWords/:id', roomController.getWordsByRoom);
roomRouter.post('/create', roomController.saveRoom);
roomRouter.put('/update', roomController.updateRoom);
roomRouter.delete('/delete/:id', roomController.deleteRoom);