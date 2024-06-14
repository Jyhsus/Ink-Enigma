import Joi from 'joi';


export class UpdateWordDto {
    id: number;
    text: string;
}

export const updateWordSchema = Joi.object({
    id: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'Word id must be a number.',
            'number.integer': 'Word id must be an integer.',
            'number.positive': 'Word id must be a positive number.',
            'any.required': 'Word id is required.'
        }),
    text: Joi.string()
        .trim() 
        .required()
        .min(3)
        .max(50)
        .pattern(new RegExp('^[a-zA-Z ]*$')) 
        .messages({
            'string.empty': 'Word text cannot be empty.',
            'string.min': 'Word text must be at least {#limit} characters long.',
            'string.max': 'Word text cannot exceed {#limit} characters.',
            'string.pattern.base': 'Word text must only contain letters and spaces.',
            'any.required': 'Word text is required.'
        }),         
}).options({ abortEarly: false });