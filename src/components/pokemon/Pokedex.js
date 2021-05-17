import React, { Fragment, useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import Pokecard from './Pokecard';
import Spinner from '../layout/Spinner';

const Pokedex = () => {
  const pokemonContext = useContext(PokemonContext);
  const { pokemons, loading, fetchPokemon } = pokemonContext;

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <Pokecard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </Fragment>
  );
};

export default Pokedex;
