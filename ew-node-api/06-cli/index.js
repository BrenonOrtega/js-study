import Commander from 'commander';
import Hero from './Hero.js';
import Path from 'path';
import { repository } from './Repository.js';

const main = async() => {
    const path = ".\\06-cli\\heros.json";
    repository.setFilePath(path);
    
    Commander
        .version('v1')

        .option('-n, --name [type]', "name of the hero")
        .option('-p, --power [type]', "name of the hero")
        .option('-id, --id [type]', "name of the hero")
        
        .option('-c, --command [type]', "command to be applied")
        .parse(process.argv);
    
    const options = Commander.opts();

    try {
        const hero = new Hero(options);
        const commandHandler = GetCommand(options);
        await commandHandler(hero);

    } catch (error) {
        console.error(error);
    }

    function GetCommand({ command }) {
        let commandHandler;
        switch (command) {
            case ('save' ):
                commandHandler = (data) => repository.save(data);
                break;
            case ('read'):
                commandHandler = (data) => repository.read(data);
                break;
            case ('delete'): 
                commandHandler = (data => repository.delete(data);
                break;
            case ('update'):
                break;
            default:
                commandHandler = () => console.info("Command does not exist");
        }
        return commandHandler;
    }
};

main();