import { ACTIONS } from "./actions";
import { ASYNC_ACTIONS } from "./asyncActions";
import { sortByType } from "../../utils";

const initialState = { loading: true, pokemons: [], pokemonInfo: null, pokemonFound: true };

function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_POKEMON_INFO:
      return { ...state, pokemonInfo: action.payload };
    case ACTIONS.SORT_POKEMONS_BY_TYPE:
      return { ...state, pokemons: sortPokemonsByType(state.pokemons) };
    case ASYNC_ACTIONS.FETCH_POKEMONS_REQUEST:
      return { ...state, loading: true };
    case ASYNC_ACTIONS.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemonFound: true ,
        pokemons: action.payload,
        loading: false,
        pokemonInfo: action.payload[0],
      };
    case ASYNC_ACTIONS.FETCH_POKEMONS_FAILURE:
      return { ...state, pokemons: [], loading: false };
    case ASYNC_ACTIONS.FETCH_SEARCH_POKEMON_FAILURE:
      return { ...state, pokemonFound: false }

    default:
      return state;
  }
}

export default pokemonsReducer;

function sortPokemonsByType(pokemons) {
  return [...pokemons.sort(sortByType)];
}
