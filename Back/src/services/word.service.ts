import { CreateWordDto, UpdateWordDto, createWordSchema, updateWordSchema } from '../dto/word';
import { Word } from '../entities';
import { mapJoiErrors } from '../middlewares/validation-error.middleware';
import { WordCategoryRepository } from '../repositories/word-category.repository';
import { WordRepository } from '../repositories/word.repository';
import { WORD_ALREADY_EXISTS, WORD_ALREADY_USED_IN_CATEGORY, WORD_NOT_FOUND } from '../utilities/messages.utility';


export class WordService {
    private wordRepository: WordRepository;
    private wordCategoryRepository: WordCategoryRepository;
    
    constructor() {
        this.wordRepository = new WordRepository();
        this.wordCategoryRepository = new WordCategoryRepository();
    }

    public getAllWords = async (): Promise<Word[]> => {
        return await this.wordRepository.getAllWords();
    }

    public findWordById = async (id: number): Promise<Word | undefined> => {
        const responseById = await this.wordRepository.findWordById(id);

        if (!responseById) throw new Error(WORD_NOT_FOUND);

        return responseById;
    }

    public saveWord = async (word: CreateWordDto): Promise<Word> => {
        const responseByName = await this.wordRepository.findWordByText(word.text);
        const data = createWordSchema.validate(word);

        if (data.error) throw mapJoiErrors(data.error.details);
        if (responseByName) throw new Error(WORD_ALREADY_EXISTS);

        return await this.wordRepository.saveWord(word);
    }

    public updateWord = async (word: UpdateWordDto): Promise<Word> => {
        const responseById = await this.wordRepository.findWordById(word.id);
        const data = updateWordSchema.validate(word);

        if (data.error) throw mapJoiErrors(data.error.details);
        if (!responseById) throw new Error(WORD_NOT_FOUND);

        return await this.wordRepository.updateWord(word);
    }

    public deleteWord = async (id: number): Promise<void> => {
        const responseById = await this.wordRepository.findWordById(id);
        const responseCategoryByIdWord = await this.wordCategoryRepository.findCategoryByIdWord(id);

        if (!responseById) throw new Error(WORD_NOT_FOUND);
        if (responseCategoryByIdWord.length > 0) throw new Error(WORD_ALREADY_USED_IN_CATEGORY);

        this.wordRepository.deleteWord(id);
    }
}