import { Request, Response } from "express";
import { Restaurante } from "../models/restauranteModel";
import { createConnection } from "../db/connection";

export class RestauranteController {
  public async listarRestaurantes(req: Request, res: Response) {
    const connection = await createConnection();
    const [rows] = await connection.query("SELECT * FROM restaurantes");

    res.json(rows as Restaurante[]);
  }

  public async cadastrarRestaurante(req: Request, res: Response) {
    const restaurante: Restaurante = req.body;
    const connection = await createConnection();
    const [result] = await connection.query(
      "INSERT INTO restaurantes SET ?",
      restaurante
    );

    res.status(201).json(result);
  }

  public async buscarRestaurante(req: Request, res: Response) {
    const id: string = req.params.id;
    const connection = await createConnection();
    const [rows] = await connection.query(
      "SELECT * FROM restaurantes WHERE id = ?",
      [id]
    );

    if (Array.isArray(rows) && rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "Restaurante não encontrado" });
    }
  }

  // Aqui você pode adicionar os métodos para atualizar e deletar um restaurante...
}
