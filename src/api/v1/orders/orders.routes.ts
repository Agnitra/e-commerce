import { Router } from 'express';
import { OrdersController } from './orders.controller';

const router = Router();
const ordersController = new OrdersController();

router.post('/', ordersController.createOrder.bind(ordersController));
router.get('/:id', ordersController.getOrder.bind(ordersController));

export default router;
