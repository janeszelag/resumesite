import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  height: 8vh;
  width: 8vh;
  margin-bottom: 1em;
  margin-top: 1em;

  @media (max-width: 768px) {
    height: 6vh;
  width: 6vh;
  }
  
`;
const BackImg = styled.img`
  height: 6vh;
  width: 6vh;
 


  @media (max-width: 768px) {
    height: 4vh;
  width: 4vh;
  }
  
  
`;


export default function BackButton(props) {
  return (
    
    <StyledButton onClick={props.onClick}>
    <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1585942430/back_2_duysqh.svg" />
    </StyledButton>
    
  
  )
}