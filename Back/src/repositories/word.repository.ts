import { AppDataSource } from '../config/data-source.config';
import { CreateWordDto, UpdateWordDto } from '../dto/word';
import { Word } from '../entities';


export class WordRepository {
    private repository = AppDataSource.getRepository(Word);

    public getAllWords = async () => {
        return this.repository.find();
    }

    public findWordById = async (id: number) => {
        return this.repository.findOneBy({ id });
    }      

    public findWordByText = async (text: string) => {
        return this.repository.findOneBy({ text });
    }

    public saveWord = async (word: CreateWordDto) => {
        return this.repository.save(word);
    }

    public updateWord = async (word: UpdateWordDto) => {
        const { id, ...updateData } = word;

        await this.repository.update({ id }, updateData);
        
        return this.findWordById(id);
    }

    public deleteWord = async (id: number) => {
        return this.repository.delete(id);
    }
}