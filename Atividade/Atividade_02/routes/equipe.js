const express = require("express");
const router = express.Router();

// pagina de equipe
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Equipe",
        view: "equipe/equipe",
    });
});

module.exports = router;