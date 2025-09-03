const express = require("express");
const router = express.Router();

// listar
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Programação web",
        view: "pw/show",
    });
});

module.exports = router;
