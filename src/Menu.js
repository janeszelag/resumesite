import React from "react";
import MainGrid from "./MainGrid";
import useVisualMode from "./hooks/useVisualMode";
import Bio from "./Bio";
import Charlie from "./Charlie";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

export default function Menu() {
  const MENU = "MENU";
  const BIO = "BIO";
  const CHARLIE = "CHARLIE";
  const PROJECTS = "PROJECTS";
  const SKILLS = "SKILLS";
  const EDUCATION = "EDUCATION";

  const { mode, transition } = useVisualMode(MENU);

  return (
    <article>
      {mode === MENU && <MainGrid mode={mode} transition={transition} />}
      {mode === BIO && <Bio mode={mode} transition={transition} />}
      {mode === CHARLIE && <Charlie mode={mode} transition={transition} />}
      {mode === PROJECTS && <Projects mode={mode} transition={transition} />}
      {mode === SKILLS && <Skills mode={mode} transition={transition} />}
      {mode === EDUCATION && <Education mode={mode} transition={transition} />}
    </article>
  );
}
