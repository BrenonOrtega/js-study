import { getCharacters } from "./service";

async function main() {
    try { 
        const result = await getCharacters('a');
        
        console.time('for');
        for (let index=0; index < result.results.length; index++){
            console.log('index', index, 'character name', result.results[index].name);
        }
        const forTime = console.timeEnd('for');

        console.time('forin');
        for(const index in result.results) {
            console.log('index', index, 'character name', result.results[index].name);
        }
        const forinTime = console.timeEnd('forin');

        console.time('forof');
        for (const character of result.results) {
            //both statements yield the same results, since json is meant for javascript
            //and alongside javascript duck typing it allows you to directly access members
            //of a json result just calling it's name or like a dictionary;
            console.log('character name', character['name']);
            console.log('character name', character.name);
        }
        const forofTime = console.timeEnd('forof');

        console.log('for time', forTime, 'forin time', forinTime, 'forof time', forofTime);

    } catch(error) {
        console.log('error', error);
    }
}

main();