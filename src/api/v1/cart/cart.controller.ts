import { Request, Response } from 'express';

export class CartController {
    public getCart(req: Request, res: Response) {
        res.status(200).json({ message: 'Cart details', items: [] });
    }

    public addToCart(req: Request, res: Response) {
        res.status(200).json({ message: 'Item added to cart' });
    }
}
