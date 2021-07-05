import NotImplementedException from "../../shared/exceptions/NotImplementedException.js";

export default class IRepository {
    constructor() {
    }

    create(model) {
        throw new NotImplementedException();
    }

    read(id) {
        throw new NotImplementedException();
    }

    update(id, modelData) {
        throw new NotImplementedException();
    }

    delete(id) {
        throw new NotImplementedException();
    }
    
    readAll() {
        throw new NotImplementedException();
    }

    isConnected() {
        throw new NotImplementedException();
    }
}