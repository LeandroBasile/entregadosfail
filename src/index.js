// const { Router } = require("express");
import { Router } from "express";
import routerCart from "./routes/rutaCarrito.js";
// const producto =require('./routes/rutaProductos')
import routerProd from './routes/rutaProductos.js'
// const carrito =require('./routes/rutaCarrito')
// import {carrito} from './routes/rutaCarrito'



const router = Router();

router.use('/productos',routerProd)
router.use('/carrito',routerCart)


export default routerCartProd
