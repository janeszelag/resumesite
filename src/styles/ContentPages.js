import styled from "styled-components";




export const MainDiv = styled.div`
width: 100%;
height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #faf9f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
  
`;


export const Text = styled.p`
  color: #353336;
  font-size: 2em;
  text-align: center;
  font-weight: 300;
  font-family: "Cantata One", serif;
  margin: 1em;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;



