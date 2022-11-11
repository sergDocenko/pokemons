import React from "react";
import { useSelector } from "react-redux";
import "./pokemonInfo.scss";

const PokemonInfo = () => {
  const pokemon = useSelector((state) => state.pokemons.pokemonInfo);
  return pokemon ? (
    <div className="pokemon-info">
      <div className="title">
        <h1>{pokemon.name.toUpperCase()}</h1>
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      </div>
      <ul className="data">
        <li>
          Weight: <b>{pokemon.weight}</b>
        </li>
        <li>
          Height: <b>{pokemon.height}</b>
        </li>
        <li>
          Type: <b>{pokemon.types[0].type.name}</b>
        </li>
        <li>
          Stats: <b>{pokemon.stats.map((item) => item.stat.name).join(", ")}</b>
        </li>
        <li>
          Moves: <b>{pokemon.moves.map((item) => item.move.name).join(", ")}</b>
        </li>
      </ul>
    </div>
  ) : (
    <h1>Pokemon not found</h1>
  );
};

export default PokemonInfo;
