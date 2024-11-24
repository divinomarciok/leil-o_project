import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { user } from '../models/user';

export async function createUser(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    try {
        // Cria um novo usuário com os dados validados
        const userRepository = getRepository(user);
        const newUser = userRepository.create({ nome, email, senha });

        // Salva o usuário no banco de dados
        const savedUser = await userRepository.save(newUser);

        return res.status(201).json(savedUser);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar usuário.', error });
    }
}
