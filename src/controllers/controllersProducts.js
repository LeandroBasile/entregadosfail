//clase contenedora del archivo para la persistencia

import { ProductDao } from "../daos/index.js";

// import {ProductDaoMongo} from "../daos/daoProduct";


// import { ProductDaoMongo } from "../daos/index.daos.js";

//funciones
const getProducts = async (req, res) => {
  try {
    const resultado = await ProductDao.getAll();
    res.send(resultado);
  } catch (error) {
    console.log(
      "Ocurrio el siguiente error al querer obtener los productos",
      error
    );
    res.sendStatus(500);
  }
};
const getProduct = async (req, res) => {
  try {
    const resultado = await ProductDao.getById(req.params.id);
    if (!resultado) {
      res.send("El id de producto no existe");
    } else {
      res.send(resultado);
    }
  } catch (error) {
    console.log(
      "Ocurrio el siguiente error al querer obtener un producto",
      error
    );
    res.sendStatus(500);
  }
};
const postProduct = async (req, res) => {
  try {
    await ProductDao.save(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(
      "Ocurrio el siguiente error al querer agregar un producto",
      error
    );
    res.sendStatus(500);
  }
};
const putProduct = async (req, res) => {
  try {
    let resultado = await ProductDao.updateById(req.params.id, req.body);
    if (!resultado) {
      res.send("El id de producto no existe");
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(
      "Ocurrio el siguiente error al querer actualizar el producto",
      error
    );
    res.sendStatus(500);
  }
};
const deleteProduct = async (req, res) => {
  try {
    let resultado = await ProductDao.deleteById(req.params.id);
    if (!resultado) {
      res.send("El id de producto no existe");
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(
      "Ocurrio el siguiente error al querer eliminar el producto",
      error
    );
    res.sendStatus(500);
  }
};

//export
export { getProducts, getProduct, postProduct, putProduct, deleteProduct };