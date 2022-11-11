import { useDispatch, useSelector } from "react-redux";
import { setInfo, sortPokemonsByType } from "../redux/pokemons/actions";
import { fetchPokemonsInfo, fetchSearchPokemon } from "../redux/pokemons/asyncActions";

function usePokemons() {
  const { pokemons, loading, pokemonFound } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  function fetchPokemonsData(url, params) {
    dispatch(fetchPokemonsInfo(url, params));
  }

  function setPokemonInfo(pokemon) {
    dispatch(setInfo(pokemon));
  }
  
  function searchPokemon(name) {
    dispatch(fetchSearchPokemon(name));
  }

  function sortPokemons() {
    dispatch(sortPokemonsByType());
  } 

  return {
    setPokemonInfo,
    sortPokemons,
    searchPokemon,
    fetchPokemonsData,
    pokemons,
    loading,
    pokemonFound,
  };
}
export default usePokemons;
