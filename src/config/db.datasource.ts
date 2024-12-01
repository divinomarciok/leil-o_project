
import { DataSource } from 'typeorm';
import { User } from '../models/user';
import { Enterprise } from '../models/enterprise';
import { Product } from '../models/product';
import {EnterpriseProduct} from '../models/enterprise_products'

import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  
  type: 'postgres',  
  host: process.env.DB_HOST || 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10), 
  username: process.env.DB_USERNAME || 'user',  
  password: process.env.DB_PASSWORD || 'password',  
  database: process.env.DB_DATABASE || 'meu_banco',  
  synchronize: false, 
  logging: ["query", "error"],
  entities: ["./src/dist/models/*.js"], // Certifique-se de compilar as entidades
  migrations: ["./src/dist/migrations/*.js"], // Use arquivos .js compilados
  subscribers: [],  
});

