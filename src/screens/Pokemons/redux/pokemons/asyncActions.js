import { pokemonsService } from "../../../../services";

const { getPokemonByName } = pokemonsService;
const ASYNC_ACTIONS = {
  FETCH_POKEMONS_REQUEST: "FETCH_POKEMONS_REQUEST",
  FETCH_POKEMONS_SUCCESS: "FETCH_POKEMONS_SUCCESS",
  FETCH_POKEMONS_FAILURE: "FETCH_POKEMONS_FAILURE",
  FETCH_SEARCH_POKEMON_FAILURE: "FETCH_SEARCH_POKEMON_FAILURE",
};

const fetchPokemonsRequest = () => ({
  type: ASYNC_ACTIONS.FETCH_POKEMONS_REQUEST,
});
const fetchPokemonsSuccess = (payload) => ({
  type: ASYNC_ACTIONS.FETCH_POKEMONS_SUCCESS,
  payload,
});
const fetchPokemonsFailure = () => ({
  type: ASYNC_ACTIONS.FETCH_POKEMONS_FAILURE,
});

const fetchSearchPokemonFailure = () => ({
  type: ASYNC_ACTIONS.FETCH_SEARCH_POKEMON_FAILURE
});

function fetchPokemonsInfo(url, params) {
  return async function (dispatch) {
    try {
      dispatch(fetchPokemonsRequest());
      const pokemonsInfo = await pokemonsService.getPokemonsInfo(url, params);
      dispatch(fetchPokemonsSuccess(pokemonsInfo));
    } catch (error) {
      dispatch(fetchPokemonsFailure);
      throw new Error(error);
    }
  };
}

function fetchSearchPokemon(name) {
  return async function (dispatch) {
    try {
      const response = await getPokemonByName(name.trim());
      dispatch(fetchPokemonsSuccess(Array(response)));
    } catch (error) {
      dispatch(fetchSearchPokemonFailure());
      throw new Error(error);
    }
  }
}

export { ASYNC_ACTIONS, fetchPokemonsInfo, fetchSearchPokemon };
