import IRepository from "../database/repositories/interfaces/IRepository.js"

export default class DatabaseContext extends IRepository{
    #_repository;
    constructor(repository) {
        super();
        this.#_repository = repository;
    }

    async create(model) {
        await this.#_repository.create(model);
    }

    async read(id) {
        return await this.#_repository.read(id);
    }

    async update(id, modelData) {
        return await this.#_repository.update(id, modelData);
    }

    async delete(id) {
        return await this.#_repository.delete(id);
    }
    
    async readAll() {
        throw new NotImplementedException();
    }

    isConnected(){
        return this.#_repository.isConnected();
    }

}