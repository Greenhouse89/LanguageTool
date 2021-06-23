const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const express = require('express');
const { userInfo } = require('os');
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
const app = express();
const pgp = require("pg-promise")();


const db = pgp('postgres://brandon:Quattro.c7@localhost:5432/LearnTool');
const server = http.createServer(app);


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

app.get('/', (req, res) =>{
    res.send('Welcome to Learn App');
});
app.get('/proficiencies', (req, res) =>{
    var langProf = db.any("SELECT * from PROFICIENCIES") .then((langProf) => res.send(langProf));
});
app.get('/languages', (req, res) =>{
    var allLang = db.any("SELECT * from LANGUAGES") .then((allLang) => res.send(allLang));
});
app.get('/messages', (req, res) =>{
    var allMessages = db.any("SELECT * from MESSAGES") .then((allMessages) => res.send(allMessages));
});


app.get('/users',(req, res) =>{
    var userInfo= db.any("SELECT * from USERS") .then((userInfo) => res.send(userInfo));
    //console.log(userInfo);
});
