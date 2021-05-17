import { SET_LOADING, SET_POKEMONS, SET_COUNT } from '../types';

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: state.pokemons.concat(action.payload),
        loading: false,
      };
    case SET_COUNT: {
      return {
        ...state,
        pokemonCount: state.pokemons.length,
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
