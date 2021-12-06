const express=require('express');
const Producto=require('./clase');

const app=express()

const PORT=8080

app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose por el puerto ${PORT}` )
})


app.get("/productos",(req,res)=>{
    res.send("Hola esta es una modificacion")
})

app.get("/productoRandom",(req,res)=>{
    res.send("Hola esta es una modificacion")
})