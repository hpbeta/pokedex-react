import styled from "styled-components";

export const ContainerButton = styled.button`
  padding: 8px 20px;
  margin-left: 5px;
  border-radius: 5px;
  border: none;
  background-color: #282832;
  color: #fff;
  cursor: ${({disabled})=> disabled ? "not-allowed" : "pointer" };
  margin-top: 8px;
  &:hover {
    opacity: 0.8;
  }
`;