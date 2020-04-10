import React from "react";
import BackButton from "./Buttons/BackButton";
import Zoom from "@material-ui/core/Zoom";
import UpButton from "./Buttons/UpButton";
import { useHistory } from "react-router-dom";
import { MainDiv, StyledPaper } from "./styles/ContentPages";
import {
  ProjectPaper,
  TextDiv,
  ProjectTitle,
  ProjectText
} from "./styles/Projects";

export default function Bio(props) {
  const history = useHistory();
  const scrollUp = () => {
    window.scrollTo(0, 0);
  }
  return (
    <MainDiv>
      <BackButton onClick={() => history.push("/main")} />
      <Zoom in={true}>
        <StyledPaper>
          <ProjectPaper elevation={12}>
            <TextDiv>
              <ProjectTitle>TECHNICAL SKILLS</ProjectTitle>
              <ProjectText>
                <strong>LANGUAGES:</strong> <br/>
                JavaScript, Ruby, SQL, HTML, CSS, Python (In progress, BrainStation Data Science Certificate Course)
                <br />
                <strong>FRAMEWORKS, LIBRARIES & ENVIRONMENTS:</strong> <br/>
                NodeJS, React, Rails, Ajax, Express, EJS, jQuery, Bootstrap,
                Axios, Material UI <br />
                <strong>SYSTEMS, CMS & DATABASES: </strong> <br/>
                PostgresSQL, MongoDB, Git <br/>
                <strong>TESTING:</strong> <br/>
                Jest, Storybook, Cypress, Mocha/ Chai, RSpec
              </ProjectText>
            </TextDiv>
          </ProjectPaper>
          <ProjectPaper elevation={12}>
            <TextDiv>
              <ProjectTitle>NON-TECH SKILLS</ProjectTitle>
              <ProjectText>
                <strong>SPOKEN LANGUAGES:</strong> <br/>
                English, Polish
                <br />
                <strong>MICROSOFT:</strong> <br/>
                Advanced Excel & Powerpoint Skills <br />
                <strong>SYSTEMS, CMS & DATABASES: </strong> <br/>
                PostgresSQL, MongoDB, Git <br/>
                <strong>OTHER:</strong> <br/>
                Extensive knowledge of Biostatistics and Medical Terminology
              </ProjectText>
            </TextDiv>
          </ProjectPaper>

          <UpButton onClick={() => scrollUp()} />
        </StyledPaper>
      </Zoom>
    </MainDiv>
  );
}
