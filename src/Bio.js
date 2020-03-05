import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Avatar from '@material-ui/core/Avatar';
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
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

const StyledAvatar = styled(Avatar)`
margin-top: 1em;
height: 22vh;
  width: 22vh;
 

  @media (max-width: 768px) {
    height: 16vh;
  width: 16vh;
  }
`
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
        <StyledAvatar alt="Katherine Szelag" src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583284463/me_ppljqf.png" />
          <Text>bio will go here <br/> wowoaj</Text>
        </StyledPaper>
        
      </Grow>
     
    </MainDiv>
  );
}
