import IRepository from "../interfaces/IRepository.js";

export default class PostgresRepository extends IRepository {
    constructor() {
        super();
    }

    create(data) {
        console.log("created on postgres");
    }

    read(id) {
        console.log("read on postgres");
    }

    update(id, modelData) {
        console.log("updating one on postgres");
    }

    delete(id) {
        console.log("deleting one on postgres");
    }

    readAll() {
        console.log("reading all on postgres");
    }

}