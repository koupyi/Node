const express = require("express");
const router = express.Router();

// listar
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Lista Cursos",
        view: "curso/show",
    });
});


// editar
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Cursos",
        view: "curso/edit",
    });
});


// add
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Cursos",
        view: "curso/add",
    });
});

module.exports = router;
