import React from "react";
import MainGrid from "./MainGrid";
import useVisualMode from "./hooks/useVisualMode";
import Bio from "./Bio";
import Charlie from "./Charlie";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";


import { OuterDiv } from "./styles/App"

export default function Menu() {
  const MENU = "MENU";
  const BIO = "BIO";
  const CHARLIE = "CHARLIE";
  const PROJECTS = "PROJECTS";
  const SKILLS = "SKILLS";
  const EDUCATION = "EDUCATION";

  const { mode, transition } = useVisualMode(MENU);

  const scrollUp = () => {
    window.scrollTo(0, 0);
  }


  return (
    <OuterDiv>
      {mode === MENU && <MainGrid mode={mode} transition={transition} />}
      {mode === BIO && <Bio mode={mode} transition={transition} scrollUp={scrollUp}/>}
      {mode === CHARLIE && <Charlie mode={mode} transition={transition} scrollUp={scrollUp} />}
      {mode === PROJECTS && <Projects mode={mode} transition={transition} scrollUp={scrollUp}/>}
      {mode === SKILLS && <Skills mode={mode} transition={transition} scrollUp={scrollUp} />}
      {mode === EDUCATION && <Education mode={mode} transition={transition} scrollUp={scrollUp} />}

    </OuterDiv>
   

  );
}
