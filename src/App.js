import React from "react";
import Menu from "./Menu";
import Links from "./Links";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  StyledDiv1,
  Name,
  StyledDiv2,
  MainDiv,
  StyledDiv3,
  SideTitle,
  LinksDiv
} from "./styles/App";

const appLinks = [
  {
    name: "Projects",
    path: "/projects",
    component: (
      <Projects
      />
    )
  },
  {
    name: "Skills",
    path: "/skills",
    component: <Skills />
  },
  {
    name: "Bio",
    path: "/bio",
    component: <Bio />
  },
  {
    name: "Education",
    path: "/education",
    component: <Education />
  }
];
const routes = appLinks.map((link, index) => {
  return (
    <Route key={index} path={link.path}>
      {link.component}
    </Route>
  );
});

function App() {
  return (
    <MainDiv>
      <Router>
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
      <Switch>
          {routes}
        </Switch>
        
      </Router>
  
    </MainDiv>
  );
}

export default App;
