import fsAsync from 'fs/promises';

class Repository {
    #filePath
    constructor(filePath) {
        if(!filePath) {
            throw error('shoud have path')
        } 
        this.#filePath = filePath;
    }

    async get(id) {
        const readFile = await fsAsync.readFile(this.#filePath, 'utf-8');
        const result = JSON.parse(readFile.toString());
        const filteredResult = result.filter(result => (id ? (result.id === id) : true));
        return filteredResult;
    }

    async save(data) {
        const query = await this.get();
        const id = data.id <= 2? data.id : (Math.random() * 10);

        const hero = {
            id,
            ...data,
        };
        const content = [
            ...query,
            hero,
        ]; 

        await fsAsync.writeFile(this.#filePath, JSON.stringify(content));
    }
}

const repository = new Repository('./heros.json');

export { repository };