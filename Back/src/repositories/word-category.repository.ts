import { AppDataSource } from '../config/data-source.config';
import { CreateWordCategoryDto, UpdateWordCategoryDto } from '../dto/word-category';
import { WordCategory } from '../entities';


export class WordCategoryRepository {
    private repository = AppDataSource.getRepository(WordCategory);   

    public getAllWordCategories = async () => {
        return this.repository.find();
    }
    
    public findWordCategoryById = async (id: number) => {
        return this.repository.findOneBy({ id });
    }

    public findCategoryByIdWord = async (idWord: number) => {
        return this.repository.find({ where: { idWord }});
    }

    public findWordByIdCategory = async (idCategory: number) => {
        return this.repository.find({ where: { idCategory }});
    }

    public saveWordCategory = async (wordCategory: CreateWordCategoryDto) => {
        return this.repository.save(wordCategory);
    }

    public updateWordCategory = async (wordCategory: UpdateWordCategoryDto) => {
        const { id, ...updateData } = wordCategory;

        await this.repository.update({ id }, updateData);
        
        return this.findWordCategoryById(id);
    }

    public deleteWordCategory = async (id: number) => {
        return this.repository.delete(id);
    }
}