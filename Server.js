const express = require('express')
const app = express()
const puerto = 8080
const rutas = require('./router/index')

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(__dirname + '/public'))

app.use('/', rutas)


app.use((error, req, res) => {
    res.status(error.httpStatusCode).send(error)
})
// PARA QUE EL PUERTO ESCUCHE

app.listen(puerto, () => {
    console.log(`Servidor escuchando el puerto ${puerto}`)

})