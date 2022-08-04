// const { Router } = require("express");
import { Router } from "express";
const routerCart = Router();

// const {crearCarrito, deleteCarrito, carritoProductos, addProdCarrito, deletProdCarrito} = require('../controllers/controllerCarrito')
import {
  getNewCart,
  deleteCart,
  getCartProducts,
  postProductToCart,
  deleteProductFromCart,
  } from "../controllers/controllerCarrito.js"


router.post("/", getNewCart);

router.delete("/:id", deleteCart);

router.get("/:id/productos", getCartProducts);

router.post("/:id/productos",postProductToCart);

router.delete("/:id/productos/:id_prod", deleteProductFromCart);

export default routerCart
