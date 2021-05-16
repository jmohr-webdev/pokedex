import axios from 'axios';

const pokeUrl = 'https://pokeapi.co/api/v2';

// const fetchPokemon = async (start = 0, limit = 20) => {
//   const res = await axios.get(
//     `${pokeUrl}/pokemon?offset=${start}&limit=${limit}`
//   );
//   return res.data.results;
// };

const fetchPokemon = async (start = 1, limit = 20) => {
  let pokemons = [];
  for (let i = start; i < start + limit; i++) {
    const pokemon = await axios.get(`${pokeUrl}/pokemon/${i}/`);
    pokemons.push(pokemon.data);
  }
  return pokemons;
};

export default fetchPokemon;
