import React from "react";
// import MainPage from "./MainPage";
import Links from "./Links";
// import Bio from "./Bio";
// import Projects from "./Projects";
// import Skills from "./Skills";
// import Education from "./Education";
// import Experience from "./Experience";
// import ScrollToTop from "./ScrollToTop";

//import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import {
  NameDiv,
  Name,
  MainDiv,
  LinksDiv
} from "./styles/App";

// const appLinks = [
//   {
//     name: "Projects",
//     path: "/projects",
//     component: (
//       <Projects
//       />
//     )
//   },
//   {
//     name: "MainPage",
//     path: "/main",
//     component: <MainPage />
//   },
//   {
//     name: "Skills",
//     path: "/skills",
//     component: <Skills />
//   },
//   {
//     name: "Bio",
//     path: "/bio",
//     component: <Bio />
//   },
//   {
//     name: "Education",
//     path: "/education",
//     component: <Education />
//   },
//   {
//     name: "Experience",
//     path: "/experience",
//     component: <Experience />
//   }
// ];
// const routes = appLinks.map((link, index) => {
//   return (
//     <Route key={index} path={link.path}>
//       {link.component}
//     </Route>
//   );
// });

function App() {
  return (
    <MainDiv>
      <NameDiv>
      <Name>katherine szelag</Name>
      </NameDiv>
     
        <LinksDiv>
        <Links />
        </LinksDiv>
    </MainDiv>
  );
}

export default App;
