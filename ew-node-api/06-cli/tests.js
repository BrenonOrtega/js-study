import { repository } from './Repository.js';
import assert from 'assert';
import fsAsync from 'fs/promises';

const HEROS_PATH = './heros.json';

const DEFAULT_DATABASE_HERO = {
    id:1,
    name:'flash',
    power:'speed'
}

const DEFAULT_UPDATE_HERO = {
    id:1,
    name:'batima',
    power:'cash'
}

describe('Repositories tests', () => {
    before(async() => {
        assert.throws(() => repository.filePath, ReferenceError);

        repository.setFilePath(HEROS_PATH);
        await fsAsync.writeFile(HEROS_PATH, JSON.stringify([DEFAULT_DATABASE_HERO]));
    });

    it('reading the first register of a hero', async () => {

        const [actual] = await repository.get();
        const expected = DEFAULT_DATABASE_HERO;
        
        assert.deepStrictEqual(actual, expected);
    });

    it('creating a hero', async () => {
        const expected = {
            ...DEFAULT_DATABASE_HERO,
            id:2
        };
        await repository.save(expected);
        const [actual] = await repository.get(expected.id);

        assert.deepStrictEqual(actual, expected);
    }); 

    it('Deleting a hero', async () => {
        const expected = undefined;
        const heroToDelete = DEFAULT_DATABASE_HERO;

        await repository.delete(heroToDelete.id);
        const [actual] = await repository.get(heroToDelete.id);

        assert.deepStrictEqual(actual, expected);
    });

    it('updating a hero', async () => {
        const name = 'bruce wayne';

        const expected = {
            ...DEFAULT_UPDATE_HERO,
            name,
        };
        await repository.save(DEFAULT_UPDATE_HERO);
        await repository.update(expected.id, expected);
        const [actual] = await repository.get(expected.id);

        assert.deepStrictEqual(actual, expected);        
    });
});