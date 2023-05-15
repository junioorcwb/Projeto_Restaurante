import { Request, Response } from "express";
import { Marmitex } from "../models/marmitexModel";
import { createConnection } from "../db/connection";

export class MarmitexController {
  public async listarMarmitex(req: Request, res: Response) {
    const connection = await createConnection();
    const [rows] = await connection.query("SELECT * FROM marmitex");

    res.json(rows as Marmitex[]);
  }

  public async cadastrarMarmitex(req: Request, res: Response) {
    const marmitex: Marmitex = req.body;
    const connection = await createConnection();
    const [result] = await connection.query(
      "INSERT INTO marmitex SET ?",
      marmitex
    );

    res.status(201).json(result);
  }

  public async buscarMarmitex(req: Request, res: Response) {
    const id: string = req.params.id;
    const connection = await createConnection();
    const [rows] = await connection.query(
      "SELECT * FROM marmitex WHERE id = ?",
      [id]
    );

    if (Array.isArray(rows) && rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "Marmitex não encontrado" });
    }
  }

  // Aqui você pode adicionar os métodos para atualizar e deletar um marmitex...
}
