import { useContext, useEffect, useState } from "react";
import getPokemonName from "../../services/getPokemonName";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Abilities, Buttons, Container, ContainerAbility, ContainerInfo, Move, Moves } from "./styles";
import { TogglerButton } from "../../components/toggler-button";
import { Button } from "../../components/button";
import { CardPokemons } from "../../components/card";
import { ThemeContext } from "../../contexts/theme-contexts";


function Details() {
  const [abilities, setAbilities] = useState([]);
  const [move, setMove] = useState([]);
  const { name } = useParams();
  const [pokemon, setPokemon] = useState()
  const navigation = useNavigate()
  const { theme } = useContext(ThemeContext)

  function handleBack () {
    navigation("/")
  }

  useEffect(() => {
    const getAbility = async () => {
      const response = await getPokemonName(name);
      setPokemon(response)
      const abilitiesData = await Promise.all(
        response.abilities.map(async (ability) => {
          const abilityResponse = await axios.get(ability.ability.url);
          return abilityResponse.data;
        })
      );

      setAbilities(abilitiesData);

      const movesData = response?.moves.map((move, index)=>(
        move.move
      )).slice(0,18)
      setMove(movesData);
    };

    getAbility();
  }, []);

  return (
    
    <Container>
      
     <Buttons>
       <Button title="Return" onClick={handleBack} />
       <TogglerButton />
     </Buttons>
      <ContainerInfo>

        <CardPokemons pokemon={pokemon} />
       <ContainerAbility>
       <Abilities theme={theme.backgroundCard}>
          <div>
            <h2>Abilitie:</h2>
            {abilities &&
              abilities.map((ability, index) => (
                <div key={index}>
                  <li>{ability.name}: </li>
                  <p>{ability.effect_entries[0].effect}</p>
                </div>
              ))}
          </div>
        </Abilities  >
        {
          <Moves theme={theme.backgroundCard}>
            <h2 theme={theme.color}>Moves</h2>
            <Move>
              {move &&
                move.map((moves, index) => <li key={index}>{moves.name}</li>)}
            </Move>
          </Moves>
        }
       </ContainerAbility>
      </ContainerInfo>
      
    </Container>
  );
}
export default Details;
