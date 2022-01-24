const {promises:fs}= require('fs');

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

  async listarMensajes() {
    try {
        const msj = await fs.readFile("./mensajes.json", 'utf-8')
        return JSON.parse(msj)
    } catch (error) {
        return []
    }
}

async guardarMensaje(mensaje) {
    
    this.mensajes.push(mensaje)
    console.log(this.mensajes)
    try {
        await fs.writeFile("./mensajes.json", JSON.stringify(this.mensajes, null, 2))
    } catch (error) {
        throw new Error(`Error al guardar: ${error}`)
    }
    

    
}


}

module.exports = data