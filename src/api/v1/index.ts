import { Router } from 'express';
import authRoutes from './auth/auth.routes';
import productRoutes from './products/products.routes';
import cartRoutes from './cart/cart.routes';
import orderRoutes from './orders/orders.routes';
import couponRoutes from './coupons/coupons.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);
router.use('/orders', orderRoutes);
router.use('/coupons', couponRoutes);

export default router;
