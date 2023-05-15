import { Request, Response } from "express";
import { Avaliacao } from "../models/avaliacaoModel";
import { createConnection } from "../db/connection";

export class AvaliacaoController {
  public async listarAvaliacoes(req: Request, res: Response) {
    const connection = await createConnection();
    const [rows] = await connection.query("SELECT * FROM avaliacoes");

    res.json(rows);
  }

  public async cadastrarAvaliacao(req: Request, res: Response) {
    const avaliacao: Avaliacao = req.body;
    const connection = await createConnection();
    const [result] = await connection.query(
      "INSERT INTO avaliacoes SET ?",
      avaliacao
    );

    res.status(201).json(result);
  }

  public async buscarAvaliacao(req: Request, res: Response) {
    const avaliacaoId: string = req.params.id;
    const connection = await createConnection();
    const [rows] = await connection.query(
      "SELECT * FROM avaliacoes WHERE id = ?",
      [avaliacaoId]
    );

    if (Array.isArray(rows) && rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "Avaliação não encontrada" });
    }
  }
}
