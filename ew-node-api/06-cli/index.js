import Commander from 'commander';

const main = async() => {
    Commander
        .Option('-s', '--save', "saves a hero in the database")
        .version('v1');

};