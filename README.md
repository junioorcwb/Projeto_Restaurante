# Meu-Restaurante API

Este é um servidor API RESTful criado com Node.js e MySQL para gerenciar um restaurante fictício.

## Começando

Essas instruções vão permitir que você tenha uma cópia do projeto e o execute na sua máquina local para propósitos de desenvolvimento e testes.

### Pré-requisitos

Os seguintes softwares devem estar instalados em seu sistema:

- Node.js
- MySQL

### Instalação

1. Clone este repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências com `npm install`.
4. Configure o banco de dados MySQL no arquivo `db/config.ts`.
5. Inicie o servidor com `npm start`.

## Estrutura do Projeto

```plaintext
meu-restaurante/
  |- src/
      |- controllers/
          |- clienteController.ts
          |- restauranteController.ts
          |- marmitexController.ts
          |- pedidoController.ts
          |- avaliacaoController.ts
      |- models/
          |- clienteModel.ts
          |- restauranteModel.ts
          |- marmitexModel.ts
          |- pedidoModel.ts
          |- avaliacaoModel.ts
      |- routes/
          |- clienteRoutes.ts
          |- restauranteRoutes.ts
          |- marmitexRoutes.ts
          |- pedidoRoutes.ts
          |- avaliacaoRoutes.ts
      |- db/
          |- config.ts
          |- connection.ts
      |- app.ts

   Endpoints da API
   Aqui estão alguns exemplos de endpoints disponíveis:

GET /clientes
POST /clientes
GET /clientes/:id
PUT /clientes/:id
DELETE /clientes/:id
... e muitos mais.
