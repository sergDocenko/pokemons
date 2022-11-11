import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { About, Home, Pokemons } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemons" element={< Pokemons />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes >
    </BrowserRouter>
  );
}

export default App;
