import pokemonsImg from "../../images/pokemons.jpg";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Hy! This site about pokemons!!!</h1>
      <img src={pokemonsImg} alt="pokemons" />
    </div>
  );
};

export default Home;
