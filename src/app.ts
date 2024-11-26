import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";
import { AppDataSource } from "./config/db.datasource";

dotenv.config();


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.use("/",router);

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



