"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const db_datasource_1 = require("../config/db.datasource");
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Chave secreta para gerar o token (armazene em uma variável de ambiente)
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';
const authenticateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, senha } = req.body;
    try {
        const userRepository = db_datasource_1.AppDataSource.getRepository(user_1.User);
        // Verifica se o usuário existe pelo login
        const user = yield userRepository.findOne({ where: { login } });
        console.log(user);
        if (!user) {
            res.status(401).json({ message: 'Usuário ou senha inválidos' });
            return;
        }
        // Compara a senha fornecida com o hash no banco de dados
        const isPasswordValid = yield bcrypt_1.default.compare(senha, user.senha);
        console.log(senha);
        console.log(user.senha);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
            res.status(401).json({ message: ' senha inválidos' });
            return;
        }
        // Gera o token JWT
        const token = jsonwebtoken_1.default.sign({ id: user.id, login: user.login }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Autenticado com sucesso', token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
});
exports.authenticateUser = authenticateUser;
