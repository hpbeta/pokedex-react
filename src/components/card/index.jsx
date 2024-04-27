import { useContext } from "react";
import { ContainerPokemons, ContainerPokemonsInfo, Img, NamePokemon, Types } from "./styles";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-contexts";

export function CardPokemons({pokemon}) {
  const { theme } = useContext(ThemeContext)
  
  return (
       <ContainerPokemons >
        {
        
        pokemon && Array.isArray(pokemon) ? 
         pokemon.map((pokemon, index)=>(
          
          <Link key={index} to={`/details/${pokemon.name}`}>
                <ContainerPokemonsInfo key={index}>
              <NamePokemon theme={theme.color} >{pokemon.name}</NamePokemon>
              <Img src={
                pokemon?.sprites?.other.dream_world.front_default || 
                pokemon?.sprites?.other.home.front_default || 
                pokemon?.sprites?.other["official-artwork"].front_default || 
                (pokemon ? `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png` : null)  
            } alt={pokemon?.name}
            onError={(e) => {
                e.target.src = NoImage;
            }}/>
              <Types color={theme.color} >
                  {pokemon.types.map((types,index)=>(
                      <li key={index}>{types.type.name}</li>
                  ))}
              </Types>
            </ContainerPokemonsInfo>
          </Link>
          )): pokemon?.name && 
                <ContainerPokemonsInfo>
                  <NamePokemon theme={theme.color} >{pokemon.name}</NamePokemon>
                  <Img src={
                    pokemon?.sprites?.other.dream_world.front_default || 
                    pokemon?.sprites?.other.home.front_default || 
                    pokemon?.sprites?.other["official-artwork"].front_default || 
                    (pokemon ? `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png` : null)  
                } alt={pokemon?.name}
                onError={(e) => {
                    e.target.src = NoImage;
                }}/>
                  <Types color={theme.color} >
                      {pokemon.types.map((types,index)=>(
                          <li key={index}>{types.type.name}</li>
                      ))}
                  </Types>
            </ContainerPokemonsInfo>
            
          }
       
       </ContainerPokemons>
       
  );
}
