import { Request, Response } from 'express';

export class AuthController {
    public login(req: Request, res: Response) {
        res.status(200).json({ message: 'Login successful' });
    }

    public register(req: Request, res: Response) {
        res.status(201).json({ message: 'User registered' });
    }
}
