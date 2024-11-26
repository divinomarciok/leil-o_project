
import { DataSource } from 'typeorm';
import { User } from '../models/user';
import { Enterprise } from '../models/enterprise';
import dotenv from 'dotenv';
import { Product } from '../models/product';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',  
  host: process.env.DB_HOST || 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10), 
  username: process.env.DB_USERNAME || 'user',  
  password: process.env.DB_PASSWORD || 'password',  
  database: process.env.DB_DATABASE || 'meu_banco',  
  synchronize: false, 
  logging: true, 
  entities: [User,Enterprise, Product], 
  migrations: ["src/migrations/*.js"],  
  subscribers: [],  
});
