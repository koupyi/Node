const express = require("express");
const path = require("path");
const app = express();

// Primeiro: arquivos estáticos
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'public')));

// Depois: configuração do EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Por fim: rotas dinâmicas
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const pwRouter = require("./routes/pw");
app.use("/pw", pwRouter);

const alunosRouter = require("./routes/alunos");
app.use("/alunos", alunosRouter);

const epaRouter = require("./routes/EPA");
app.use("/EPA", epaRouter);

const equipeRouter = require("./routes/equipe");
app.use("/equipe", equipeRouter);

// Rodar o servidor
app.listen(3000, () => {
  console.log("Servidor em execução - http://localhost:3000"
  );
});