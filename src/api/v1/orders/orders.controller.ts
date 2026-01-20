import { Request, Response } from 'express';

export class OrdersController {
    public createOrder(req: Request, res: Response) {
        res.status(201).json({ message: 'Order created', orderId: 123 });
    }

    public getOrder(req: Request, res: Response) {
        res.status(200).json({ message: 'Order details', orderId: req.params.id });
    }
}
