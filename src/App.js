import React from "react";
import Menu from "./Menu";
import Links from "./Links";

import {
  StyledDiv1,
  Name,
  StyledDiv2,
  Cactus,
  CactusTooltip
} from "./styles/App";

function App() {
  return (
    <div>
      <StyledDiv1>
        <Name>katherine szelag</Name>
        <CactusTooltip title="pretty fly for a cacti" placement="right" arrow>
          <Cactus
            alt="cactus"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583436375/cactus_4_gfzg4l.svg"
          />
        </CactusTooltip>
      </StyledDiv1>
      <StyledDiv2>
        <Links />

        <Menu />
      </StyledDiv2>
    </div>
  );
}

export default App;
