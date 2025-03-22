# Todo List

Uma aplicação simples de gerenciamento de tarefas (Todo List) construída com React para o frontend e Node.js (Express) para o backend. Este projeto permite aos usuários adicionar, completar e remover tarefas de maneira intuitiva.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)

## Tecnologias Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Axios](https://axios-http.com/)
  
- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  
- **Banco de Dados:**
  - Nenhum banco de dados foi usado. O armazenamento ocorre em memória.

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) deve estar instalado em sua máquina.
- O npm (gerenciador de pacotes do Node.js) é instalado automaticamente com o Node.js.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/usuario/todo-list.git
   cd todo-list
   ```

2. **Instale as dependências do backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Instale as dependências do frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Inicie o servidor do backend:**
   ```bash
   cd ../backend
   node server.js
   ```

   O servidor do backend deverá estar disponível em `http://localhost:5000`.

5. **Inicie o aplicativo frontend:**
   ```bash
   cd ../frontend
   npm start
   ```

   O aplicativo frontend deverá estar disponível em `http://localhost:3000`.

## Uso

Após iniciar o sistema, você poderá acessar a aplicação web no navegador. A interface permitirá que você:

- Adicione novas tarefas.
- Marque tarefas como concluídas.
- Remova tarefas da lista.
