class Producto{
constructor(){
    this.productos = []
}

listar() {
    return this.productos
}

guardar(prod) {
    
    this.productos.push(prod)
    console.log(this.productos)
   
}

}

module.exports= Producto;