const express = require("express");
const router = express.Router();

router.get("/", async (req, res)=> {
    res.render("base", {
        title: "EPA",
        view: "EPA/show",
    });
});

module.exports = router;
