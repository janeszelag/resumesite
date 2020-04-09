import React from "react";
import Menu from "./Menu";
import Links from "./Links";

import {
  StyledDiv1,
  Name,
  StyledDiv2,
  MainDiv
} from "./styles/App";

function App() {
  return (
    <div>
      <StyledDiv1>
        <Name>katherine szelag</Name>
       
      </StyledDiv1>
      <StyledDiv2>
        <Links />

        <Menu />
      </StyledDiv2>
    </div>
  );
}

export default App;

