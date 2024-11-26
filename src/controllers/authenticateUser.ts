import { Request, Response } from 'express';
import { AppDataSource } from "../config/db.datasource";
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Chave secreta para gerar o token (armazene em uma variável de ambiente)
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta';

export const authenticateUser = async (req: Request, res: Response): Promise<void> => {
    const { login, senha } = req.body;

    try {
        const userRepository = AppDataSource.getRepository(User);

        // Verifica se o usuário existe pelo login
        const user = await userRepository.findOne({ where: { login } });
        console.log(user);

        if (!user) {
            res.status(401).json({ message: 'Usuário ou senha inválidos' });
            return;
        }

        // Compara a senha fornecida com o hash no banco de dados
        const isPasswordValid = await bcrypt.compare(senha, user.senha);

        console.log(senha)
        console.log(user.senha);
        console.log(isPasswordValid)

        if (!isPasswordValid) {
            res.status(401).json({ message: ' senha inválidos' });
            return;
        }

        // Gera o token JWT
        const token = jwt.sign({ id: user.id, login: user.login }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Autenticado com sucesso', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno no servidor' });
    }
};
