import Sequelize from 'sequelize';
import Dotenv from 'dotenv';

Dotenv.config();

console.log(process.env.POSTGRES_DATABASE, ' ',
    process.env.POSTGRES_USER, ' ',
    process.env.POSTGRES_PASSWORD, ' ');

const driver = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD, 
    {
        host:process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        quoteIdentifier:false,
        operatorAliases:false,
    }
);

const main = async () => {
    const heroes = driver.define('heroes', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey:true,
            autoIncrement:true,
        },
        name: {
            type: Sequelize.STRING(70),
            required: true,
        }, 
        power: {
            type: Sequelize.STRING(70),
            required: true,
        },
    }, {
        tableName: 'tbl_heroes',
        freezeTableName: false,
        timestamps: false,
    });

    try {
        await heroes.sync();
    
        const result = await  heroes.findAll({ raw:true });
        console.log('heroes', result);
        
    } catch (error) {
        console.error(error);
    }
};

main();