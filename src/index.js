const express = require('express');
const routes = require('./route');
const app = express();

// const Aluno = require('./aluno');

require('./database');

app.use(express.json());

app.use(routes, () => {
    console.log("Deu certo");
})

app.listen(8080, () => {
    console.log('O servidor está rodando na porta 8080: http://localhost:8080/');
});