const express=require('express');
const {promises:fs}= require('fs')


const rutaCarrito= express.Router();

const bodyParser = require('body-parser');
rutaCarrito.use(express.json());
//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
rutaCarrito.use(bodyParser.urlencoded({ extended: false }));

rutaCarrito.post("/",async (req,res)=>{
     const {timestamp,productos}= req.body
     let carritos=  await leerArchivo();
     let carrito={id:carritos.length + 1,timestamp,productos}
     carritos.push(carrito)
     await escribirArchivo(carritos)
     res.send("ok")
})

rutaCarrito.delete("/:id",async (req,res)=>{
    const {id}= req.params
    let carritos=  await leerArchivo();
    const carrito= carritos.find(carrito=> carrito.id===+id)
    if(!carrito){
        return res.status(404).json(`Carrito con id:${id}, no encontrado`)
    }
    let index = carritos.findIndex(carrito=> carrito.id=== +id)
    carritos.splice(index,1)
    await escribirArchivo(carritos)
    res.send("ok")
})

rutaCarrito.get("/:id/productos", async(req,res)=>{
    const {id}= req.params
    let carritos=  await leerArchivo();
    const carrito= carritos.find(carrito=> carrito.id===+id)
    res.json(carrito.productos)
})

rutaCarrito.post("/:id/productos",(req,res)=>{
    
})

rutaCarrito.delete(":id/productos/:id_prod",(req,res)=>{
    
})

async function leerArchivo(){
    const carritos=await fs.readFile("./carritos.json","utf-8")
    return JSON.parse(carritos)
}

async function escribirArchivo(carritos){
    await fs.writeFile("./carritos.json", JSON.stringify(carritos))
}

module.exports= rutaCarrito;