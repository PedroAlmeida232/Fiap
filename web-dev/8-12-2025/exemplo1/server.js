// npm init -y
// npm install express

//Crud - Create, Read, Update, Delete

const express = require('express');

const app = express();
const url = 'http://localhost:8080';
app.get('/teste', (req, res) => {
  res.send('Olá, mundo Dev!');
})
app.get('/sistema/perfil', (req, res) => {
    res.send('Perfil do usuário');
})

app.listen(8080, () => {
  console.log(`Servidor esta rodando no ${url}`);
})
