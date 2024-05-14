const express = require("express");
const cors = require("cors");
const api = express();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const lista = [];
api.use(express.json());
api.use(cors());

const CHAVE_SECRETA = process.env["CHAVE_SECRETA"];

// Função para ler os usuários do arquivo db.json
const lerUsuarios = () => {
  const data = fs.readFileSync("db.json");
  return JSON.parse(data).users;
};

// Lista de usuários do arquivo db.json
let listaUsuarios = lerUsuarios();

const autentica = (request, response, next) => {
  if (request.headers.authorization) {
    const auth = request.headers.authorization;
    const listaAuth = auth.split(" ");
    const token = listaAuth[1];
    console.log("Token recebido: " + token);
    if (token) {
      jwt.verify(token, CHAVE_SECRETA, (err, decode) => {
        if (err) {
          response.status(403).send({
            msg: "token inválido",
          });
          return;
        }
      });
    } else {
      response.status(403).send({
        msg: "token inexistente",
      });
      return;
    }
  } else {
    response.status(403).send({
      msg: "falta authorization",
    });
    return;
  }
  next();
};

api.post("/login", (request, response) => {
  const { email, senha } = request.body;
  const usuario = listaUsuarios.find(u => u.email === email && u.senha === senha);
  if (usuario) {
    const payload = {
      usuario: usuario.email,
      perfil: "user", // Defina o perfil conforme necessário
      geradoEm: new Date(),
    };
    const token = jwt.sign(payload, CHAVE_SECRETA);
    console.log("Token: " + token);
    response.status(200).send({ msg: "Usuario Autenticado", token });
  } else {
    response.status(401).send("Usuário ou senha inválidos");
  }
});

api.post("/contato", autentica, (request, response) => {
  lista.push(request.body);
  response.status(200).send({
    msg: "Contato cadastrado com sucesso",
  });
  console.log("Contato gravado");
});

api.get("/contato", autentica, (request, response) => {
  response.status(200).send(lista);
  console.log("Agenda de contatos lida");
});

api.get("/", (request, response) => {
  console.log("recurso / acionado...");
  response.send("Bem vindo ao sistema de Agenda de Contatos em NodeJS");
});

api.listen(3001, () => {
  console.log("Servidor iniciado");
});
