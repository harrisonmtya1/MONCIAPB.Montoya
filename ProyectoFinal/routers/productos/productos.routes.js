const express=require("express");
const {productos}=require("../../data/productos")

const bodyParser = require('body-parser');




const rutaProductos=express.Router();

rutaProductos.use(express.json());

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
rutaProductos.use(bodyParser.urlencoded({ extended: false }));

rutaProductos.get("/",(req,res)=>{
    res.json(productos)
})

rutaProductos.get("/:id",(req,res)=>{
    const {id}= req.params
    const product= productos.find(producto=> producto.id===+id)
    if(!product){
        return res.status(404).json(`Producto con id:${id}, no encontrado`)
    }
    res.json(product)
})

rutaProductos.post("/",(req,res)=>{
  const {timestamp,nombre,descripcion,codigo,foto,precio,stock}= req.body
  
  let producto= {
    timestamp,nombre,descripcion,codigo,foto,precio,stock
  }
  producto.id= productos.length + 1;
  productos.push(producto);
  res.json(producto)
})

rutaProductos.put("/:id",(req,res)=>{
  const {id}= req.params;
  const {timestamp,nombre,descripcion,codigo,foto,precio,stock}=req.body;
  let index = productos.findIndex(producto=> producto.id=== +id)
  if(index < 0){
     return res.status(404).json(`Producto con id:${id}, no encontrado`)
  }
  console.log(productos[index])
  let producto= productos[index]
  producto.timestamp=timestamp,
  producto.nombre=nombre,
  producto.descripcion=descripcion,
  producto.codigo=codigo,
  producto.foto=foto,
  producto.precio=precio,
  producto.stock=stock
  productos[index]=producto 
  res.send(productos[index])
})

rutaProductos.delete("/:id",(req,res)=>{
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

module.exports = rutaProductos