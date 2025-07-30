const express = require("express");
const router = express.Router();

//listar categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Listar alunos",
        view: "alunos/show",
    });
});

//form edit categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Editar alunos",
        view: "alunos/edit",
    })
})
//form add categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Add alunos",
        view: "alunos/add"
    })
})
module.exports = router;