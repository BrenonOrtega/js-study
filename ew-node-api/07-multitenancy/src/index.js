import DatabaseContext from "./shared/DatabaseContext.js";
import MongoRepository from "./repositories/strategies/MongoRepository.js";
import PostgresRepository from "./repositories/strategies/PostgresRepository.js";

const main = async () => {
    const mongoRepository = new MongoRepository();
    const mongoContext = new DatabaseContext(mongoRepository);
    
    const postgresRepository = new PostgresRepository();
    const postgresContext = new DatabaseContext(postgresRepository);

    postgresContext.create();
    postgresContext.update();

    mongoContext.create();
    mongoContext.read();
}

main();