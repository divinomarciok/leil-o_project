"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// src/config/data-source.ts
const typeorm_1 = require("typeorm");
const user_1 = require("../models/user");
const dotenv_1 = __importDefault(require("dotenv"));
// Carregar as variáveis de ambiente do arquivo .env
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres', // Tipo do banco de dados
    host: process.env.DB_HOST || 'localhost', // Host do banco
    port: parseInt(process.env.DB_PORT || '5432', 10), // Porta do banco
    username: process.env.DB_USERNAME || 'user', // Usuário do banco
    password: process.env.DB_PASSWORD || 'password', // Senha do banco
    database: process.env.DB_DATABASE || 'meu_banco', // Nome do banco de dados
    synchronize: true, // Cuidado: Não use em produção
    logging: true, // Log de SQL (útil para debug)
    entities: [user_1.user], // Definição das entidades
    migrations: [], // Migrations, caso você tenha
    subscribers: [], // Caso você tenha subscribers
});
