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

app.use("/",router);

console.log("Aplicação funcionando....");

AppDataSource.initialize()
.then(() =>{
  console.log("Banco de dados conectado");
  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);

});

})
.catch((error) => {
    console.error('Erro ao conectar no banco de dados:', error);
})



