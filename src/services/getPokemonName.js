import axios from "axios";

async function getPokemonName(name){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return(response.data);
}

export default getPokemonName