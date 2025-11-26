// Importa a instância do Realtime Database já inicializada (config/firebase.js)
import { db } from "../config/firebase.js";

// Importa funções do Web SDK do Realtime Database usadas no CRUD
import { ref, get, push, set, child, update, remove } from "firebase/database";

const rootRef = ref(db, "alunos");

// Exporta o controller como módulo ES (usado nas rotas)
export default {
  async list(req, res) {
    try{
      const tabela = await get(rootRef);
      const alunos = tabela.exists() ? tabela.val() : {};
    res.render("alunos/list", {
      title: "Lista de alunos",
      alunos
    });
    } catch (e){
      console.log("Erro no listar ", e)
    }
  },

  // [CREATE - FORM] Mostra o formulário de criação (sem acessar o DB)
  createForm(req, res) {
    // Apenas renderiza a página de criação
    res.render("alunos/create", { title: "Novo Aluno" });
  },

  // [CREATE - ACTION] Cria uma categoria nova
  async create(req, res) {
      try {
      const { nome, descricao } = req.body;
      const novo = push(rootRef);
      await set(novo, { nome, descricao });
      res.redirect("/alunos");
    } catch (e) {
      console.error("Erro ao criar um Realtime Database:", e);
    }
  },

  // [UPDATE - FORM] Carrega dados para edição de uma categoria específica
    async editForm(req, res) {
      try {
        const { id } = req.params;
        const snap = await get(child(rootRef, id));
        // Se não existir, retorna 404
        if (!snap.exists())
          return res.status(404).send("Aluno não encontrado");
        // Renderiza o form de edição com os dados atuais

        res.render("alunos/edit", {
          title: "Editar Aluno",
          id,
          aluno: snap.val(),
        });
      } catch (e) {
        console.error("Erro editForm Aluno:", e);
        res.status(500).send("Erro ao abrir edição");
      }
    },
    // [UPDATE - ACTION] Salva a edição de uma categoria
    async update(req, res) {
      try {
        // Pega o id da URL e o novo nome do body
        const { id } = req.params;
        const { nome } = req.body;
        const { descricao } = req.body;
        await update(child(rootRef, id), { nome, descricao });
        // Volta para a listagem
        res.redirect("/alunos");
      } catch (e) {
        console.error("Erro update aluno:", e);
        res.status(500).send("Erro ao atualizar aluno");
      }
    },
    // [DELETE] Remove uma categoria pelo id
    async delete(req, res) {
      try {
        // Lê o id da rota
        const { id } = req.params;
        await remove(child(rootRef, id));
        // Redireciona para a listagem após excluir
        res.redirect("/alunos");
      } catch (e) {
        console.error("Erro delete aluno:", e);
        res.status(500).send("Erro ao excluir aluno");
      }
    },
};
