import React from "react";
import "./App.css";
import Menu from "./Menu.js";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    display: grid;
    grid-template-rows: 1fr 2fr;
  }
`;
const StyledDiv1 = styled.div`
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

const Name = styled.h1`
  color: #474448;
  font-size: 5em;
  text-align: center;
  margin: 0em;
  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const StyledDiv2 = styled.div``;

const Cactus = styled.img`
  width: 14vh;
  height: 24vh;

  margin-left: 1em;
`;

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#e0e3cf",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 420,
    fontSize: theme.typography.pxToRem(22),
    border: "none"
  }
}))(Tooltip);

function App() {
  return (
    <MainContainer>
      <StyledDiv1>
        <Name>KATHERINE SZELAG</Name>
        <HtmlTooltip title="pretty fly for a cacti" placement="right" arrow>
          <Cactus
            alt="cactus"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583303429/cactus.png"
          />
        </HtmlTooltip>
      </StyledDiv1>
      <StyledDiv2>
        <Menu />
      </StyledDiv2>
    </MainContainer>
  );
}

export default App;


