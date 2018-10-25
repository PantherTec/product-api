import express from "express";
import { ProductController } from "../controller";
const ProductRouter = express.Router({
  mergeParams: true
});

ProductRouter.route("/")
  .get(ProductController.index)
  .post(ProductController.create);

ProductRouter.route("/:id")
  .get(ProductController.show)
  .put(ProductController.update);

export default ProductRouter;
