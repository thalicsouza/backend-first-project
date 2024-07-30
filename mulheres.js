// creating my server with express
const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Ada Lovelace",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newyorker.com%2Ftech%2Fannals-of-technology%2Fada-lovelace-the-first-tech-visionary&psig=AOvVaw3z6V1docv-FYKLarRwy4QV&ust=1722037205357000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODPzNGuw4cDFQAAAAAdAAAAABAE",
        minibio: "Matemática, escritora e a primeira programadora de computadores do mundo.",
    },
    {
        nome: "Katherine Johnson",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nasa.gov%2Ffeature%2Fkatherine",
        minibio: "Foi uma matemática, física e cientista espacial norte-americana.",
    },
    {
        nome: "Grace Hopper",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tecmundo.com.br%2Finternet%2F2070-grace-hopper-criadora-da-primeira-linguagem-de-programacao.htm&psig=AOvVaw3z6V1docv-FYKLarRwy4QV&ust=1722037205357000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODPzNGuw4cDFQAAAAAdAAAAABAE",
        minibio: "Foi uma cientista da computação e almirante da Marinha dos Estados Unidos.",
    },
    {
        nome: "Iana Chan",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mmaglobal.com%2Fspeakers%2Fiana-chan&psig=AOvVaw20wuGN_YFyfXM2BCfLTHTR&ust=1722037859552000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjO74uxw4cDFQAAAAAdAAAAABAE",
        minibio: "Fundadora do Programaria, uma organização que ensina programação para mulheres.",
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta --> ${porta}`);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta);