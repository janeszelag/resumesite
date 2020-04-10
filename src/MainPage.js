import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
  MainDiv,
  ProjectsDiv,
  BioDiv,
  SideDiv,
  ColumnTitle,
  StyledLink
 
} from "./styles/MainPage";




export default function MainPage() {


  


  return (
    <MainDiv>
    
      <BioDiv>
      <StyledLink to="/bio">
        <ColumnTitle>Bio</ColumnTitle>
        </StyledLink>
      </BioDiv>
      <ProjectsDiv>
        <StyledLink to="/projects">
        <ColumnTitle>Projects</ColumnTitle>
        </StyledLink>
      </ProjectsDiv>
      <SideDiv>
      <StyledLink to="/skills">
        <ColumnTitle>Skills</ColumnTitle>
        </StyledLink>
        <StyledLink to="/education">
        <ColumnTitle>Education</ColumnTitle>
        </StyledLink>
      </SideDiv>

    </MainDiv>

  );
}
