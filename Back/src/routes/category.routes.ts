import express from 'express';
import { CategoryController } from '../controllers/category.controller';


export const categoryRouter = express.Router();
const categoryController = new CategoryController();

categoryRouter.get('/getAll', categoryController.getAllCategories);
categoryRouter.get('/findById/:id', categoryController.findCategoryById);
categoryRouter.post('/create', categoryController.saveCategory);
categoryRouter.put('/update', categoryController.updateCategory);
categoryRouter.delete('/delete/:id', categoryController.deleteCategory);