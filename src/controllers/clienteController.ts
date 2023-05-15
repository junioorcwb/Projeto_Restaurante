import { Request, Response } from "express";
import { Cliente } from "../models/clienteModel";
import { createConnection } from "../db/connection";
import { ResultSetHeader } from "mysql2";

export class ClienteController {
  public async listarClientes(req: Request, res: Response) {
    const connection = await createConnection();
    const [rows] = await connection.query("SELECT * FROM clientes");

    res.json(rows as Cliente[]);
  }

  public async cadastrarCliente(req: Request, res: Response) {
    const cliente: Cliente = req.body;
    const connection = await createConnection();
    const [result] = await connection.query(
      "INSERT INTO clientes SET ?",
      cliente
    );

    res.status(201).json(result);
  }

  public async buscarCliente(req: Request, res: Response) {
    const id: string = req.params.id;
    const connection = await createConnection();
    const [rows] = await connection.query(
      "SELECT * FROM clientes WHERE id = ?",
      [id]
    );

    if (Array.isArray(rows) && rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "Cliente não encontrado" });
    }
  }

  // Aqui você pode adicionar os métodos para atualizar e deletar um cliente...
}

//   public async deletarCliente(req: Request, res: Response) {
//     const id = req.params.id;
//     const connection = await createConnection();
//     const [result] = (await connection.query(
//       "DELETE FROM clientes WHERE id = ?",
//       [id]
//     )) as OkPacket[];

//     if (result[0].affectedRows > 0) {
//       res.json({ message: "Cliente deletado" });
//     } else {
//       res.status(404).json({ message: "Cliente não encontrado" });
//     }
//   }
// }
