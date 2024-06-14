import express from 'express';
import { WordController } from './../controllers/word.controller';


export const wordRouter = express.Router();
const wordController = new WordController();

wordRouter.get('/getAll', wordController.getAllWords);
wordRouter.get('/findById/:id', wordController.findWordById);
wordRouter.post('/create', wordController.saveWord);
wordRouter.put('/update', wordController.updateWord);
wordRouter.delete('/delete/:id', wordController.deleteWord);