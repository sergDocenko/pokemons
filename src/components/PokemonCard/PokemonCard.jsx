import { useState } from "react";
import "./pokemon-card.scss";
import Button from "../Button/Button";

const PokemonCard = (props) => {
  const { pokemon } = props;
  const [minimal, setMinimal] = useState(true);

  return (
    <div className="pokemon-card">
      {!minimal ? (
        <div className="pokemon-card_big">
          <img src={pokemon.img} />
          <div className="pokemon-card_big__data">
            <span>Name : {pokemon.name}</span>
            <span>Weight: {pokemon.weight}</span>
            <span>Height: {pokemon.height}</span>
            <span>Type: {pokemon.type}</span>

            <Button onClick={() => setMinimal(true)}>Свернуть</Button>
          </div>
        </div>
      ) : (
        <div className="pokemon-card_small" onClick={() => setMinimal(false)}>
          <img src={pokemon.img} />
          <span>{pokemon.name}</span>
          <span> Тип: {pokemon.type}</span>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
