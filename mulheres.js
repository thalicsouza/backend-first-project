// creating my server with express
const express = require('express') //initiating express
const router = express.Router() //initiating and configuring first part of the router
const { v4: uuidv4 } = require('uuid') //importing uuid to create unique ids
const app = express() //initiating the app
const porta = 3333 //porta que o servidor vai rodar

// creating an array with objects that have information about women in tech
const mulheres = [
    {
        id: 1,
        nome: "Ada Lovelace",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newyorker.com%2Ftech%2Fannals-of-technology%2Fada-lovelace-the-first-tech-visionary&psig=AOvVaw3z6V1docv-FYKLarRwy4QV&ust=1722037205357000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODPzNGuw4cDFQAAAAAdAAAAABAE",
        minibio: "Matemática, escritora e a primeira programadora de computadores do mundo.",
    },
    {
        id: 2,
        nome: "Katherine Johnson",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nasa.gov%2Ffeature%2Fkatherine",
        minibio: "Foi uma matemática, física e cientista espacial norte-americana.",
    },
    {
        id: 3,
        nome: "Grace Hopper",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tecmundo.com.br%2Finternet%2F2070-grace-hopper-criadora-da-primeira-linguagem-de-programacao.htm&psig=AOvVaw3z6V1docv-FYKLarRwy4QV&ust=1722037205357000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODPzNGuw4cDFQAAAAAdAAAAABAE",
        minibio: "Foi uma cientista da computação e almirante da Marinha dos Estados Unidos.",
    },
    {
        id: 4,
        nome: "Iana Chan",
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mmaglobal.com%2Fspeakers%2Fiana-chan&psig=AOvVaw20wuGN_YFyfXM2BCfLTHTR&ust=1722037859552000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjO74uxw4cDFQAAAAAdAAAAABAE",
        minibio: "Fundadora do Programaria, uma organização que ensina programação para mulheres.",
    }
]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher)
    response.json(mulheres)
}

//PORT
function mostraPorta() {
  console.log(`Servidor criado e rodando na porta --> ${porta}`);
}

app.use(router.get('/mulheres', mostraMulheres)) //router to GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //router to POST /mulheres
app.listen(porta, mostraPorta); //server listening to the port