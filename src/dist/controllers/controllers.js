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
exports.createUser = createUser;
const typeorm_1 = require("typeorm");
const user_1 = require("../models/user");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nome, email, senha } = req.body;
        try {
            // Cria um novo usuário com os dados validados
            const userRepository = (0, typeorm_1.getRepository)(user_1.user);
            const newUser = userRepository.create({ nome, email, senha });
            // Salva o usuário no banco de dados
            const savedUser = yield userRepository.save(newUser);
            return res.status(201).json(savedUser);
        }
        catch (error) {
            return res.status(500).json({ message: 'Erro ao criar usuário.', error });
        }
    });
}
