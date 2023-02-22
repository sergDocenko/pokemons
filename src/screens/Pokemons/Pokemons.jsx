import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import usePagination from "../../hooks/usePagination";
import { pokemonsUrl } from "../../services/pokemons";
import Header from "./components/Header/Header";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import usePokemons from "./hooks/usePokemons";
import "./pokemons.scss";

const Pokemons = () => {
  const {
    searchPokemon,
    pokemonFound,
    fetchPokemonsData,
    setPokemonInfo,
    sortPokemons,
    pokemons,
    loading,
  } = usePokemons();
  const { nextPage, previousPage, offset, limit } = usePagination();

  useEffect(() => {
    fetchPokemonsData(pokemonsUrl, { limit, offset });
  }, [limit, offset]);

  function showPokemonInfo(pokemon) {
    setPokemonInfo(pokemon);
  }

  function handleSort() {
    sortPokemons();
  }
  return (
    <div className="container">
      <Header search={searchPokemon} sort={handleSort} pokemonFound={pokemonFound} />
      {!loading ? (
        <>
          <div className="pokemons">
            <div className="cards">
              {pokemons.map((pokemon, index) => (
                <PokemonCard
                  pokemon={pokemon}
                  key={pokemon.id}
                  index={index}
                  onClick={showPokemonInfo}
                />
              ))}
            </div>
            <div className="info">
              <PokemonInfo />
            </div>
          </div>
          <footer>
            <Button onClick={previousPage}> Prev</Button>
            <Button onClick={nextPage}> Next </Button>
          </footer>
        </>
      ) : (
        <h1>...Loading</h1>
      )}
    </div>
  );
};

export default Pokemons;
