const express = require("express");
const router = express.Router();

//listar categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Listar cursp",
        view: "curso/show",
    });
});

//form edit categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Editar curso",
        view: "curso/edit",
    })
})
//form add categoria
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Add curso",
        view: "curso/add"
    })
})
module.exports = router;