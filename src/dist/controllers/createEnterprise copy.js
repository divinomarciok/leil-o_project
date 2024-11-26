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
exports.createEnterprise = void 0;
const db_datasource_1 = require("../config/db.datasource");
const enterprise_1 = require("../models/enterprise");
const user_1 = require("../models/user");
const createEnterprise = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { nomeEmp, cnpj, userId } = req.body;
    try {
        const enterpriseRepository = db_datasource_1.AppDataSource.getRepository(enterprise_1.Enterprise);
        const userRepository = db_datasource_1.AppDataSource.getRepository(user_1.User);
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return;
        }
        // Verifica se já existe uma empresa com o mesmo CNPJ
        const existingEnterprise = yield enterpriseRepository.findOne({ where: { cnpj } });
        if (existingEnterprise) {
            res.status(400).json({ message: 'CNPJ já cadastrado' });
            return;
        }
        // Cria a nova empresa
        const newEnterprise = enterpriseRepository.create({
            nomeEmp,
            cnpj,
            user,
        });
        yield enterpriseRepository.save(newEnterprise);
        res.status(201).json({
            message: 'Empresa cadastrada com sucesso!',
            enterprise: { id: newEnterprise.id, nomeEmp: newEnterprise.nomeEmp, cnpj: newEnterprise.cnpj },
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao cadastrar empresa' });
    }
});
exports.createEnterprise = createEnterprise;
