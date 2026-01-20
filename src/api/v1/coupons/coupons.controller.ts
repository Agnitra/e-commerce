import { Request, Response } from 'express';

export class CouponsController {
    public applyCoupon(req: Request, res: Response) {
        res.status(200).json({ message: 'Coupon applied', discount: 10 });
    }

    public listCoupons(req: Request, res: Response) {
        res.status(200).json({ message: 'List of coupons', coupons: [] });
    }
}
