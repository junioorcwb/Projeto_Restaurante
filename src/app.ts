import express from "express";
import cors from "cors";

// Importando os roteadores
import clienteRoutes from "./routes/clienteRoutes";
import restauranteRoutes from "./routes/restauranteRoutes";
import marmitexRoutes from "./routes/marmitexRoutes";
import pedidoRoutes from "./routes/pedidoRoutes";
import avaliacaoRoutes from "./routes/avaliacaoRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Substitui o bodyParser.json()

// Usando os roteadores
app.use("/clientes", clienteRoutes);
app.use("/restaurantes", restauranteRoutes);
app.use("/marmitex", marmitexRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/avaliacoes", avaliacaoRoutes);

// Placeholder route handler
app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo ao meu-restaurante!" });
});

export default app;