import { Router } from 'express';
import { CartController } from './cart.controller';

const router = Router();
const cartController = new CartController();

router.get('/', cartController.getCart.bind(cartController));
router.post('/', cartController.addToCart.bind(cartController));

export default router;
