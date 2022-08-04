//IMPORT
import contenedorProductos from '../contenedores/contenedorProducto.js'

//CLASS EXTENDS
class ProductDaoMongo extends contenedorProductos {
  constructor() {
    super("productos", {
      timestamp: { type: String, required: true },
      nombre: { type: String, required: true },
      description: { type: String, required: true },
      codigo: { type: String, required: true },
      thumbnail: { type: String, required: true },
      price: { type: Number, required: true },
      stock: { type: Number, required: true },
    });
  }
}

export default ProductDaoMongo;
