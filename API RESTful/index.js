const express=require('express');
const {productos}=require('./data/data')

const app=express();

const PORT=8080;

app.listen(PORT,()=>{
   console.log(`Servidor escuchando por el puerto ${PORT}`)
})

app.get("/api/productos",(req,res)=>{
    res.json({productos})
})

app.get("/api/productos/:id",(req,res)=>{
    const {id}= req.params
    const product= productos.find(producto=> producto.id===+id)
    res.json({product})
})

