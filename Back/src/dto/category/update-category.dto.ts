import Joi from 'joi';


export class UpdateCategoryDto {
    id: number;
    name: string;
}

export const updateCategorySchema = Joi.object({
    id: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'Category id must be a number.',
            'number.integer': 'Category id must be an integer.',
            'number.positive': 'Category id must be a positive number.',
            'any.required': 'Category id is required.'
        }),
    name: Joi.string()
        .trim() 
        .min(3)
        .max(50)
        .required()
        .pattern(new RegExp('^[a-zA-Z ]*$')) 
        .messages({
            'string.empty': 'Category name cannot be empty.',
            'string.min': 'Category name must be at least {#limit} characters long.',
            'string.max': 'Category name cannot exceed {#limit} characters.',
            'string.pattern.base': 'Category name must only contain letters and spaces.',
            'any.required': 'Category name is required.'
        })
}).options({ abortEarly: false });