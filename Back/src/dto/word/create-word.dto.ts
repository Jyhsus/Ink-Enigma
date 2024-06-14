import Joi from 'joi';


export class CreateWordDto {
    text: string;
}

export const createWordSchema = Joi.object({
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