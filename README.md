# Cashforce

> O Cashforce é uma aplicação full stack que utiliza tecnologias como <strong>Node, Express, Sequelize e Vue</strong> para permitir que usuários visualizem notas ficais, incluindo informações sobre sacado, cedente, data de emissão, valor e status.

<img src="https://user-images.githubusercontent.com/87544894/210375194-f804c9b8-6d8e-4288-aa34-b006a3a35f34.gif" alt="cashforce application gif" style="height: 80%; width: 80%;">

## 🛠️ Tecnologias e Ferramentas Utilizadas

<details>

<summary><strong>Front-end</strong></summary>

- Javascript
- Vue
- Vue Router
- Fetch
- EsLint

</details>

<details>

<summary><strong>Back-end</strong></summary>

- Javascript
- Node
- Express
- Express Rescue
- Dotenv
- Mysql2
- Sequelize
- Cors
- EsLint

</details>

## 💻 Como Executar o Projeto Localmente

<details>

#### Requisitos de Sistema

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Banco de dados MySQL](https://www.mysql.com/) configurado e rodando na máquina

1. Faça o clone do repositório para a sua máquina:

```
git clone git@github.com:laurenzdpinder/cashforce.git
```

2. Entre no diretório do projeto:

```
cd cashforce
```

3. Crie um arquivo .env na raiz do diretório backend, baseado no arquivo .env.example fornecido:

```
#### SERVER VARS
API_PORT=3001

#### DATABASE VARS
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_HOST=localhost
```

4. Na raiz do diretório cashforce, execute o seguinte comando para instalar as dependências do projeto:

```
npm run install-all
```

5. Ainda na raiz do diretório cashforce, execute o seguinte comando para iniciar o servidor:

```
npm start
```
6. Abra o navegador e acesse o seguinte endereço: http://localhost:8080

</details>

## 🐳 Como Executar o Projeto com Docker

<details>
  
#### Requisitos de Sistema

- [Docker](https://www.docker.com/get-started/)
- [Docker Compose](https://docs.docker.com/compose/install/)

1. Faça o clone do repositório para a sua máquina:

```
git clone git@github.com:laurenzdpinder/cashforce.git
```

2. Entre no diretório do projeto:

```
cd cashforce
```

3. Execute o seguinte comando para iniciar o projeto com Docker:

```
docker-compose up -d --build
```

4. Aguarde até que a inicialização dos containers do Docker esteja concluída, conforme indicado pelo terminal.

5. Abra o navegador e acesse o seguinte endereço: http://localhost:8080

Nota: Durante a primeira vez que você acessar o projeto em seu navegador, pode ser que demore alguns minutos para que a aplicação esteja disponível devido ao processo de conexão com o banco de dados. Aguarde até que a página carregue completamente.

</details>
