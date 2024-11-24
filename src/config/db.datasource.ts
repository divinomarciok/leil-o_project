// src/config/data-source.ts
import { DataSource } from 'typeorm';
import { user } from '../models/user';
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',  
  host: process.env.DB_HOST || 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10), 
  username: process.env.DB_USERNAME || 'user',  
  password: process.env.DB_PASSWORD || 'password',  
  database: process.env.DB_DATABASE || 'meu_banco',  
  synchronize: true, 
  logging: true, 
  entities: [user], 
  migrations: ["src/migrations/*.ts"],  
  subscribers: [],  
});
