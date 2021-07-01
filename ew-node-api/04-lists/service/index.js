import axios from 'axios';

const charactersUrl = "https://swapi.dev/api/people";

async function getCharacters(characterName) {
    const url = `${charactersUrl}/?search=${characterName}`;
    const response = await axios.get(url); 
    return response.data;
}

export { getCharacters };