import Sequelize from 'sequelize';
import dotenv from 'dotenv';


const PostgresDriver = (function() {
    dotenv.config();
    return new Sequelize(
        process.env.POSTGRES_DATABASE,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD, 
        {
            host: process.env.POSTGRES_HOST,
            port: process.env.POTGRES_PORT,
            dialect: 'postgres',
            quoteIdentifier:false,
            operatorAliases:false,
        });
})();

export default PostgresDriver;