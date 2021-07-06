import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';


const PostgresDriver = (function() {
    dotenv.config();

    var driver = new Sequelize(
        process.env.POSTGRES_DATABASE,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD, 
        {
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POTGRES_PORT),
            dialect: 'postgres',
            quoteIdentifiers:false,
        });

    return driver;
})();

export default PostgresDriver;