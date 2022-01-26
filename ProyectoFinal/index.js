const path= require('path');
const express=require('express');
const {routerCarrito,routerProductos}=require('./routers/app.routes');

const app=express();

const PORT= process.env.PORT || 8080;

app.use(express.static('public'))


app.use('/api', routerProductos);
app.use('/api', routerCarrito)


app.listen(PORT,()=>{
   console.log(`Servidor escuchando por el puerto ${PORT}`)
})



