import Joi from 'joi';


export class CreateCategoryDto {
    name: string;
}

export const createCategorySchema = Joi.object({
    name: Joi.string()
        .trim() 
        .required()
        .min(3)
        .max(50)
        .pattern(new RegExp('^[a-zA-Z ]*$'))
        .messages({
            'string.empty': 'Category name cannot be empty.',
            'string.min': 'Category name must be at least {#limit} characters long.',
            'string.max': 'Category name cannot exceed {#limit} characters.',
            'string.pattern.base': 'Category name must only contain letters and spaces.',
            'any.required': 'Category name is required.'
        })
}).options({ abortEarly: false });