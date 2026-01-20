import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { prefix } from '../utils/prefix';
import routes from '../api/v1';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.configure();
    }

    private configure(): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(prefix, routes);
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }

    public listen(): void {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    }
}

export default App;
