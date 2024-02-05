const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorhHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorhHttp);

io.addListener('connection', (socket)=> {
    console.log(' um usuario conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})

aplicacao.use(express.static('public'));


servidorhHttp.listen(1000, '10.0.0.108');