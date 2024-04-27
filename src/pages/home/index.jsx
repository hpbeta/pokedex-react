import { useEffect, useState } from "react";
import { Container } from "./styles";
import getPokemonName from "../../services/getPokemonName";
import axios from "axios";
import { CardPokemons } from "../../components/card";
import { Search } from "../../components/search";
import { Button } from "../../components/button"

export function Home() {
    const [input, setInput] = useState("")
    const [pokemonData, setPokemonData] = useState([])
    const [count, setCount] = useState(10)
    const [disabled, setDisabled] = useState(false)

    useEffect(()=>{
      async function fetchData(){
         const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000")
         const listName = response.data.results

      if (input !== '') {
        const nameListFiltered = listName.filter((pokemons) =>
          pokemons.name.toLowerCase().includes(input.toLocaleLowerCase()),
        )

        const filteredPokemons = await Promise.all(
          nameListFiltered.slice(0, 10).map(async (data) => {
            return await getPokemonName(data.name)
          }),
        )
        setDisabled(true)
        setPokemonData(filteredPokemons)
      } else {
        const pokemonList = await Promise.all(
          listName.slice(0, count).map(async (data) => {
            return await getPokemonName(data.name)
          }),
        )
        setDisabled(false)
        setPokemonData(pokemonList)
      }
      }
      fetchData()
    },[input,count])

    function handleChange(e) {
      setInput(e.target.value)
    }

  return (
    <Container>
      <Search onChange = {handleChange} value = {input} />
      <CardPokemons pokemon = {pokemonData}  />
       <Button title="View More"  disabled={disabled} onClick={()=> setCount (count + 10)} />
    </Container>
  );
}
