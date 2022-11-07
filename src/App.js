
import './App.scss';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Search from './components/Search/Search';

const pokemons=[
  {
    name:"charmander",
    weight:85,
    height:6,
    movies:[],
    type :"fire",
    stats:[],
    id:4,
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
  },
  {
    name:"charmeleon",
    id:5,
    weight:190,
    height:11,
    movies:[],
    type :"poison",
    stats:[],
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
  },
  {
    name:"charmander",
    weight:905,
    id:6,
    type :"blug",
    height:17,
    movies:[],
    stats:[],
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
  }
]


function App() {
  
  return (
    <div className="App">

      <Search/>
      {pokemons.map((pokemon, index)=>(
        
      <PokemonCard pokemon={pokemon} key={pokemon.id}/>)
      )
      }

    </div>
  );
}

export default App;
