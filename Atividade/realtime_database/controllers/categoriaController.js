// Importa a instância do Realtime Database já inicializada (config/firebase.js)
import { db } from "../config/firebase.js";

// Importa funções do Web SDK do Realtime Database usadas no CRUD
import { ref, get, push, set, child, update, remove } from "firebase/database";

// Cria uma referência "raiz" para o nó/coleção "categorias" no banco
const rootRef = ref(db, "categorias");

// Exporta o controller como módulo ES (usado nas rotas)
export default {
  // [READ] Lista todas as categorias
  async list(req, res) {
    try{
      const tabela = await get(rootRef);
      const categorias = tabela.exists() ? tabela.val() : {};

      res.render("categorias/list", {
        title: "Lista de Categorias",
        categorias
      });
    } catch (e){
      console.log("Erro no listar ", e)
    }
  },

  // [CREATE - FORM] Mostra o formulário de criação (sem acessar o DB)
  createForm(req, res) {
    // Apenas renderiza a página de criação
    res.render("categorias/create", { title: "Nova Categoria" });
  },

  // [CREATE - ACTION] Cria uma categoria nova
  async create(req, res) {
      try {
      const { nome, descricao } = req.body;
      const novo = push(rootRef);
      await set(novo, { nome, descricao });
      res.redirect("/categorias");
    } catch (e) {
      console.error("Erro ao criar um Realtime Database:", e);
      res.status(500).send("Erro ao listar");
    }
  },

  // [UPDATE - FORM] Carrega dados para edição de uma categoria específica
  async editForm(req, res) {
    try {
      // Captura o id da rota (ex.: /categorias/:id/edit)
      const { id } = req.params;
      // Monta ref para o filho: categorias/{id}
      const snap = await get(child(rootRef, id));
      // Se não existir, retorna 404
      if (!snap.exists())
        return res.status(404).send("Categoria não encontrada");
      // Renderiza o form de edição com os dados atuais
      res.render("categorias/edit", {
        title: "Editar Categoria",
        id,
        categoria: snap.val(),
      });
    } catch (e) {
      console.error("Erro editForm categoria:", e);
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
      // Atualiza apenas os campos enviados no caminho categorias/{id}
      await update(child(rootRef, id), { nome, descricao });
      // Volta para a listagem
      res.redirect("/categorias");
    } catch (e) {
      console.error("Erro update categoria:", e);
      res.status(500).send("Erro ao atualizar categoria");
    }
  },
  // [DELETE] Remove uma categoria pelo id
  async delete(req, res) {
    try {
      // Lê o id da rota
      const { id } = req.params;
      // Remove o nó categorias/{id}
      await remove(child(rootRef, id));
      // Redireciona para a listagem após excluir
      res.redirect("/categorias");
    } catch (e) {
      console.error("Erro delete categoria:", e);
      res.status(500).send("Erro ao excluir categoria");
    }
  },
};
