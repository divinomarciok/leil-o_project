"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'meu_banco',
    synchronize: false,
    logging: ["query", "error"],
    entities: [path_1.default.join(__dirname, "../models/*.js")], // Caminho absoluto para entidades compiladas
    migrations: [path_1.default.join(__dirname, "../migrations/*.js")], // Caminho absoluto para migrations compiladas
    subscribers: [],
});
