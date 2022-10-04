const express = require('express');
const routes = require('./route');
const cors = require('cors');
const app = express();

require('./database');

app.use(express.json());

app.use((req, res, next) => {
    app.use(cors());
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routes, () => {
    console.log("Deu certo");
})

app.listen(8080, () => {
    console.log('O servidor está rodando na porta 8080: http://localhost:8080');
});