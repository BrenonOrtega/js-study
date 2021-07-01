import * as services from "./service/index.js";

//Whenever adding a property to prototype you should define if it's a function
// I've tried to use an arrow function and it was not able to access the array
//scope, therefore 'this' was undefined.
Array.prototype.meuMap = function (callback) {
    console.log(this);
    const myMappedArray = []
    for(let i = 0; i < this.length; i++ ) {
        myMappedArray.push(callback(this[i], i));
    }
    return myMappedArray;
}

const main = async() => {
    try {
        const result = await services.getCharacters('a');
        const mapResult = result.results.map((character, i) => `[${i}]` + character.name )
        const myMapResult = result.results.meuMap((character, index) => `[${ index }]${ character.name }`);
        console.log(mapResult);
        console.log(myMapResult);

    } catch(error) {
        console.error('error', error);
    }

}

main();
