// index.js

import express from 'express';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obter o diretório atual no módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

// Middleware para lidar com JSON
app.use(express.json());

// Configura o JSON Server
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Usar middlewares do JSON Server
app.use(middlewares);

// Middleware para customização de headers
app.use((req, res, next) => {
    console.log('Request received');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Usar rotas do JSON Server
app.use('/api', router);

// Inicia o servidor
app.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});
