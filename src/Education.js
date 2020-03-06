import React from "react";
import BackButton from "./Buttons/BackButton";
import Zoom from "@material-ui/core/Zoom";
import UpButton from "./Buttons/UpButton";
import { MainDiv, StyledPaper } from "./styles/ContentPages";
import {
  ProjectPaper,
  TextDiv,
  ProjectTitle,
  EducationText
} from "./styles/Projects";

export default function Bio(props) {
  return (
    <MainDiv>
      <BackButton onClick={() => props.transition("MENU")} />
      <Zoom in={true}>
        <StyledPaper>
          <ProjectPaper elevation={12}>
            <TextDiv>
              <ProjectTitle>EDUCATION</ProjectTitle>
              <EducationText>
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
          <UpButton onClick={() => props.scrollUp()} />
        </StyledPaper>
      </Zoom>
    </MainDiv>
  );
}
