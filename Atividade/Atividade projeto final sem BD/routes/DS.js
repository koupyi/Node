const express = require("express");
const router = express.Router();

// listar
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Visão geral DS",
        view: "DS/show",
    });
});

module.exports = router;
