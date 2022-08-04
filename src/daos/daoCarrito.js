//IMPORT
import contenedorProductos from '../contenedores/contenedorProducto.js'

//CLASS EXTENS
class CartDaoMongo extends contenedorProductos {
  constructor() {
    super("compras", {
      timestamp: { type: String, required: true },
      productos: { type: Array, required: true },
    });
  }
}

export default CartDaoMongo;