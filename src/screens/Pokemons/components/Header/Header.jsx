import Search from "../Search/Search";
import Button from "../../../../components/Button/Button";

const Header = (props) => {
  const { search, sort, pokemonFound } = props;  
  return (
    <header>
      <ul>
        <li>
          <Search search={search} pokemonFound={pokemonFound} />
        </li>
        <li>
          <Button onClick={sort}>Sort by type</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
