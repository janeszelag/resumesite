import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

export const StyledPaper = styled(Paper)`
width: 100%;
height: 100%;
background-color: #ffffff;
padding: 2em;
&:hover {
  transform: translateY(-4px);
}
`;
export const Title = styled.h2`
color: #353336;
font-size: 4em;
text-align: center;
font-weight: 300;
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
width: 7vh;
  height: 7vh;
  margin: 0em;
  @media (max-width: 768px) {
    width: 5vh;
    height: 5vh;
  }
`