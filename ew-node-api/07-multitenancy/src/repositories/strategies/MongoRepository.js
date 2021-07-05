import IRepository from "../interfaces/IRepository.js";

export default class MongoRepository extends IRepository {
    constructor() {
        super();
    }

    create(data) {
        console.log("created on mongo");
    }

    read(id) {
        console.log("read on mongo");
    }

    update(id, modelData) {
        console.log("updating one on mongo");
    }

    delete(id) {
        console.log("deleting one on mongo");
    }

    readAll() {
        console.log("reading all on mongo");
    }
}