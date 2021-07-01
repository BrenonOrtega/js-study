import { getCharacters } from "./service/index.js";

Array.prototype.myFilter = function(callback) {
    var filteredArray = [];

    for(let index in this) {
        const item = this[index];
        if(callback(item, index, this)) {
            filteredArray.push(item);
        }
    }

    return filteredArray;
}


const main = async () => {
    try {
        const { results } = await getCharacters(`a`);
        const larsResults = results.filter(result => result.name.toLowerCase().includes('lars'));
        const mylarsResults = results.myFilter(result => !(result.name.toLowerCase().includes('lars')));
        console.log(larsResults);
        console.log(mylarsResults);
    } catch (error) {
        console.log('error', error)
    }
}

main();