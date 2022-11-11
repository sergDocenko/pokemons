import React, { useRef } from "react";
import Button from "../../../../components/Button/Button"
import Input from "../../../../components/Input/Input";
import "./search.scss";

const Search = (props) => {
  const { search, pokemonFound } = props;
  const name = useRef("");

  function handleChange(event) {
    name.current = event.target.value;
  }

  function handleSearch() {
    if (name.current.length) search(name.current);
  }
  
  return (
    <div className="search">
      <Input placeholder="Enter name" onChange={handleChange} />
      <Button onClick={handleSearch}>Search</Button>
      {!pokemonFound && <h4> Pokemon not found </h4>}
    </div>
  );
};

export default Search;
