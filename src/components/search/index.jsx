
import { TogglerButton } from "../toggler-button";
import { ContainerSearch, Input } from "./styles";
import { Button} from "../button/index"

export function  Search({onChange, value}){
      
 return(
  <ContainerSearch>
    <Input onChange={onChange} value={value} type="text" placeholder="Digite seu pokemon" />
    <Button title="pesquisar" />
    <TogglerButton />
  </ContainerSearch>
 )
}

