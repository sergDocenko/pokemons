import httpService from "../http";

const baseUrl = "https://pokeapi.co/api/v2";
const pokemonsUrl = `${baseUrl}/pokemon`;

async function getPokemons(url = pokemonsUrl, params) {
  const response = await httpService.get(url, params);
  if (response.status === 200) return response.data.results
  else throw new Error(`Error status ${response.status}`);
}

async function getPokemonsInfo(url = pokemonsUrl, params) {
  try {
    const pokemons = await getPokemons(url, params);
    const responses = await Promise.all(
      pokemons.map((pokemon) => httpService.get(pokemon.url))
    );
    return responses.map((response) => response.data);
  } catch (error) {
    throw new Error(error)
  }
}

async function getPokemonByName(name) {
  try {
    const response = await httpService.get(`${pokemonsUrl}/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(`${error.status}`);
  }
}

export { pokemonsUrl, getPokemons, getPokemonsInfo, getPokemonByName };
