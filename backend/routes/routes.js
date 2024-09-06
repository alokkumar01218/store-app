import express from 'express';
const router = express.Router();
import { deletProducts, getAllProduct, postProduct, updateProducts } from '../controller/productController.js';

router.get("/", getAllProduct);
router.post("/", postProduct);
router.delete("/:id", deletProducts);
router.put("/:id", updateProducts);




export default router;