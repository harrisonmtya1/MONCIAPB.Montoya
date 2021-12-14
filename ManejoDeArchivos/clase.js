const fs = require('fs');

let arrayProductos = [];

class Producto {
    constructor(rutaArchivo) {
        this.rutaArchivo = rutaArchivo
    }

    async save(producto) {
        try {
            const productos = await fs.promises.readFile(this.rutaArchivo, 'utf-8');

            if (productos === "") {
                try {

                    producto.id = arrayProductos.length + 1
                    arrayProductos.push(producto)
                    await fs.promises.writeFile(this.rutaArchivo, JSON.stringify(arrayProductos));
                } catch (error) {
                    console.log(error.message)
                }

            } else {
                arrayProductos = JSON.parse(productos)
                producto.id = arrayProductos.length + 1
                arrayProductos.push(producto)
                await fs.promises.writeFile(this.rutaArchivo, JSON.stringify(arrayProductos));

            }

        } catch (error) {
            console.log(error.message)

        }


    }

    async getById(id) {
        try {
            const productos = await fs.promises.readFile(this.rutaArchivo, 'utf-8');
            if (productos === "") {
                return "Archivo vacio"
            } else {
                arrayProductos = JSON.parse(productos)
                for (let producto of arrayProductos) {

                    if (producto.id == id) {
                        return producto
                    }
                }
            }
        } catch (error) {
            console.log(error.message)
        }

    }

    async getAll() {
        try {
            const productos = await fs.promises.readFile(this.rutaArchivo, 'utf-8');
            if (productos === "") {
                return "Archivo vacio"
            } else {
                return arrayProductos = JSON.parse(productos)

            }
        } catch (error) {
            console.log(error.message)
        }

    }

    async deleteById(id) {
        try {
            const productos = await fs.promises.readFile(this.rutaArchivo, 'utf-8');
            if (productos === "") {
                return "Archivo vacio"
            } else {
              arrayProductos = JSON.parse(productos)
              const findbyId= (producto)=> producto.id == id;
              let index= arrayProductos.findIndex(findbyId);
              
              arrayProductos.splice(index,1)
              return arrayProductos
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.rutaArchivo, '')
            return "Registros Eliminados"
        } catch (error) {
            console.log(error.message)
        }
    }

}

module.exports = Producto;