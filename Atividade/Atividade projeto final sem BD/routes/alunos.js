const express = require("express");
const router = express.Router();

// listar
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "cadastro",
        view: "alunos/show",
    });
});


// editar
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Alunos",
        view: "alunos/edit",
    });
});


// add
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Alunos",
        view: "alunos/add",
    });
});

module.exports = router;
