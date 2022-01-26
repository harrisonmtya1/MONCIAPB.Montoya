const express=require("express");
const rutaProductos=require("./productos/productos.routes")
const rutaCarrito=require("./carrito/carrito.routes")

const routerProductos= express.Router();
const routerCarrito=express.Router();

routerProductos.use("/productos",rutaProductos);
routerCarrito.use("/carrito",rutaCarrito);

module.exports= {routerProductos,routerCarrito}