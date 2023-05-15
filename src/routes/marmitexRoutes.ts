import express from "express";
import { MarmitexController } from "../controllers/marmitexController";

const router = express.Router();
const marmitexController = new MarmitexController();

router.get("/", marmitexController.listarMarmitex);
router.post("/", marmitexController.cadastrarMarmitex);
router.get("/:id", marmitexController.buscarMarmitex);
// router.put('/:id', marmitexController.atualizarMarmitex);
// router.delete('/:id', marmitexController.deletarMarmitex);

export default router;
