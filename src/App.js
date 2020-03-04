import React from "react";
import Menu from "./Menu.js";
import {
  MainContainer,
  StyledDiv1,
  Name,
  StyledDiv2,
  Cactus,
  LinksDiv,
  MenuDiv,
  CactusTooltip
} from "./styles/App";



function App() {
  return (
    <MainContainer>
      <StyledDiv1>
        <Name>katherine szelag</Name>
        <CactusTooltip title="pretty fly for a cacti" placement="right" arrow>
          <Cactus
            alt="cactus"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583344933/cactus_2_i8rsfk.svg"
          />
        </CactusTooltip>
      </StyledDiv1>
      <StyledDiv2>
        <LinksDiv></LinksDiv>
        <MenuDiv>
          <Menu />
        </MenuDiv>
      </StyledDiv2>
    </MainContainer>
  );
}

export default App;
