const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'PintuApp API with swagger',
            version: '1.0.0',
            description:
                'This is the API for PintuApp, a real-time drawing and guessing application. The API provides endpoints for handling categories, rooms, words, and word categories.'
                .concat('Each of these resources has endpoints for getting, creating, updating, and deleting. \n', 
                        '- Categories: Categories are groupings of words that are used to organize the game. For example, you might have a Animals category that contains words like dog, cat, elephant, etc. \n',
                        '- Rooms: Rooms are where players gather to play. Each room can have a limited number of players and a list of words or categories to use in that game. \n',
                        '- Words: Words are the items that players will try to draw and guess. Each word belongs to one or more categories. \n',
                        '- Word Categories: Word categories are groupings of words that are used to organize the game. For example, you might have a Animals category that contains words like dog, cat, elephant, etc. \n\n',
                        'Please consult the individual endpoints for more details on how to interact with each resource.'
                ),
            termsOfService: 'http://swagger.io/terms/',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'PintuApp',
            },
        },
        components: {
            schemas: {
                CategoryDTO: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The unique identifier of the category.',
                        },
                        name: {
                            type: 'string',
                            description: 'The name of the category.',
                        },
                    },
                    required: ['id', 'name'],
                },
                CreateCategoryDTO: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'The name of the new category.',
                        },
                    },
                    required: ['name'],
                },
                UpdateCategoryDTO: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The unique identifier of the category to update.',
                        },
                        name: {
                            type: 'string',
                            description: 'The new name of the category.',
                        },
                    },
                    required: ['id', 'name'],
                },
                RoomDTO: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The unique identifier of the room.',
                        },
                        name: {
                            type: 'string',
                            description: 'The name of the room.',
                        },
                        state: {
                            type: 'string',
                            description: 'The state of the room.',
                        },
                        idCategory: {
                            type: 'number',
                            description: 'The id of category of words to use in the game.',
                        },
                    },
                    required: ['id', 'name', 'state', 'idCategory'],
                },
                CreateRoomDTO: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'The name of the room.',
                        },
                        state: {
                            type: 'string',
                            description: 'The state of the room.',
                        },
                        idCategory: {
                            type: 'number',
                            description: 'The id of category of words to use in the game.',
                        },
                    },
                    required: ['name', 'state', 'idCategory'],
                },
                UpdateRoomDTO: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The unique identifier of the room.',
                        },
                        name: {
                            type: 'string',
                            description: 'The name of the room.',
                        },
                        state: {
                            type: 'string',
                            description: 'The state of the room.',
                        },
                        idCategory: {
                            type: 'number',
                            description: 'The id of category of words to use in the game.',
                        },
                    },
                    required: ['id', 'name', 'state', 'idCategory'],
                },
                WordDTO: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The unique identifier of the word.',
                        },
                        text: {
                            type: 'string',
                            description: 'The name of the word.',
                        },
                    },
                    required: ['id', 'text'],
                },
                CreateWordDTO: {
                    type: 'object',
                    properties: {
                        text: {
                            type: 'string',
                            description: 'The name of the word.',
                        },
                    },
                    required: ['text'],
                },
                UpdateWordDTO: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The unique identifier of the word.',
                        },
                        text: {
                            type: 'string',
                            description: 'The name of the word.',
                        },
                    },
                    required: ['id', 'text'],
                },
                WordCategoryDTO: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The unique identifier of the word category.',
                        },
                        idWord: {
                            type: 'number',
                            description: 'The id of the word.',
                        },
                        idCategory: {
                            type: 'number',
                            description: 'The id of the category.',
                        },
                    },
                    required: ['id', 'idWord', 'idCategory'],
                },
                CreateWordCategoryDTO: {
                    type: 'object',
                    properties: {
                        idWord: {
                            type: 'number',
                            description: 'The id of the word.',
                        },
                        idCategory: {
                            type: 'number',
                            description: 'The id of the category.',
                        },
                    },
                    required: ['idWord', 'idCategory'],
                },
                UpdateWordCategoryDTO: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number',
                            description: 'The unique identifier of the word category.',
                        },
                        idWord: {
                            type: 'number',
                            description: 'The id of the word.',
                        },
                        idCategory: {
                            type: 'number',
                            description: 'The id of the category.',
                        },
                    },
                    required: ['id', 'idWord', 'idCategory'],
                },
            },
        },
        tags: [
            {
                name: 'category',
                description: 'Endpoints for categories',
                externalDocs: {
                    description: 'Find out more',
                    url: 'http://localhost:3000/api/category',
                },
            },
            {
                name: 'room',
                description: 'Endpoints for rooms',
                externalDocs: {
                    description: 'Find out more',
                    url: 'http://localhost:3000/api/room',
                },
            },
            {
                name: 'word',
                description: 'Endpoints for words',
                externalDocs: {
                    description: 'Find out more',
                    url: 'http://localhost:3000/api/word',
                },
            },
            {
                name: 'wordCategory',
                description: 'Endpoints for wordCategories',
                externalDocs: {
                    description: 'Find out more',
                    url: 'http://localhost:3000/api/wordCategory',
                },
            },
        ],
        paths: {
            '/category/getAll': {
                get: {
                    tags: ['category'],
                    summary: 'Get all categories',
                    description: 'Endpoint to retrieve all available categories.',
                    responses: {
                        200: {
                            description: 'Successfully retrieved categories.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/CategoryDTO',
                                        },
                                    },
                                },
                            },
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/category/findById/{categoryId}': {
                get: {
                    tags: ['category'],
                    summary: 'Find category by id',
                    description: 'Endpoint to find a category by its id.',
                    parameters: [
                        {
                            name: 'categoryId',
                            in: 'path',
                            required: true,
                            description: 'Id of the category to retrieve.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Successful operation.',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/CategoryDTO',
                                    },
                                },
                            },
                        },
                        404: {
                            description: 'Category not found.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/category/create': {
                post: {
                    tags: ['category'],
                    summary: 'Create a new category',
                    description: 'Endpoint to create a new category.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CreateCategoryDTO',
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: 'Category created.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/category/update': {
                put: {
                    tags: ['category'],
                    summary: 'Update a category',
                    description: 'Endpoint to update an existing category.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/UpdateCategoryDTO',
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: 'Category updated.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/category/delete/{categoryId}': {
                delete: {
                    tags: ['category'],
                    summary: 'Delete a category',
                    description: 'Endpoint to delete an existing category.',
                    parameters: [
                        {
                            name: 'categoryId',
                            in: 'path',
                            required: true,
                            description: 'Id of the category to delete.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Category deleted.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/room/getAll': {
                get: {
                    tags: ['room'],
                    summary: 'Get all rooms',
                    description: 'Endpoint to retrieve all available rooms.',
                    responses: {
                        200: {
                            description: 'Successful operation.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/RoomDTO',
                                        },
                                    },
                                },
                            },
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/room/findById/{roomId}': {
                get: {
                    tags: ['room'],
                    summary: 'Find room by id',
                    description: 'Endpoint to find a room by its id.',
                    parameters: [
                        {
                            name: 'roomId',
                            in: 'path',
                            required: true,
                            description: 'Id of the room to retrieve.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Successful operation.',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/RoomDTO',
                                    },
                                },
                            },
                        },
                        404: {
                            description: 'Room not found.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/room/getWords/{categoryId}': {
                get: {
                    tags: ['room'],
                    summary: 'Find words by category id',
                    description: 'Endpoint to find a word by its category id.',
                    parameters: [
                        {
                            name: 'categoryId',
                            in: 'path',
                            required: true,
                            description: 'Id of the category to retrieve words.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Successful operation.',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/WordDTO',
                                    },
                                },
                            },
                        },
                        404: {
                            description: 'Category id not found.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/room/create': {
                post: {
                    tags: ['room'],
                    summary: 'Create a new room',
                    description: 'Endpoint to create a new room.',
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CreateRoomDTO',
                                },
                            },
                        },
                        required: true,
                        description: 'The room to create',
                    },
                    responses: {
                        201: {
                            description: 'Room created.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/room/update': {
                put: {
                    tags: ['room'],
                    summary: 'Update a room',
                    description: 'Endpoint to update an existing room.',
                    responses: {
                        200: {
                            description: 'Room updated.',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/UpdateRoomDTO',
                                    },
                                },
                            },
                        },
                    },
                    500: {
                        description: 'Internal server error.',
                    },
                },
            },
            '/room/delete/{roomId}': {
                delete: {
                    tags: ['room'],
                    summary: 'Delete a room',
                    description: 'Endpoint to delete an existing room.',
                    parameters: [
                        {
                            name: 'roomId',
                            in: 'path',
                            required: true,
                            description: 'Id of the room to delete.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Room deleted.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/word/getAll': {
                get: {
                    tags: ['word'],
                    summary: 'Get all words',
                    description: 'Endpoint to retrieve all available words.',
                    responses: {
                        200: {
                            description: 'Successfully retrieved words.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/WordDTO',
                                        },
                                    },
                                },
                            },
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/word/findById/{wordId}': {
                get: {
                    tags: ['word'],
                    summary: 'Find word by id',
                    description: 'Endpoint to find a word by its id.',
                    parameters: [
                        {
                            name: 'wordId',
                            in: 'path',
                            required: true,
                            description: 'Id of the word to retrieve.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Successful operation.',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/WordDTO',
                                    },
                                },
                            },
                        },
                        404: {
                            description: 'Word not found.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/word/create': {
                post: {
                    tags: ['word'],
                    summary: 'Create a new word',
                    description: 'Endpoint to create a new word.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CreateWordDTO',
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: 'Word created.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/word/update': {
                put: {
                    tags: ['word'],
                    summary: 'Update a word',
                    description: 'Endpoint to update an existing word.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/UpdateWordDTO',
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: 'Word updated.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/word/delete/{wordId}': { 
                delete: {
                    tags: ['word'],
                    summary: 'Delete a word',
                    description: 'Endpoint to delete an existing word.',
                    parameters: [
                        {
                            name: 'wordId',
                            in: 'path',
                            required: true,
                            description: 'Id of the word to delete.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Word deleted.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/wordCategory/getAll': {
                get: {
                    tags: ['wordCategory'],
                    summary: 'Get all word categories',
                    description: 'Endpoint to retrieve all available word categories.',
                    responses: {
                        200: {
                            description: 'Successfully retrieved word categories.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            $ref: '#/components/schemas/WordCategoryDTO',
                                        },
                                    },
                                },
                            },
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/wordCategory/findById/{wordCategoryId}': {
                get: {
                    tags: ['wordCategory'],
                    summary: 'Find word category by id',
                    description: 'Endpoint to find a word category by its id.',
                    parameters: [
                        {
                            name: 'wordCategoryId',
                            in: 'path',
                            required: true,
                            description: 'Id of the word category to retrieve.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Successful operation.',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/WordCategoryDTO',
                                    },
                                },
                            },
                        },
                        404: {
                            description: 'Word category not found.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/wordCategory/create': {
                post: {
                    tags: ['wordCategory'],
                    summary: 'Create a new word category',
                    description: 'Endpoint to create a new word category.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/CreateWordCategoryDTO',
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: 'Word category created.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/wordCategory/update': {
                put: {
                    tags: ['wordCategory'],
                    summary: 'Update a word category',
                    description: 'Endpoint to update an existing word category.',
                    requestBody: {
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/UpdateWordCategoryDTO',
                                },
                            },
                        },
                    },
                    responses: {
                        200: {
                            description: 'Word category updated.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                },
            },
            '/wordCategory/delete/{wordCategoryId}': {
                delete: {
                    tags: ['wordCategory'],
                    summary: 'Delete a word category',
                    description: 'Endpoint to delete an existing word category.',
                    parameters: [
                        {
                            name: 'wordCategoryId',
                            in: 'path',
                            required: true,
                            description: 'Id of the word category to delete.',
                            schema: {
                                type: 'integer',
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: 'Word category deleted.',
                        },
                        500: {
                            description: 'Internal server error.',
                        },
                    },
                }
            },
        },
        servers: [
            {
                url: 'http://localhost:3000/api'
            },
            {
                url: 'ws://localhost:3000/api'
            }
        ],
    },
    apis: ['./src/controllers/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
