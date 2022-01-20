class data {
  constructor() {
      this.productos = []
      this.mensajes=[]
 }

  listar() {
      return this.productos
  }

  guardar(prod) {
      
      this.productos.push(prod)
      console.log(this.productos)
     
  }

  listarMensajes() {
    return this.mensajes
}

guardarMensaje(mensaje) {
    
    this.mensajes.push(mensaje)
    console.log(this.mensajes)
    
}


}

module.exports = data