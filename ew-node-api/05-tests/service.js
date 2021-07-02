import axios from 'axios';

const STAR_WARS_API_URL = 'https://swapi.dev/api';


/** @param { string } [name] the searched character's name. */
async function getCharacter(name) {

    const url = `${ STAR_WARS_API_URL }/people/?search=${ name }`;
    const result = await axios.get(url);
    console.log(result)
    return result.data.results.map(Factory.createCharacter);
}


class Factory {
   static createCharacter(object){
       const weight = Number(object.mass);
       return { 
           name: object.name,
           weight: weight,
           height: Number(object.height),
       };
   };
}

export { getCharacter, Factory };
