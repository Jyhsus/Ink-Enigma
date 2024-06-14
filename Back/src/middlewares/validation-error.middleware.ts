import { ValidationErrorItem } from 'joi';


interface ValidationErrors {
    [key: string]: string;
}

export const mapJoiErrors = (errors: ValidationErrorItem[]): ValidationErrors => {
    const mappedErrors: ValidationErrors = {};

    errors.forEach((error) => {
        const path = error.path.join('.'); 
        const message = error.message;
        
        mappedErrors[path] = message;
    });

    return mappedErrors;
}