import HTTPStatus from "http-status";
const Product = require("../../db/models").product;

class ProductController {
  static errorResponse(err, res) {
    const error = err.mapped
      ? Object.values(err.mapped())
      : `an error occurred ${err}`;
    res
      .status(HTTPStatus.BAD_REQUEST)
      .json(Object.assign({}, { success: false }, { error }));
  }
  static async index(req, res) {
    const fetchProducts = () => Product.getAll();
    try {
      const productList = await fetchProducts(req.query);
      if (productList) {
        res.status(201).json({
          success: true,
          data: productList
        });
      } else {
        res.status(401).json({ success: false, data: "there are no products" });
      }
    } catch (error) {
      ProductController.errorResponse(error, res);
    }
  }
  static async show(req, res) {
    try {
      const fetchDetails = productId => Product.details(productId);
      const getProduct = await fetchDetails(req.params.id);
      if (getProduct) {
        res.status(201).json({
          success: true,
          data: getProduct
        });
      } else {
        res
          .status(401)
          .json({ success: false, data: "this product doesnt exist" });
      }
    } catch (error) {
      ProductController.errorResponse(error, res);
    }
  }
  static async create(req, res) {
    try {
      const product = await Product.createProduct(req.body);
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      ProductController.errorResponse(error, res);
    }
  }

  static async update(req, res) {
    try {
      const update = (id, data) =>
        Ticket.update(data, { where: { id } }).then(() =>
          Ticket.findOne({ where: { id } })
        );
      const updateTicket = await update(req.params.id);
      if (updateTicket) {
        res.status(201).json({
          success: true,
          data: getTicket
        });
      } else {
        res
          .status(401)
          .json({ success: false, data: "product did not succesfully update" });
      }
    } catch (error) {
      ProductController.errorResponse(error, res);
    }
  }
}
export default ProductController;
