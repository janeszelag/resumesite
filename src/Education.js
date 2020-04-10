import React from "react";
import BackButton from "./Buttons/BackButton";
import Zoom from "@material-ui/core/Zoom";
import UpButton from "./Buttons/UpButton";
import { useHistory } from "react-router-dom";
import { MainDiv, StyledDiv } from "./styles/ContentPages";
import {
  ProjectPaper,
  TextDiv,
  ProjectTitle,
  EducationText
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
        <StyledDiv>
          <ProjectPaper elevation={12}>
            <TextDiv>
              <ProjectTitle>Education</ProjectTitle>
              <EducationText>
              <strong>Data Science Certificate (In progress)</strong> <br />
                <strong> BRAINSTATION </strong><br />
                Graduate in May 2020
                <br />
                <br />
                <strong>Diploma: Full Stack Web Development</strong> <br />
                <strong> LIGHTHOUSE LABS </strong><br />
                Graduated in February 2020
                <br />
                <br/>
                <strong>
                  Master of Science (MSc) in Reproductive Physiology
                </strong>{" "}
                <br />
                <strong>University of Toronto</strong> <br />
                Graduated in 2018 <br />
                Research-based degree, Thesis Title: Role of Acid
                Sphingomyelinase in Murine Placentation <br />
                Ontario Student Opportunity Trust Funds (OSOTF) Award; 2014-15{" "}
                <br />
                
                <br/>
                <strong>Honours Bachelor of Science (BSc)</strong> <br />
                <strong>University of Toronto</strong> 
                <br />
                Graduated in 2013 <br />
                Major: Cell and Molecular Biology, Major: Immunology University
                of Toronto <br />
                Dean’s List graduate; Recognition of Exceptional Academic Achievement: High Distinction 
                <br />
                University of Toronto Excellence Awards (UTEA); 2012 
                <br />
                Trinity College Admission Scholarship; 2009 
                <br />
                
              </EducationText>
            </TextDiv>
          </ProjectPaper>
          <UpButton onClick={() => scrollUp()} />
        </StyledDiv>
      </Zoom>
    </MainDiv>
  );
}
