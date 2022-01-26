const express=require("express");
const {productos}=require("../../data/data")

const bodyParser = require('body-parser');




const router=express.Router();

router.use(express.json());

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/",(req,res)=>{
    res.json({productos})
})

router.get("/:id",(req,res)=>{
    const {id}= req.params
    const product= productos.find(producto=> producto.id===+id)
    if(!product){
        return res.status(404).json(`Producto con id:${id}, no encontrado`)
    }
    res.json({product})
})

router.post("/",(req,res)=>{
  const {nombre,descripcion,precio,imagen}= req.body
  
  let producto= {
      nombre,
      descripcion,
      precio,
      imagen
  }
  producto.id= productos.length + 1;
  productos.push(producto);
  res.json(producto)
})

router.put("/:id",(req,res)=>{
  const {id}= req.params;
  const {nombre,descripcion,precio,imagen}=req.body;
  let index = productos.findIndex(producto=> producto.id=== +id)
  if(index < 0){
     return res.status(404).json(`Producto con id:${id}, no encontrado`)
  }
  console.log(productos[index])
  let producto= productos[index]
  producto.nombre=nombre,
  producto.descripcion=descripcion,
  producto.precio=precio,
  producto.imagen=imagen
  productos[index]=producto 
  res.send(productos[index])
})

router.delete("/:id",(req,res)=>{
    console.log(productos)
    const {id}= req.params
    const product= productos.find(producto=> producto.id===+id)
    if(!product){
        return res.status(404).json(`Producto con id:${id}, no encontrado`)
    }
    let index = productos.findIndex(producto=> producto.id=== +id)
    productos.splice(index,1)
    console.log(productos)
    res.send("ok")
})

module.exports=router