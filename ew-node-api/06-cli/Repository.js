import fsAsync from 'fs/promises';

class Repository {
    #filePath
    constructor(filePath) {
        this.#filePath = filePath;
    }
    
    setFilePath (filePath) {
        this.#filePath = filePath;
    }

    async #saveContent(content) {
        try {
            await fsAsync.writeFile(this.filePath, JSON.stringify(content));
            return true;

        } catch (error) {
            console.error(error);
            return false;
        }
    }
    
    async get(id) {
        const readFile = await fsAsync.readFile(this.filePath, 'utf-8');
        const result = JSON.parse(readFile.toString());
        const filteredResult = result.filter(result => (id ? (result.id === id) : true));
        return filteredResult;
    }

    get filePath() {
        if (!this.#filePath){
            throw ReferenceError("file path is not set");
        }
        return this.#filePath;
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
        return await this.#saveContent(content);
    }

    async delete(id) {
        if(id == false) { 
            return await this.#saveContent([]);
        }

        const content = await this.get();
        const index = content.findIndex(entry => entry.id === id);

        if(index !== -1) {
            content.splice(index, 1);
            return this.#saveContent(content);
        }

        throw Error('this id does not exist');
    }

    async update(data) {
        if(!data) {
            throw ReferenceError("data reference is not set to an object");
        }
        const content = []//await this.get();
        const index = content.findIndex(entry => entry.id === data.id);

        if (index !== -1) {
            content[index] = {...data};
        }
        return await this.#saveContent(content); 
    }
}

const repository = new Repository();

export { repository };