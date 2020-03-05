import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";


export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 3fr;
  }
`;

export const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #faf9f8;
  border: solid;
  border-color: #d8d2cb;
  border-width: 3px;
`;

export const Name = styled.h1`
  color: #353336;
  font-size: 5em;
  text-align: center;
  font-weight: 300;
  margin: 0em;
  @media (max-width: 768px) {
    font-size: 4em;
  }
`;

export const StyledDiv2 = styled.div`
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Cactus = styled.img`
  width: 12vh;
  height: 20vh;

 

  @media (max-width: 768px) {
    width: 9vh;
    height: 14vh;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CactusTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#d8d2cb",
    color: "#353336",
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(22),
    border: "none"
  }
}))(Tooltip);


export const MenuDiv = styled.div`
height: 70%;
width: 80%;

@media (max-width: 768px) {
  height: 85%;
}

`;
