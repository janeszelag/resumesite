import styled from 'styled-components';
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

export const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 2fr;
  }
`;

export const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: solid;
  border-color: #e0e3cf;
  border-width: 3px;
`;

export const Name = styled.h1`
  color: #353336;
  font-size: 5em;
  text-align: center;
  font-weight: 300;
  margin: 0em;
  @media (max-width: 768px) {
    font-size: 3em;
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
 
  transition: transform 1000ms ease-in-out;
  &:hover {
    transform: translate(0, -15px) 
  }
`;

export const CactusTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#e0e3cf",
    color: "#353336",
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(22),
    border: "none"
  }
}))(Tooltip);


export const LinksDiv = styled.div``;

export const MenuDiv = styled.div``;