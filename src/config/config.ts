import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'superuser';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'supersecretpassword1';
const MONGO_CLUSTER= process.env.MONGO_CLUSTER || "cluster0.msb0q";
const MONGO_DB = process.env.MONGO_DB|| "myFirstDatabase";

const MONGO = {
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    url:`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
};

const config = {
    mongo: MONGO,
};

export default config;