const express = require("express");
const path = require("path");
const app = express();

// configuração do EJS como view

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);


// Rotas de categoria
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter);

// rodar o servidor
app.listen(3000, () => {
    console.log("Servidor em execução - porta 3000");
    console.log("Acesse em http://localhost:3000");
});