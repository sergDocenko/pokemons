import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import "./search.scss";

const Search = () => {
  
  function handleChange(event) {
    
    console.log(event.target.value);
  }
  return (
    <div className="search">
      <Input placeholder="Поиск" onChange={handleChange}  />
      <Button>Поиск</Button>
    </div>
  );
};

export default Search;
