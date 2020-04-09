import React from "react";
import Menu from "./Menu";
import Links from "./Links";

import {
  StyledDiv1,
  Name,
  StyledDiv2,
  MainDiv,
  StyledDiv3,
  SideTitle,
  LinksDiv
} from "./styles/App";

function App() {
  return (
    <MainDiv>
      <StyledDiv1>
        <SideTitle src="https://res.cloudinary.com/dpfixnpii/image/upload/v1586468835/RESUME_SITE_6_vcmrck.svg" />
        <Name>KATHERINE SZELAG</Name>
        <SideTitle src="https://res.cloudinary.com/dpfixnpii/image/upload/v1586468805/RESUME_SITE_5_dxuqps.svg" />
      </StyledDiv1>
      <StyledDiv2>
        <LinksDiv>
        <Links />
        </LinksDiv>
        

      
      </StyledDiv2>
      <StyledDiv3></StyledDiv3>
    </MainDiv>
  );
}

export default App;
