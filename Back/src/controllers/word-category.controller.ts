import { Request, Response } from 'express';
import { WordCategoryService } from '../services/word-category.service';
import { BAD_REQUEST_STATUS, CONFLICT_STATUS, CREATED_STATUS, NOT_FOUND_STATUS, OK_STATUS } from '../utilities/status.utility';


export class WordCategoryController {
    private wordCategoryService: WordCategoryService;

    constructor() {
        this.wordCategoryService = new WordCategoryService();
    }

    public findWordCategoryById = async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const wordCategory = await this.wordCategoryService.findWordCategoryById(+id);

            return res.status(OK_STATUS).json(wordCategory);
        } catch (error) {
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }

    public getAllWordCategories = async (req: Request, res: Response) => {
        try {
            const wordCategories = await this.wordCategoryService.getAllWordCategories();

            return res.status(OK_STATUS).json(wordCategories);
        } catch (error) {
            return res.status(BAD_REQUEST_STATUS).json({ error: error.message });
        }
    }

    public saveWordCategory = async (req: Request, res: Response) => {
        const wordCategory = req.body;

        try {
            await this.wordCategoryService.saveWordCategory(wordCategory);

            return res.status(CREATED_STATUS).json(wordCategory);
        } catch (error) {
            if (!error.message) return res.status(BAD_REQUEST_STATUS).json(error);
            return res.status(CONFLICT_STATUS).json({ error: error.message });
        }
    }

    public updateWordCategory = async (req: Request, res: Response) => {
        const wordCategory = req.body;

        try {
            await this.wordCategoryService.updateWordCategory(wordCategory);

            return res.status(OK_STATUS).json(wordCategory);
        } catch (error) {
            if (!error.message) return res.status(BAD_REQUEST_STATUS).json(error);
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }

    public deleteWordCategory = async (req, res) => {
        const { id } = req.params;

        try {
            await this.wordCategoryService.deleteWordCategory(id);

            return res.status(OK_STATUS).json({ message: `Word category with id: ${ id } deleted successfully.` });
        } catch (error) {
            return res.status(NOT_FOUND_STATUS).json({ error: error.message });
        }
    }
}