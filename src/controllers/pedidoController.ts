import { Request, Response } from "express";
import { Pedido } from "../models/pedidoModel";
import { createConnection } from "../db/connection";
import { ResultSetHeader } from "mysql2";

export class PedidoController {
  public async listarPedidos(req: Request, res: Response) {
    const connection = await createConnection();
    const [rows] = await connection.query('SELECT * FROM pedidos');

    res.json(rows as Pedido[]);
  }

  public async cadastrarPedido(req: Request, res: Response) {
    const pedido: Pedido = req.body;
    const connection = await createConnection();
    const [result] = await connection.query('INSERT INTO pedidos SET ?', pedido) as ResultSetHeader[];

    const [rows] = await connection.query('SELECT * FROM pedidos WHERE id = ?', [result.insertId]);

    res.status(201).json(result);
  }

  public async buscarPedido(req: Request, res: Response) {
    const id: string = req.params.id;
    const connection = await createConnection();
    const [rows] = await connection.query('SELECT * FROM pedidos WHERE id = ?', [id]);

    if (Array.isArray(rows) && rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "Pedido não encontrado" });
    }
  }

  // Aqui você pode adicionar os métodos para atualizar e deletar um pedido...
}
