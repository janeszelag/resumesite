import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

//styles for App.js

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
  color: #000000;
  font-size: 5em;
  text-align: center;
  font-weight: 400;
  margin-left: 0.5em;

  @media (max-width: 768px) {
    font-size: 4em;
    margin-left: 0em;
    margin-bottom: 0em;
  }
`;

export const StyledDiv2 = styled.div`
  width: 100%;
  margin-top: 2em;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Cactus = styled.img`
  width: 11vh;
  height: 18vh;

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
    backgroundColor: "#d7dcd0",
    color: "#353336",
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(22),
    border: "none"
  }
}))(Tooltip);

// styles for Menu.js

export const OuterDiv = styled.div`
width 70%;
@media (max-width: 768px) {
  width 80%;
}
`;
