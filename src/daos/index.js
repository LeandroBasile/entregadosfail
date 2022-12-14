//IMPORT
import dotenv from "dotenv";
dotenv.config();
//DECLARACIONES
let ProductDao;
let CartDao;

//SWTICH DE ASIGNACION
switch (process.env.DATABASE) {
  case "mongo":
    const { default: ProductDaoMongo } = await import(
      "./daoProduct.js"
    );
    const { default: CartDaoMongo } = await import(
      "./daoCarrito.js"
    );
    ProductDao = new ProductDaoMongo();
    CartDao = new CartDaoMongo();
    break;
  case "firebase":
    const { default: ProductDaoFirebase } = await import(
      "./productos/firebase.productos.daos.js"
    );
    const { default: CartDaoFirebase } = await import(
      "./carritos/firebase.carritos.daos.js"
    );
    ProductDao = new ProductDaoFirebase();
    CartDao = new CartDaoFirebase();
    break;
}

export { ProductDao, CartDao };