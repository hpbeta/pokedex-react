import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media (max-width: 1024px) {
    margin: 10px 0;
  }

  @media (max-width: 688px) {
   margin: 90px 7px;
  }

  @media (max-width: 414px) {
   margin: 150px 7px;
  }

  @media (max-width: 395px) {
   margin: 200px 0;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 10px 0;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerAbility = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-right: 190px;
  @media (max-width: 1024px) {
    margin-top: -30px;
  }

  @media (max-width: 688px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 414px) {
    width: 350px;
  }
`;

export const Abilities = styled.ul`
  width: 400px;
  height: 350px;
  background-color: ${(props) => props.theme};
  color: ${(props) => props.theme};
  border-radius: 10px;
  padding: 20px;
  color: #fff;

  li {
    margin: 10px 0;
    font-weight: bold;
    text-transform: capitalize;
  }
  h2 {
    margin-top: 30px;
  }
  p {
    margin-bottom: 20px;
  }
`;
export const Moves = styled.ul`
  background-color: ${(props) => props.theme};
  box-shadow: 0px 0px 41px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 400px;
  height: 350px;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  li {
    background-color: #66666e;
    border-radius: 10px;
    padding: 7px 16px;
  }

  @media (max-width: 414px) {
    width: 350px;
  }
`;

export const Move = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 350px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  background-color: #9d9f89;
  padding: 20px 40px;
  align-items: center;
  border-radius: 5px;

  @media (max-width: 414px) {
    width: 380px;
  }

  @media (max-width: 395px) {
   width: 350px;
  }
`;
