import express from "express";
import { AvaliacaoController } from "../controllers/avaliacaoController";

const router = express.Router();
const avaliacaoController = new AvaliacaoController();

router.get("/", avaliacaoController.listarAvaliacoes);
router.post("/", avaliacaoController.cadastrarAvaliacao);
router.get("/:id", avaliacaoController.buscarAvaliacao);
// router.put('/:id', avaliacaoController.atualizarAvaliacao);
// router.delete('/:id', avaliacaoController.deletarAvaliacao);

export default router;
