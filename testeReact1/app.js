'use strict'

const http = require('http') //definindo modulo http, que é nativo em node
const fs = require('fs') // modulo nativo FS, para carregar arquivo html

const server = http.createServer(
    (req, res) => {//function arrow
        res.writeHead(200),//reposta ao servidor com um código de status http
        res.end(fs.readFileSync('view/index.html'))//respondendo com um html
    }
)//fim server

server.listen(3000, function() {//inicialização do server e definição da porta com a função listen
    console.log('Server Online!')
    //console.log(fs.readFileSync('view/index.html'))
})//fim listen
