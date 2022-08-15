const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    return res.json([{
        name: 'Dunga',
        idade: '2 anos',
        porte: 'Porte pequeno',
        comportamento: 'Calmo e educado',
        cidade: 'Rio de Janeiro',
        img: '/assets/Imagem Dunga.png'
    },{
        name: 'Felícia',
        idade: '3 meses',
        porte: 'Porte pequeno',
        comportamento: 'Ativa e carinhosa',
        cidade: 'Nova Iguaçu',
        img: '/assets/Imagens Felícia.png'
    },{
        name: 'Sírius',
        idade: '6 meses',
        porte: 'Porte grande',
        comportamento: 'Ativo e educado',
        cidade: 'Duque de Caxias',
        img: '/assets/Imagem - sirius.png' 
    },{
        name: 'Fiona',
        idade: '3 anos',
        porte: 'Porte pequeno',
        comportamento: 'Calma e carinhosa',
        cidade: 'São Gonçalo',
        img: '/assets/Imagem-Fiona.png'
    },{
        name: 'Sid',
        idade: '8 meses',
        porte: 'Porte médio/grande',
        comportamento: 'Brincalhão e amável',
        cidade: 'Rio de Janeiro',
        img: '/assets/Imagem - Sid.png'
    },{
        name: 'Yoda',
        idade: '1 ano',
        porte: 'Porte médio',
        comportamento: 'Ativo e carinhoso',
        cidade: 'Nova Iguaçu',
        img: '/assets/Imagem - Yoda.png'
    },{
        name: 'Lua',
        idade: '6 meses',
        porte: 'Porte médio',
        comportamento: 'Ativa e carinhosa',
        cidade: 'Duque de Caxias',
        img: '/assets/Imagenm Lua.png'
    },{
        name: 'Amora',
        idade: '45 dias',
        porte: 'Porte grande',
        comportamento: 'Calma e carinhosa',
        cidade: 'São Gonçalo',
        img: '/assets/Imagem - Amora.png'
    },{
        name: 'Zelda',
        idade: '5 meses',
        porte: 'Porte médio',
        comportamento: 'Ativa e amável',
        cidade: 'Rio de Janeiro',
        img: '/assets/Imagem - Zelda.png'
    },{
        name: '',
        idade: '',
        porte: '',
        comportamento: '',
        cidade: '',
        img: ''
    }])
})

app.listen('3003')