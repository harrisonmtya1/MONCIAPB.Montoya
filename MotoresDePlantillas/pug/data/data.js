class data {
  constructor() {
      this.productos = []
      this.id = 0
  }

  listar() {
      return this.productos
  }

  guardar(prod) {
      
      this.productos.push(prod)
      console.log(this.productos)
     
  }


}

module.exports = data