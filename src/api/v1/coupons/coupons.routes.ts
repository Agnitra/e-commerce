import { Router } from 'express';
import { CouponsController } from './coupons.controller';

const router = Router();
const couponsController = new CouponsController();

router.get('/', couponsController.listCoupons.bind(couponsController));
router.post('/apply', couponsController.applyCoupon.bind(couponsController));

export default router;
