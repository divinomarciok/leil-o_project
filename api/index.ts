import { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../src/app'; // Importando o servidor Express que está no arquivo app.ts

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
