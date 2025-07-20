import express, { Request, Response } from 'express';
import cors from 'cors';
import envData from './app/config/envData';
import { globalError } from './app/middleware/globalError';
import { notFound } from './app/middleware/notFound';
import { router } from './app/routes';
import mongoose from 'mongoose';
// import http from 'http'
// import { Server } from 'socket.io';


const app = express();
// const httpServer = http.createServer(app)

app.use(cors());
app.use(express.json());
app.use('/api/v1', router);

// const io = new Server(httpServer);

// io.on('connection', (socket) => {
//     console.log('socekt connected with client')
// })


async function main() {
    await mongoose.connect('mongodb+srv://snapSale:snapSale1122@cluster0.oqkryfl.mongodb.net/table-practice?retryWrites=true&w=majority&appName=Cluster0');


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