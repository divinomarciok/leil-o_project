import { Request, Response, NextFunction } from 'express';

export function validateUser(req: Request, res: Response, next: NextFunction) {
    const { nome, email, senha } = req.body;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios: nome, email e senha.' });
    }

    // Verifica se o email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Formato de email inválido.' });
    }

    // Verifica se a senha tem no mínimo 6 caracteres
    if (senha.length < 6) {
        return res.status(400).json({ message: 'A senha deve ter no mínimo 6 caracteres.' });
    }

    // Se tudo estiver válido, passa para o próximo middleware ou controlador
    next();
}
