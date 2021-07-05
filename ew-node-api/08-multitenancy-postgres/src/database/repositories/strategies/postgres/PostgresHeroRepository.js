import { Sequelize } from "sequelize/types";
import IRepository from "../../interfaces/IRepository.js";

export default class PostgresHeroRepository extends IRepository {
    constructor(postgresDriver) {
        super();
        this.#_driver = postgresDriver;
        this.#_heroes = await this.#defineModel(postgresDriver);
    }

    create(data) {
        console.log("created on postgres");
    }

    read(id) {
        console.log("read on postgres");
    }

    readAll() {
        this.#_heroes.findAll({raw: true});
    }
    
    update(id, modelData) {
        console.log("updating one on postgres");
    }
    
    delete(id) {
        console.log("deleting one on postgres");
    }
    
    async isConnected() { 
        try {
            await this.#_driver.authenticate();
            return 
        } catch(error) {
            console.log(error);            
        }
    }
    
    #defineModel(driver) {
        return driver.define('heroes', {
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
    }
}