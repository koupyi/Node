import express from "express";
const router = express.Router();

// página de equipe
router.get("/", async (req, res) => {
  res.render("equipe/equipe", {
    title: "Equipe",
    view: "equipe/equipe",
  });
});

export default router;
