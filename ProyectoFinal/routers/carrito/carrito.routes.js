const express=require('express');
const {promises:fs}= require('fs')


const rutaCarrito= express.Router();

const bodyParser = require('body-parser');
rutaCarrito.use(express.json());
//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
rutaCarrito.use(bodyParser.urlencoded({ extended: false }));

rutaCarrito.post("/",async (req,res)=>{
     const {id,timestamp,productos}= req.body
     let carritos=  await leerArchivo();
     let carrito={id,timestamp,productos}
     console.log(carritos)
     console.log(carrito)
     carritos.push(carrito)
     await escribirArchivo(carritos)
     res.send("ok")
})

async function leerArchivo(){
    const carritos=await fs.readFile("./carritos.json","utf-8")
    return JSON.parse(carritos)
}

async function escribirArchivo(carritos){
    await fs.writeFile("./carritos.json", JSON.stringify(carritos))
}

module.exports= rutaCarrito;