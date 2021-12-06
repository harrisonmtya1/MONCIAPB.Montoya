const express=require('express');
const Producto=require('./clase');

const app=express()

const PORT=8080

app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose por el puerto ${PORT}` )
})


app.get("/productos",(req,res)=>{
    const producto=new Producto("./archivo.txt")
    let resultado= producto.getAll()
    resultado.then(val=> res.send({val}))
    
    })

app.get("/productoRandom",(req,res)=>{
    let max=0
    let min=0
    let indexAleatorio=0
    const producto=new Producto("./archivo.txt")
    let resultado= producto.getAll()
    resultado.then(val=> {
        max=val.length 
        indexAleatorio= Math.floor(Math.random()* max)
        console.log(indexAleatorio)
    })
    let resultadoAleatorio=producto.getByIndex(indexAleatorio)
    resultadoAleatorio.then(val=>{
        res.send({val})
    })

    
})