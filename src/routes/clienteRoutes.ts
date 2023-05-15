import express from "express";
import { ClienteController } from "../controllers/clienteController";

const router = express.Router();
const clienteController = new ClienteController();

router.get("/", clienteController.listarClientes);
router.post("/", clienteController.cadastrarCliente);
router.get("/:id", clienteController.buscarCliente);
// router.put('/:id', clienteController.atualizarCliente);
// router.delete('/:id', clienteController.deletarCliente);

export default router;
