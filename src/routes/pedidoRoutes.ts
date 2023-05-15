import express from "express";
import { PedidoController } from "../controllers/pedidoController";

const router = express.Router();
const pedidoController = new PedidoController();

router.get("/", pedidoController.listarPedidos);
router.post("/", pedidoController.cadastrarPedido);
router.get("/:id", pedidoController.buscarPedido);
// router.put('/:id', pedidoController.atualizarPedido);
// router.delete('/:id', pedidoController.deletarPedido);

export default router;
