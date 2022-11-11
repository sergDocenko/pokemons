import { combineReducers } from "redux";
import pokemonsReducer from "../../screens/Pokemons/redux/pokemons/pokemonsReducer";
import paginationReducer from "../pagination/paginationReducer";

export default combineReducers({
  pokemons: pokemonsReducer,
  pagination: paginationReducer,
});
