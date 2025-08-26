const express = require("express");
const path = require("path");
const app = express();

// configuração do EJS como view


// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("routes/index");
app.use("/", indexRouter);


// Rotas de categoria
const categoriaRouter = require("/routes/categorias");
app.use("/categorias", categoriaRouter);

// rotas de alunos
const alunosRouter = require("/routes/alunos");
app.use("/alunos", alunosRouter);


// rotas do curso
const cursoRouter = require("/routes/curso");
app.use("/curso", cursoRouter);

// Rotas de equipe
const equipeRouter = require("/routes/equipe");
app.use("/equipe", equipeRouter);

// rodar o servidor
app.listen(3000, () => {
    console.log("Servidor em execução - porta 3000");
    console.log("Acesse http://localhost:3000");
});

// para executar o servidor, use o comando:
// node app.js

// para instalar o node use o comando:
// npm install express ejs path