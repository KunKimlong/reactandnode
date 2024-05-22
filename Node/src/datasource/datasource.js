
import { DataSource } from 'typeorm';
import Staff from "../model/Staff.entity.js"
import 'dotenv/config';

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE,
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    username: process.env.DB_USER,//username in database
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
        Staff
    ],
    migrations: [],
    subscribers: [],
});

export default AppDataSource;