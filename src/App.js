import React from "react";
import "./App.css";
import Menu from "./Menu.js";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const StyledDiv1 = styled.div`
  flex: 1;
  background-color: #E6EBE0;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  color: #5f5b6b;
  font-size: 5em;
  text-align: center;
  
`;


const StyledDiv2 = styled.div`
  flex: 6;
`;




function App() {
  return (
    <MainContainer>
      <StyledDiv1>
       
        <Name>Katherine Szelag</Name>
       
       
      </StyledDiv1>
      <StyledDiv2>
        <Menu />
      </StyledDiv2>
    </MainContainer>
  );
}

export default App;
