import React from "react";
import { Link } from "react-router-dom";
import {
  MainDiv,
  ProjectsDiv,
  BioDiv,
  SideDiv,
  ColumnTitle,
  StyledLink,
  MyImage,
  Text,
  StyledLink2,
  SubTitle,
  StyledHref,
  ProjectImage,
  Icon,
  SideDiv2,
} from "./styles/MainPage";

export default function MainPage() {
  return (
    <MainDiv>
      <BioDiv>
        <StyledLink to="/bio">
          <ColumnTitle>Bio</ColumnTitle>
        </StyledLink>
        <Link to="/bio">
          <MyImage
            alt="Katherine Szelag"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583284463/me_ppljqf.png"
          />
        </Link>
        <StyledLink2 to="/bio">
          <Text>
            Former mathematics and science educator with a background in
            biological research focusing on women's and infant's health.........{" "}
          </Text>
        </StyledLink2>
      </BioDiv>
      <ProjectsDiv>
        <StyledLink to="/projects">
          <ColumnTitle>Projects</ColumnTitle>
        </StyledLink>
        <StyledHref
          href="https://github.com/janeszelag/Newton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SubTitle>Newton (In Progress)</SubTitle>
        </StyledHref>
        <a
          href="https://github.com/janeszelag/Newton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectImage src="https://github.com/janeszelag/Newton/blob/master/docs/ScreenShot.gif?raw=true" />
        </a>
        <StyledLink to="/projects">
          <SubTitle>Past Projects</SubTitle>
        </StyledLink>
        <Link to="/projects">
          <ProjectImage src="https://github.com/claraisley/settle/raw/master/docs/sign-in.gif?raw=true" />
        </Link>
      </ProjectsDiv>
      <SideDiv>
        <SideDiv2>
          <StyledLink to="/skills">
            <ColumnTitle>Skills</ColumnTitle>
          </StyledLink>
          <Link to="/skills">
            <Icon src="https://res.cloudinary.com/dpfixnpii/image/upload/v1586481771/skills_h5cwnx.svg" />
          </Link>
        </SideDiv2>
        <SideDiv2>
          <StyledLink to="/education">
            <ColumnTitle>Education</ColumnTitle>
          </StyledLink>
          <Link to="/education">
            <Icon src="https://res.cloudinary.com/dpfixnpii/image/upload/v1586482167/mortarboard_tsxmvj.svg" />
          </Link>
        </SideDiv2>
        <SideDiv2>
          <StyledLink to="/experience">
            <ColumnTitle>Experience</ColumnTitle>
          </StyledLink>
          <Link to="/experience">
            <Icon src="https://res.cloudinary.com/dpfixnpii/image/upload/v1586487986/goal_p05m2p.svg"/>
          </Link>
        </SideDiv2>
      </SideDiv>
    </MainDiv>
  );
}
