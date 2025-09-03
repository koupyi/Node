const express = require("express");
const router = express.Router();

// listar
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Banco de dados",
        view: "BD/BD",
    });
});

module.exports = router;
