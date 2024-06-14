import Joi from 'joi';


export class UpdateRoomDto {
    id: number;
    name: string;
    state: string;
    idCategory: number;
}

export const updateRoomSchema = Joi.object({
    id: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'Room id must be a number.',
            'number.integer': 'Room id must be an integer.',
            'number.positive': 'Room id must be a positive number.',
            'any.required': 'Room id is required.'
        }),
    name: Joi.string()
        .trim() 
        .required()
        .min(3)
        .max(50)
        .pattern(new RegExp('^[a-zA-Z ]*$')) 
        .messages({
            'string.empty': 'Room name cannot be empty.',
            'string.min': 'Room name must be at least {#limit} characters long.',
            'string.max': 'Room name cannot exceed {#limit} characters.',
            'string.pattern.base': 'Room name must only contain letters and spaces.',
            'any.required': 'Room name is required.'
        }),
    state: Joi.string()
        .optional()
        .valid('Sin iniciar', 'En curso', 'Finalizado')
        .messages({
            'string.empty': 'Room state cannot be empty.',
            'any.only': 'Room state must be either "Sin iniciar", "En curso" or "Finalizado".',
            'any.required': 'Room state is required.'
        }),
    idCategory: Joi.number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'Category id must be a number.',
            'number.integer': 'Category id must be an integer.',
            'number.positive': 'Category id must be a positive number.',
            'any.required': 'Category id is required.'
        }),
}).options({ abortEarly: false });
