"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../models/user");
const enterprise_1 = require("../models/enterprise");
const dotenv_1 = __importDefault(require("dotenv"));
const product_1 = require("../models/product");
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'meu_banco',
    synchronize: false,
    logging: true,
    entities: [user_1.User, enterprise_1.Enterprise, product_1.Product],
    migrations: ["src/migrations/*.js"],
    subscribers: [],
});
