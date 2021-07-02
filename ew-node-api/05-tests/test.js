import assert from 'assert';
import mocks from './mocks.js';
import nock from 'nock';
import * as service from './service.js';
import { before } from 'mocha';


describe('star wars test suite', async () => {
    before(() => {
        const response = mocks.YODA_SWAPI_RESPONSE;

        nock('https://swapi.dev/api')
            .get('/people/?search=yoda')
            .reply(200, response);
    });

    it('Should retrieve a list with yoda in the correct format', async () =>{
        const searchedName = 'yoda';
        const actual = await service.getCharacter(searchedName);
        const expected = [
            service.Factory.createCharacter({name:'Yoda', mass:17, height: 66})
        ];
        assert.deepStrictEqual(actual, expected);
    });
})