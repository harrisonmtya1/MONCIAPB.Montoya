const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const Mensajes = require('./data/mensajes');
const Productos= require('./data/productos')


const objMensaje = new Mensajes();
const objProductos= new Productos();


const PORT=8080;

io.on("connection", async socket=>{
   console.log("un usuario conectado");

   socket.emit("productos", objProductos.listar());

   socket.on('actualizar', producto => {
      objProductos.guardar(producto)
      io.sockets.emit('productos', objProductos.listar());
  })

  socket.emit("mensajes", await objMensaje.listarMensajes());

  socket.on("enviarMensaje", async mensaje=>{
     mensaje.fecha= new Date().toLocaleString;
     await objMensaje.guardarMensaje(mensaje);
     io.sockets.emit("mensajes", await objMensaje.listarMensajes())
  } )
})



app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());






server.listen(PORT,()=>{
   console.log(`Servidor escuchando por el puerto ${PORT}`)
})





