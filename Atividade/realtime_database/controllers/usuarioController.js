import { db } from "../config/firebase.js";
import { ref, get, push, set, child, update, remove } from "firebase/database";

const rootRef = ref(db, "usuarios");

export default {
  async list(req, res) {
    try {
      const snap = await get(rootRef);
      const usuarios = snap.exists() ? snap.val() : {};
      res.render("usuarios/list", { title: "Usuários", usuarios });
    } catch (e) {
      console.error("Erro list usuarios:", e);
      res.status(500).send("Erro ao listar usuários");
    }
  },

  createForm(req, res) {
    res.render("usuarios/create", { title: "Novo Usuário" });
  },

  async create(req, res) {
    try {
      const { nome, email } = req.body;
      const novo = push(rootRef);
      await set(novo, { nome, email });
      res.redirect("/usuarios");
    } catch (e) {
      console.error("Erro create usuario:", e);
      res.status(500).send("Erro ao criar usuário");
    }
  },

  async editForm(req, res) {
    try {
      const { id } = req.params;
      const snap = await get(child(rootRef, id));
      if (!snap.exists()) return res.status(404).send("Usuário não encontrado");
      res.render("usuarios/edit", { title: "Editar Usuário", id, usuario: snap.val() });
    } catch (e) {
      console.error("Erro editForm usuario:", e);
      res.status(500).send("Erro ao abrir edição");
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      await update(child(rootRef, id), { nome, email });
      res.redirect("/usuarios");
    } catch (e) {
      console.error("Erro update usuario:", e);
      res.status(500).send("Erro ao atualizar usuário");
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await remove(child(rootRef, id));
      res.redirect("/usuarios");
    } catch (e) {
      console.error("Erro delete usuario:", e);
      res.status(500).send("Erro ao excluir usuário");
    }
  }
};
