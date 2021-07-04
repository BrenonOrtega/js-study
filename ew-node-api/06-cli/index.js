import Commander from 'commander';
import { repository } from './Repository.js';
import Hero from './Hero.js';

const main = async() => {
    repository.setFilePath('.\\heros.json');
    
    Commander
        .version('v1')

        .option('-n, --name [type]', "name of the hero")
        .option('-p, --power [type]', "name of the hero")
        .option('-id, --id [type]', "name of the hero")

        .option('-c, --command [type]', "command to be applied")
        .option('-l, --list')
    
        .parse(process.argv);
    
    const options = Commander.opts();

    try {
        const hero = new Hero(options);
        const command = GetCommand(options);
        const commandname = options.command;
        console.log(commandname);
        if(!(await command(hero)))
            throw Error('erro ao enviar commando');

    } catch (error) {
        console.error(error);
    }
    function GetCommand({ command }) {
        let commandHandler;
        switch (command) {
            case ('save' ):
                commandHandler = repository.save;
                break;
        }
        return commandHandler;
    }
};

main();