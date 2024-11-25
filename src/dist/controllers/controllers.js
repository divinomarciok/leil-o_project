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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const db_datasource_1 = require("../config/db.datasource");
const user_1 = require("../models/user"); // Certifique-se de que o caminho está correto
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, login, senha } = req.body;
    try {
        const userRepository = db_datasource_1.AppDataSource.getRepository(user_1.User);
        const existingUser = yield userRepository.findOne({ where: { email } });
        // Correção aqui
        if (existingUser) {
            res.status(400).json({ message: 'Email já cadastrado' });
            return;
        }
        const newUser = userRepository.create({
            nome,
            email,
            login,
            senha,
        });
        yield userRepository.save(newUser);
        res.status(201).json({
            message: 'Usuário criado com sucesso!',
            user: { id: newUser.id, nome: newUser.nome, email: newUser.email },
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao criar usuário' });
    }
});
exports.createUser = createUser;
