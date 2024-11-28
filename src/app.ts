import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";
import { AppDataSource } from "./config/db.datasource";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.use("/", router);

// Inicialize a conexão com o banco de dados, sem app.listen

/*AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco de dados:", error);
  });
*/

// Em vez de iniciar com app.listen, exporte a aplicação
export default app;
