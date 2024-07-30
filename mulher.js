// creating my server with express
const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
            nome: "Ada Lovelace",
            imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newyorker.com%2Ftech%2Fannals-of-technology%2Fada-lovelace-the-first-tech-visionary&psig=AOvVaw3z6V1docv-FYKLarRwy4QV&ust=1722037205357000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODPzNGuw4cDFQAAAAAdAAAAABAE",
            minibio: "Matemática, escritora e a primeira programadora de computadores do mundo."
        })
}

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta --> ${porta}`);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);