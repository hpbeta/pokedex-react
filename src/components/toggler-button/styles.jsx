import { HiOutlineLightBulb } from "react-icons/hi";
import { styled } from "styled-components"

export const Icon = styled(HiOutlineLightBulb)`
  font-size: 28px;
  margin-left: 30px;
  cursor: pointer;
  color: ${props => props.theme.color};

  @media(max-width: 414px){
    margin-right: 30px;
  }
`;