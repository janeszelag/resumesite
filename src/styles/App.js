import styled from "styled-components";

//styles for App.js

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv1 = styled.div`
  display: flex;
  height: 30vh;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #faf9f8;

  border-bottom: solid;
  border-bottom-style: double;
  border-bottom-color: #000000;
  border-width: 8px;
`;

export const SideTitle = styled.img`
  width: 200px;
  height: 180px;
  margin-left: 1em;
  margin-right: 1em;
`;

export const Name = styled.h1`
  color: #000000;
  font-size: 75px;

  font-weight: 400;
  margin: 0em;
  padding: 0em;
  font-family: "Cantata One", serif;

  @media (max-width: 768px) {
    font-size: 4em;
  }
`;

export const StyledDiv2 = styled.div`
  width: 100%;
  height: 70vh;


  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 
`;

export const LinksDiv = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  margin-top: 2em;
  background-color: #c7bfb5;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv3 = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

`;

// styles for Menu.js

export const OuterDiv = styled.div`
width 70%;
@media (max-width: 768px) {
  width 90%;
}
`;
