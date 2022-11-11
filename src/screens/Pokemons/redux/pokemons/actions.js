const ACTIONS = {
  UPDATE_POKEMON_INFO: "UPDATE_POKEMON_INFO",
  SORT_POKEMONS_BY_TYPE: "SORT_POKEMONS_BY_TYPE",
};

const sortPokemonsByType = () => ({ type: ACTIONS.SORT_POKEMONS_BY_TYPE });
const setInfo = (payload) => ({ type: ACTIONS.UPDATE_POKEMON_INFO, payload });

export { ACTIONS, sortPokemonsByType, setInfo };
