import { AppDataSource } from '../config/data-source.config';
import { CreateCategoryDto, UpdateCategoryDto } from '../dto/category';
import { Category } from '../entities';


export class CategoryRepository {
    private repository = AppDataSource.getRepository(Category);

    public getAllCategories = async () => {
        return this.repository.find();
    }

    public findCategoryById = async (id: number) => {
        return this.repository.findOneBy({ id });
    }

    public findCategoryByName = async (name: string) => {
        return this.repository.findOneBy({ name });
    }

    public saveCategory = async (category: CreateCategoryDto) => {
        return this.repository.save(category);
    }

    public updateCategory = async (category: UpdateCategoryDto) => {
        const { id, ...updateData } = category;

        await this.repository.update({ id }, updateData);
        
        return this.findCategoryById(id);
    }

    public deleteCategory = async (id: number) => {
        return this.repository.delete(id);
    }
}