import { NextFunction, Request, Response } from 'express';
import { INTERNAL_SERVER_ERROR_STATUS } from '../utilities/status.utility';
import { INTERNAL_SERVER_ERROR } from '../utilities/messages.utility';


export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`Error: ${ error.message }`);
    
    return res.status(INTERNAL_SERVER_ERROR_STATUS).json({ message: INTERNAL_SERVER_ERROR });
};