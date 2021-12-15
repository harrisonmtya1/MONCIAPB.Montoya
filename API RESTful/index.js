const path= require('path');
const express=require('express');
const rutasApi=require('./routers/app.routes');

const app=express();

const PORT=8080;

app.use(express.static('public'))


app.use('/api', rutasApi);


app.listen(PORT,()=>{
   console.log(`Servidor escuchando por el puerto ${PORT}`)
})



