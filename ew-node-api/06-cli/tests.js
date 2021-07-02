import { repository } from './Repository.js';
import assert from 'assert';
import fsAsync from 'fs/promises';

const DEFAULT_DATABASE_HERO = {
    id:1,
    name:'flash',
    power:'speed'
}

describe('Repositories tests', () => {
    before(async() => {
        await fsAsync.save(DEFAULT_DATABASE_HERO);
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
        const 
    }); 
});