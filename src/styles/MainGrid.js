import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

export const StyledPaper = styled(Paper)`
width: 100%;
height: 100%;
background-color: #faf9f8;
padding: 3em;



&:hover {
  transform: translateY(-4px);
  box-shadow: 6px 6px 2px #717C4C;
}
`;
export const Title = styled.h1`
color: #000000;
font-family: "Advent Pro";
font-weight: 400;
font-size: 4em;
text-align: center;

margin: 0em;
@media (max-width: 768px) {
  font-size: 3em;
}
`;

export const Base = styled(ButtonBase)`
width: 100%;
height: 100%;
`;

export const StyledCharlie = styled.img`
width: 6vh;
  height: 6.6vh;
  margin: 0em;
  @media (max-width: 768px) {
    width: 5vh;
    height: 5vh;
  }
`