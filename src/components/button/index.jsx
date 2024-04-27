import { ContainerButton } from "./styles"


export const Button = ({title, disable="false", onClick}) =>{
    return(
        <ContainerButton  disable={disable} onClick={onClick}>{title}</ContainerButton>
    )
}