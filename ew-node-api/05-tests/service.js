import axios from 'axios';

const STAR_WARS_API_URL = 'https://swapi.dev/api';


/** @param { string } [name] the searched character's name. */
async function getCharacter(name) {

    const url = STAR_WARS_API_URL + '/people/?search=' + name;
    const result = await axios.get(url);

    return result.data.results.map(result => Factory.createCharacter(result));
}


class Factory {
   static createCharacter(object){
       return { 
           name: object.name,
           weight: object.mass,
           height: object.height
       };
   };
}


export { getCharacter, Factory };
