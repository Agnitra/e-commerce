import { Request, Response } from 'express';

export class ProductsController {
    public getAll(req: Request, res: Response) {
        res.status(200).json({ message: 'List of products', products: [] });
    }

    public getOne(req: Request, res: Response) {
        res.status(200).json({ message: 'Product details', productId: req.params.id });
    }
}
