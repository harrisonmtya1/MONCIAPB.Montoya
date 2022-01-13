const path= require('path');
const express=require('express');


const Datos = require('./data/data');
const bodyParser = require('body-parser');

const data = new Datos();

const app=express();

const PORT=8080;


app.use(express.static('public'));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.set('view engine', 'pug');
app.set('views', "./views");

app.get("/productos",(req,res)=>{
   let productos= data.listar()
   res.render("vista",{
     productos
   })
})

app.post("/productos",(req,res)=>{
   const prod= req.body
   data.guardar(prod)
   res.redirect("/")
})


app.listen(PORT,()=>{
   console.log(`Servidor escuchando por el puerto ${PORT}`)
})
