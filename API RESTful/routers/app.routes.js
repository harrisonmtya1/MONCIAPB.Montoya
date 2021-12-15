const express=require("express");
const rutaProductos=require("./productos/productos.routes")

const router= express.Router();

router.use("/productos",rutaProductos)

module.exports= router