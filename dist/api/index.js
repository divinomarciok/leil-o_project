"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../src/app")); // Importando o servidor Express que está no arquivo app.ts
exports.default = (req, res) => {
    (0, app_1.default)(req, res);
};
