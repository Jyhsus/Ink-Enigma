import express from 'express';
import { WordCategoryController } from './../controllers/word-category.controller';


export const wordCategoryRouter = express.Router();
const wordCategoryController = new WordCategoryController();

wordCategoryRouter.get('/getAll', wordCategoryController.getAllWordCategories);
wordCategoryRouter.get('/findById/:id', wordCategoryController.findWordCategoryById);
wordCategoryRouter.post('/create', wordCategoryController.saveWordCategory);
wordCategoryRouter.put('/update', wordCategoryController.updateWordCategory);
wordCategoryRouter.delete('/delete/:id', wordCategoryController.deleteWordCategory);