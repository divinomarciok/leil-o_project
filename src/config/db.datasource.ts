
import { DataSource } from 'typeorm';
import { User } from '../models/user';
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
  logging: true, 
  entities: [User], 
  migrations: ["src/migrations/*.js"],  
  subscribers: [],  
});
