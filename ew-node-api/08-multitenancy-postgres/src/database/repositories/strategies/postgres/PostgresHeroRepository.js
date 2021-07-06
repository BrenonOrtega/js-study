import { DataTypes } from "sequelize";
import IRepository from "../../interfaces/IRepository.js";

export default class PostgresHeroRepository extends IRepository {
    #_driver;
    #_heroes;
    constructor(postgresDriver) {
        super();
        this.#_driver = postgresDriver;
        this.#_heroes = this.#defineModel(postgresDriver);
        this.#_heroes.sync();
    }

    async create(data) {
        await this.#_driver.create(data);
    }

    async read(id) {
        console.log("read on postgres");
    }

    async readAll() {
        this.#_heroes.findAll({raw: true});
    }
    
    async update(id, modelData) {
        console.log("updating one on postgres");
    }
    
    async delete(id) {
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
                type: DataTypes.INTEGER,
                required: true,
                primaryKey:true,
                autoIncrement:true,
            },
            name: {
                type: DataTypes.STRING(70),
                required: true,
            }, 
            power: {
                type: DataTypes.STRING(70),
                required: true,
            },
        }, {
            tableName: 'tbl_heroes',
            freezeTableName: false,
            timestamps: false,
        });
    }
}