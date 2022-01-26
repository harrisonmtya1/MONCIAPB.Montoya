const {promises:fs}= require('fs');

class Mensajes {
  constructor() {
      
      this.mensajes=[]
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
    try {
        const msj = await fs.readFile("./mensajes.json", 'utf-8')
        this.mensajes=JSON.parse(msj)
        this.mensajes.push(mensaje)
        await fs.writeFile("./mensajes.json", JSON.stringify(this.mensajes, null, 2))
    } catch (error) {
        throw new Error(`Error al guardar: ${error}`)
    }
    

    
}


}

module.exports = Mensajes