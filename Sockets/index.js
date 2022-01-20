const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const Datos = require('./data/data');


const data = new Datos();


const PORT=8080;

io.on("connection",socket=>{
   console.log("un usuario conectado");

   socket.emit("productos", data.listar());

   socket.on('actualizar', producto => {
      data.guardar(producto)
      io.sockets.emit('productos', data.listar());
  })

  socket.emit("mensajes", data.listarMensajes());

  socket.on("enviarMensaje", mensaje=>{
     data.guardarMensaje(mensaje);
     io.sockets.emit("mensajes", data.listarMensajes())
  } )
})



app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());






server.listen(PORT,()=>{
   console.log(`Servidor escuchando por el puerto ${PORT}`)
})





