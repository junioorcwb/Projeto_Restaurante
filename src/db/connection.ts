import mysql from "mysql2/promise";

export async function createConnection() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "admin",
      password: "123456",
      database: "meu_restaurante",
    });

    // Tentar executar o método ping
    await connection.ping();

    // Se chegarmos até aqui, a conexão foi bem-sucedida
    console.log("Conexão com o banco de dados foi bem-sucedida!");

    return connection;
  } catch (err) {
    // Se houver um erro, logue o erro e saia
    console.error("Erro ao conectar ao banco de dados:", err);
    process.exit(1);
  }
}

// Chamar a função para testar a conexão
createConnection();
