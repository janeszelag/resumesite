import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import BackButton from "./styles/BackButton"

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  width: 80%;
  height: 80%;
  background-color: #ffffff;
`;

const Text = styled.p`
  color: #353336;
  font-size: 2em;
  text-align: center;
  font-weight: 300;
  margin: 0em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
export default function Bio(props) {
  return (
    <MainDiv>
      <BackButton onClick={() => props.transition("MENU")}/>
      <Grow
        in={props.mode}
        style={{ transformOrigin: "0 0 0" }}
        {...(props.mode ? { timeout: 1000 } : {})}
      >
        
        <StyledPaper>
          <Text>bio will go here</Text>
        </StyledPaper>
      </Grow>
    </MainDiv>
  );
}
