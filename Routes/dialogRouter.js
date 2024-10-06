import { Router } from "express";
import ProductController from "../Controller/productController.js";

const router = Router();
const ctrl = new ProductController();

router.post("/products", ctrl.handleIntents);

export default router;
