import "./pokemonCard.scss";

const PokemonCard = (props) => {
  const { pokemon, index, onClick } = props;
  function handleClick() {
    onClick(pokemon);
  }

  return pokemon ? (
    <div className="pokemon-card" onClick={handleClick}>
      <ul className="title">
        <li>
          <span>{index + 1}.</span>
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
        </li>
        <li className="description">
          <span>
            <b>{pokemon.name}</b>
          </span>
          <span> Type: {pokemon.types[0].type.name}</span>
        </li>
      </ul>
    </div>
  ) : (
    <h1>Pokemon not found</h1>
  );
};

export default PokemonCard;
