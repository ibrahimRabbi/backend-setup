import express, { Request, Response } from 'express';
import cors from 'cors';
import envData from './app/config/envData';
import { globalError } from './app/middleware/globalError';
import { notFound } from './app/middleware/notFound';
import { router } from './app/routes';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);


async function main() {
    await mongoose.connect('mongodb://localhost:27017/practice');

    app.listen(envData.port, () => {
        console.log(`Server is running on port ${envData.port} in ${envData.nodeEnv} mode`);
    })
}
  
main().catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
});




app.use(globalError);
app.use(notFound);