import fsAsync from 'fs/promises';
import Path from 'path';
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
    
    async read(id) {
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
        const query = await this.read();
        const id = data.id <= 2 ? data.id : Date.now();

        const hero = {
            ...data,
            id,
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

        const content = await this.read();
        const index = content.findIndex(entry => entry.id === id);

        if(index !== -1) {
            content.splice(index, 1);
            return this.#saveContent(content);
        }

        throw Error('this id does not exist');
    }

    async update(id, modifications) {

        if(!id) {
            throw ReferenceError("id is missing");
        }
         
        const content = await this.read();
        const index = content.findIndex(entry => entry.id === id);

        if (index !== -1) {
            content[index] = { ...content[index], ...modifications};
        }
        return await this.#saveContent(content); 
    }
}

const repository = new Repository();

export { repository };