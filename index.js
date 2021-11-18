// Config Inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app =express()

// Config Json
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// Rotas da API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


// Rota/Endpoint Inicial
app.get('/', (req, res) => {
    //Mostra a req
    res.json({message: 'Funfando'})
})

//Entregar Porta servindo a aplicação
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@clus-paluma.8f6vf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )
.then(() => {
    console.log('Conectamos ao MongoDB')
    app.listen(3306)
})
.catch((err) => {
    console.log(err)
})

