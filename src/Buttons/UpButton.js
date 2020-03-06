import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  height: 8vh;
  width: 8vh;
  

  @media (max-width: 768px) {
    height: 6vh;
  width: 6vh;
  }
  &:hover {
    transform: translateY(-2px);
  }
`;
const BackImg = styled.img`
  height: 8vh;
  width: 8vh;


  @media (max-width: 768px) {
    height: 6vh;
  width: 6vh;
  }
  &:hover {
    transform: translateY(-4px);
  }
  
`;


export default function UpButton(props) {
  return (
    
    <StyledButton onClick={props.onClick}>
    <BackImg src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583441679/up_bqrczd.svg" />
    </StyledButton>
    
  
  )
}