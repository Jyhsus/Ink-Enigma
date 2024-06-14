import express from 'express';
import expressWs from 'express-ws';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { errorHandler } from './../middlewares/error.middleware';
import * as swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger';
import { AppDataSource } from './data-source.config';
import { categoryRouter, roomRouter, setupSocketRoutes, wordCategoryRouter, wordRouter } from '../routes';


dotenv.config();

export class Server {
    private app: express.Application;
    private expressWsInstance: expressWs.Instance;
    private port: number;
    private path: string;

    constructor() {
        this.app = express();
        this.expressWsInstance = expressWs(this.app);
        this.port = parseInt(process.env.APP_PORT || '3000');
        this.path = '/api';
    
        this.initializeMiddleware();
        this.initializeRoutes();
        this.initializeDataSource();
    }

    private initializeMiddleware = (): void => {
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(errorHandler);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    private initializeRoutes = (): void => {      
        this.app.use(`${ this.path }/category`, categoryRouter);
        this.app.use(`${ this.path }/room`, roomRouter);
        this.app.use(`${ this.path }/wordCategory`, wordCategoryRouter);
        this.app.use(`${ this.path }/word`, wordRouter);
        setupSocketRoutes(this.path, this.app, this.expressWsInstance);
    }

    private initializeDataSource = async (): Promise<void> => {
        try {
            await AppDataSource.initialize();
            console.log('Data Source has been initialized!');
        } catch (error) {
            console.log(error);
        }
    }

    public startServer = (): void => {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${ this.port }`);
        });
    }
}
