import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.join(process.cwd(), '.env')});

const envData = {
    port: process.env.PORT,
    nodeEnv : process.env.NODE_ENV,
}

export default envData;