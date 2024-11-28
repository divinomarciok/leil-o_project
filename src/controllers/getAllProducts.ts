import { Request, Response } from 'express';
import { AppDataSource } from "../config/db.datasource";
import { Product } from '../models/product';

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const productRepository = AppDataSource.getRepository(Product);
        const products = await productRepository.find();

        const formattedProducts = products.map(product => ({
            id:product.id,
            nome: product.nomeProd,
            tamanho: product.tamanhoProd,
            marca: 'Marca Genérica', // Placeholder, pois a marca não está no modelo
            categoria: product.categoriaProd,
        }));

        res.status(201).json(formattedProducts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
};

export { getAllProducts };


