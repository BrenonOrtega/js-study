import Commander from 'commander';
import Hero from './Hero.js';
import Path from 'path';
import { repository } from './Repository.js';

const main = async() => {
    const path = ".\\heros.json";
    repository.setFilePath(path);
    
    Commander
        .version('v1')

        .option('-n, --name [type]', "name of the hero")
        .option('-p, --power [type]', "name of the hero")
        .option('-id, --id [type]', "name of the hero")
        
        .option('-c, --create', "command to be applied")
        .option('-l, --list', "command to be applied")
        .option('-u, --update', "command to be applied")
        .option('-d, --delete', "command to be applied")

        .parse(process.argv);
    
    const options = Commander.opts();
    try {
        const hero = new Hero(options);
        if(options.create) {
            const result = await repository.save(hero);
            console.log("hero created?", result);

        } else if (options.list) {
            const heros = await repository.read(hero.id);
            console.log(heros);

        } else if (options.update) {
            const result = await repository.update(hero.id, hero);
            console.log("hero updated?", result);

        } else if (options.delete) {
            const result = await repository.delete(hero.id);
            console.log("hero deleted?", result);
            
        } else {
            console.error('command does not exist');
        }
        

    } catch (error) {
        console.error(error);
    }
};

main();