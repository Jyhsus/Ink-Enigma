import { Request, Response } from 'express';
import { WordService } from "../services/word.service";
import { BAD_REQUEST_STATUS, CONFLICT_STATUS, CREATED_STATUS, NOT_FOUND_STATUS, OK_STATUS } from '../utilities/status.utility';


export class WordController {
    private wordService: WordService;

    constructor() {
        this.wordService = new WordService();
    }

    public findWordById = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const word = await this.wordService.findWordById(+id);

            return res.status(OK_STATUS).json(word);
        } catch (error) {
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }

    public getAllWords = async (req: Request, res: Response) => {
        try {
            const words = await this.wordService.getAllWords();

            return res.status(OK_STATUS).json(words);
        } catch (error) {
            return res.status(BAD_REQUEST_STATUS).json({ error: error.message });
        }
    }

    public saveWord = async (req: Request, res: Response) => {
        const word = req.body;

        try {
            await this.wordService.saveWord(word);
            
            return res.status(CREATED_STATUS).json(word);
        } catch (error) {
            if (!error.message) return res.status(BAD_REQUEST_STATUS).json(error);
            return res.status(CONFLICT_STATUS).json({ error: error.message });
        }
    }

    public updateWord = async (req: Request, res: Response) => {
        const word = req.body;

        try {
            await this.wordService.updateWord(word);

            return res.status(OK_STATUS).json(word);
        } catch (error) {
            if (!error.message) return res.status(BAD_REQUEST_STATUS).json(error);
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }

    public deleteWord = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            await this.wordService.deleteWord(+id);

            return res.status(OK_STATUS).json({ message: `Word with id: ${ id } deleted successfully.` });
        } catch (error) {
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }
}