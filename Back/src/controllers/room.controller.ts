import { Request, Response } from 'express';
import { RoomService } from "../services/room.service";
import { BAD_REQUEST_STATUS, CONFLICT_STATUS, CREATED_STATUS, NOT_FOUND_STATUS, OK_STATUS } from '../utilities/status.utility';


export class RoomController {
    private roomService: RoomService;

    constructor(){
        this.roomService = new RoomService();
    }

    public findRoomById = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const room = await this.roomService.findRoomById(+id);

            return res.status(OK_STATUS).json(room);
        } catch (error) {
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }

    public getAllRooms = async (req: Request, res: Response) => {
        const state = <string> req.query.state;
        const idCategory = Number(req.query.idCategory);

        try {
            const rooms = await this.roomService.getAllRooms(state, idCategory);

            return res.status(OK_STATUS).json(rooms);
        } catch (error) {
            return res.status(BAD_REQUEST_STATUS).json({ error: error.message });
        }
    }

    public getWordsByRoom = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const words = await this.roomService.getWordsByRoom(+id);

            return res.status(OK_STATUS).json(words);
        } catch (error) {
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }

    public saveRoom = async (req: Request, res: Response) => {
        const room = req.body;

        try {
            await this.roomService.saveRoom(room);

            return res.status(CREATED_STATUS).json(room);
        } catch (error) {
            if (!error.message) return res.status(BAD_REQUEST_STATUS).json(error);
            return res.status(CONFLICT_STATUS).json({ error: error.message });
        }
    }

    public updateRoom = async (req: Request, res: Response) => {
        const room = req.body;

        try {
            await this.roomService.updateRoom(room);

            return res.status(OK_STATUS).json(room);
        } catch (error) {
            if (!error.message) return res.status(BAD_REQUEST_STATUS).json(error);
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }

    public deleteRoom = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            await this.roomService.deleteRoom(+id);

            return res.status(OK_STATUS).json({ message: `Room with id: ${ id } deleted successfully.` });
        } catch (error) {
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }
}