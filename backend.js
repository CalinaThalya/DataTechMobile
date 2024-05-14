const express = require("express");
const cors = require("cors");
const api = express();
const jwt = require("jsonwebtoken");
const lista = [];
api.use(express.json());
api.use(cors());

const CHAVE_SECRETA = process.env["CHAVE_SECRETA"];

const listaUsuarios = {
  joao: { senha: "1234", perfil: "user" },
  antonio: { senha: "1234", perfil: "admin" },
};

const autentica = (request, response, next) => {
  if (request.headers.authorization) {
    const auth = request.headers.authorization;
    // Bearer salkjhfakjshfkjsahfk
    const listaAuth = auth.split(" ");
    //    0              1
    // ['Bearer', 'salkjhfakjshfkjsahfk']
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
  if (request.body.usuario in listaUsuarios) {
    const obj = listaUsuarios[request.body.usuario];
    if (request.body.senha == obj.senha) {
      const payload = {
        usuario: request.body.usuario,
        perfil: obj.perfil,
        geradoEm: "2024-05-09-20-03-40",
      };
      const token = jwt.sign(payload, CHAVE_SECRETA);
      console.log("Token: " + token);
      response.status(200).send({ msg: "Usuario Autenticado", token });
    } else {
      response.status(401).send("Senha inválida");
    }
  } else {
    response.status(401).send("Usuario inválido");
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

api.listen(80, () => {
  console.log("Servidor iniciado");
});