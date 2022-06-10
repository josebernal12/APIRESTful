const { Router } = require('express')
const router = Router()
const Productos = []




//RUTAS

router.get('/api/Productos', (req, res) => {
   res.json(Productos)

})

router.get('/api/Productos/:id', (req, res, next) => {
   const found = Productos.filter((producto) => {
      return producto.id === Number(req.params.id)
   })

   if (!Productos.id) {
      const error = new Error('el parametro no existe')
      error.httpStatusCode = 400
      return next(error, req, res)

   }
   res.json(found)

})

router.post('/api/Productos', (req, res) => {

   const asignar = { nombre, precio, thumbnail } = req.body
   asignar.id = Productos.length + 1
   Productos.push(asignar)

   res.sendStatus(201)

})

router.put('/api/Productos/:id', (req, res) => {
   const { nombre, precio, thumbnail } = req.body
   id = Number(req.params.id)
   const actualizar = Productos.find(p => p.id == id);

   actualizar.nombre = nombre
   actualizar.precio = precio
   actualizar.thumbnail = thumbnail


   return res.json(actualizar)
})

router.delete('/api/Productos/:id', (req, res) => {
   id = Number(req.params.id)
   const actualizar = Productos.findIndex(p => p.id == id);
   Productos.splice(actualizar, 1);

   res.sendStatus(200)



})
//EXPORTAMOS EL ARCHIVO

module.exports = router