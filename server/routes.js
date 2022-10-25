// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [
  {
   _id: 'XXX',
   user: 'spiderman',
   mensaje: 'Hola Mundo'
  }
  
];
//Get mensajes
router.get('/', function(req, res)
{
  res.json(mensajes);
});

//Post mensajes
router.post('/', function(req, res){
  const mensaje={
    mensaje:req.body.user,
    user: req.body.user
  };

  mensajes.push(mensajes);

  console.log(mensajes);

  res.json(
    {
    ok:true,
    mensaje

  });

});

module.exports=router;
// Get mensajes
router.get('/', function (req, res) {
  res.json('Obteniendo mensajes');
});

module.exports = router;