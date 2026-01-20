import { Router } from 'express';
import { ProductsController } from './products.controller';

const router = Router();
const productsController = new ProductsController();

router.get('/', productsController.getAll.bind(productsController));
router.get('/:id', productsController.getOne.bind(productsController));

export default router;
