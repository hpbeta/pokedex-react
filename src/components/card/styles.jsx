import { styled } from "styled-components";



export const ContainerPokemons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 1200px;
  justify-content: center;
  margin: 20px 10px;
`;
export const ContainerPokemonsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #808080;
  padding: 20px;
  width: 220px;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const NamePokemon = styled.h1`
  color: ${props => props.theme}
`;

export const Img = styled.img`
  width: 150px;
  height: 190px;
`;

export const Types = styled.ul`
  display: flex;
  gap: 10px;
  color: ${props => props.color};

  li {
    background-color: #567ebb;
    padding: 5px 10px;
    border-radius: 10px;
    margin-top: 10px;
  }
`;
