

const socket=io();

const formularioproductos = document.getElementById('formularioproductos')
formularioproductos.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        nombre: formularioproductos[0].value,
        descripcion: formularioproductos[1].value,
        precio: formularioproductos[2].value,
        imagen: formularioproductos[3].value
    }
    socket.emit('actualizar', producto);
    formularioproductos.reset()
})

socket.on('productos', productos => {
    llenarTabla(productos).then(html => {
        document.getElementById('tablaproductos').innerHTML = html
    })
});

socket.on("mensajes", mensajes=>{
     const html=crearMensaje(mensajes)
     document.getElementById("mensajes").innerHTML=html
})

function crearMensaje(mensajes){
    return mensajes.map(mensaje=>{
         return(`<div>
         <p><b style="color:blue">${mensaje.email}</b></p>
         <p>${mensaje.mensaje}</p>
         </div>`)
     })
}

function llenarTabla(productos) {
    return fetch('views/layouts/listaProductos.hbs')
        .then(respuesta => respuesta.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla)
            const html = template({ productos })
            return html
        })
}

const formulariochat = document.getElementById('formulariochat')
formulariochat.addEventListener('submit', e => {
    e.preventDefault()
    const mensaje = {
        email: formulariochat[0].value,
        mensaje: formulariochat[1].value,
    
    }
    socket.emit('enviarMensaje', mensaje);
    formulariochat.reset()
})