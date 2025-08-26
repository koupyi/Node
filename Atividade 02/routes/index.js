const express = require("express");
const router = express.Router();

// pagina inicial
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Página Inicial",
        view: "index",
    });
});

module.exports = router;
