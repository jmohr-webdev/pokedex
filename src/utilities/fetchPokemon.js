import axios from 'axios';

const pokeUrl = 'https://pokeapi.co/api/v2';

const fetchPokemon = async (start = 0, limit = 20) => {
  const res = await axios.get(
    `${pokeUrl}/pokemon?offset=${start}&limit=${limit}`
  );
  return res.data.results;
};

export default fetchPokemon;
