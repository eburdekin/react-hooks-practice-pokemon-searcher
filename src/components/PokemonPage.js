import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = 'http://localhost:3001/pokemon'

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [filter, setFilter] = useState()

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(setPokemon)
  }, [])

  function handleFilter(searchTerm) {
    setFilter(searchTerm)
  }

  function addPokemon(newPokemon) {
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(
    setPokemon([...pokemon, newPokemon])
    )
  }

  const filteredPokemon = pokemon.filter(monster => filter ? monster.name.toLowerCase().includes(filter.toLowerCase()) : monster)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search handleFilter={handleFilter} />
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
