import React from "react";
import MainPage from "./MainPage";
import Links from "./Links";
import Bio from "./Bio";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import ScrollToTop from "./ScrollToTop";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

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
    name: "MainPage",
    path: "/main",
    component: <MainPage />
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
      <ScrollToTop />
      <StyledDiv1>
        <SideTitle src="https://res.cloudinary.com/dpfixnpii/image/upload/v1586468835/RESUME_SITE_6_vcmrck.svg" />
        <Name>KATHERINE SZELAG</Name>
        <SideTitle src="https://res.cloudinary.com/dpfixnpii/image/upload/v1586468805/RESUME_SITE_5_dxuqps.svg" />
      </StyledDiv1>
      <StyledDiv2>
        <LinksDiv>
        <Links />
        </LinksDiv>
        <Switch>
        <Route exact path="/">
          
              <Redirect to="/main" />
            
          </Route>
          {routes}
        </Switch>

      
      </StyledDiv2>
    
        
      </Router>
      <StyledDiv3></StyledDiv3>

  
    </MainDiv>
  );
}

export default App;
