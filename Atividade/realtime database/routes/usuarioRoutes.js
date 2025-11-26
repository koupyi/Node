import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.get("/", usuarioController.list);
router.get("/create", usuarioController.createForm);
router.post("/create", usuarioController.create);
router.get("/:id/edit", usuarioController.editForm);
router.post("/:id/edit", usuarioController.update);
router.get("/:id/delete", usuarioController.delete);

export default router;
