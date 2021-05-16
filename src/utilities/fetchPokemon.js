import axios from 'axios';

const pokeUrl = 'https://pokeapi.co/api/v2';

const fetchPokemon = async (startIndex = 1, limit = 20) => {
  let pokemons = [];
  for (let i = startIndex; i < startIndex + limit; i++) {
    const pokemon = await axios.get(`${pokeUrl}/pokemon/${i}/`);
    pokemons.push(pokemon.data);
  }
  return pokemons;
};

export default fetchPokemon;
