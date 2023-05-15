import express from "express";
import { RestauranteController } from "../controllers/restauranteController";

const router = express.Router();
const restauranteController = new RestauranteController();

router.get("/", restauranteController.listarRestaurantes);
router.post("/", restauranteController.cadastrarRestaurante);
router.get("/:id", restauranteController.buscarRestaurante);
// router.put('/:id', restauranteController.atualizarRestaurante);
// router.delete('/:id', restauranteController.deletarRestaurante);

export default router;
