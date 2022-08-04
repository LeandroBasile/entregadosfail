import { Router } from "express";
const routerProd = Router();

import {
  getProducts, getProduct, postProduct, putProduct, deleteProduct
} from "../controllers/controllersProducts.js"

const checkAdmin = (admin) => {
  return (req, res, next) => {
    if (admin === true) {
      next();
    } else {
      res.json({
        error: -1,
        descripcion: `Ruta '${req.route.path}' Método '${req.route.stack[0].method}' - No Autorizada`,
      });
    }
  };
};

const admin = true;
let check = checkAdmin(admin);

router.post("/", check, postProduct);
router.get("/", getProducts);
router.put("/:id", check, putProduct);
router.get("/:id", check, getProduct);
router.delete("/:id", deleteProduct);

export default routerProd
