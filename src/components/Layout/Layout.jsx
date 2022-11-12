import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./layout.scss"

const Layout = () => {
  return (
    <div>
      <header className="layout">
        <menu>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"pokemons"}>POKEMONS</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>ABOUT ME</NavLink>
          </li>
        </menu>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
