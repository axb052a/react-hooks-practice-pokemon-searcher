import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(setPokemons)
  }, [])

  const handleNewPoke = (shinyNewPoke) => {
    setPokemons(...pokemons, shinyNewPoke)
  }

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  const filteredPokemons = pokemons.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPoke={handleNewPoke}/>
      <br />
      <Search search={search} handleSearchInput={handleSearchInput} />
      <br />
      <PokemonCollection pokemons={filteredPokemons}  />
    </Container>
  );
}

export default PokemonPage;
