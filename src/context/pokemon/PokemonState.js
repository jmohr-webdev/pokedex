import React, { useReducer } from 'react';
import axios from 'axios';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import { SET_LOADING, SET_POKEMONS, SET_COUNT } from '../types';

const PokemonState = (props) => {
  const initialState = {
    pokemons: [],
    pokemonCount: 0,
    limit: 20,
    loading: false,
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  const { pokemonCount, limit } = state;
  const pokeUrl = 'https://pokeapi.co/api/v2';

  const fetchPokemon = async () => {
    setLoading();

    let fetchedPokemons = [];
    let startIndex = pokemonCount + 1;

    for (let i = startIndex; i < startIndex + limit; i++) {
      const pokemon = await axios.get(`${pokeUrl}/pokemon/${i}/`);
      fetchedPokemons.push(pokemon.data);
    }

    dispatch({ type: SET_POKEMONS, payload: fetchedPokemons });
    dispatch({ type: SET_COUNT });
  };

  const setLoading = async () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        pokemonCount: state.pokemonCount,
        limit: state.limit,
        loading: state.loading,
        fetchPokemon,
        setLoading,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
