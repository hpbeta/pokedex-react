import { HiOutlineLightBulb } from "react-icons/hi";
import { styled } from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  @media(max-width: 414px){
   display: flex;
   flex-direction: column;
   gap: 5px;
  }

`

export const Input = styled.input`
  margin-top: 8px;
  border-radius: 5px;
  border: none;
  border: 1px solid #808080;
  padding: 8px;
  outline: none;
  width: 320px;
   @media(max-width: 414px){
    width: 250px;
  }
`;

export const Button = styled.button`
  padding: 8px 20px;
  margin-left: 5px;
  border-radius: 5px;
  border: none;
  background-color: #282832;
  color: #fff;
  cursor: pointer;
  margin-top: 8px;
  &:hover {
    opacity: 0.8;
  }

`;





