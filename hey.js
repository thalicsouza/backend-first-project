// criando meu server e minha rota
const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraHey(request, response) {
    response.send("Hey ho, let's go!")
}

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta --> ${porta}`);
}

app.use(router.get('/hey', mostraHey))
app.listen(porta, mostraPorta)

//end of hey.js

