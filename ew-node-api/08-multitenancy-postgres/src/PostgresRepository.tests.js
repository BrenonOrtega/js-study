import PostgresHeroRepository from "./database/repositories/strategies/Postgres/PostgresHeroRepository.js";
import PostgresDriver from "./database/repositories/strategies/postgres/postgresDriver.js";
import DatabaseContext from "./shared/DatabaseContext.js";
import Assert from 'assert';

const postgresRepository = new PostgresHeroRepository(PostgresDriver);
const context = new DatabaseContext(postgresRepository);

describe("PostgresSQL Repository implementation tests", () => {
    it('Hero creation test.', async () => {
         const hero = {
            id:3,
            name: 'super shock',
            power: 'static'
        };

        const actual = await context.create(hero);
        const expected = true;

        Assert.strictEqual(actual, expected); 
    });
})