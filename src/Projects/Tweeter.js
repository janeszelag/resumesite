import React from "react";
import { ProjectPaper, TextDiv, ProjectTitle, ProjectImg, ProjectText, ImageDiv} from "../styles/Projects"
import { LinksDiv, LinkImg } from "../styles/Links";

export default function Tweeter() {


  return (
    <ProjectPaper elevation={12}>
    <TextDiv>
      <ProjectTitle>TWEETER</ProjectTitle>
      <LinksDiv>
        <a
          href="https://github.com/janeszelag/tweeter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkImg
            alt="github"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583453196/github_1_rjvdqr.svg"
          />
        </a>
      </LinksDiv>
      <ImageDiv>
      <ProjectImg
        alt="tweeter"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583454837/Screen_Shot_2020-03-05_at_7.32.52_PM_r4xb10.png"
      />
       <ProjectImg
        alt="tweeter"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583455835/Screen_Shot_2020-03-05_at_7.41.57_PM_zekce6.png"
      />
      </ImageDiv>

      <ProjectText>
        <strong>ABOUT:</strong> A responsive, single page clone of Twitter. 
        <br />
        <strong>TECH STACK:</strong> jQuery, AJAX, Node, Express, MongoDB
      </ProjectText>
    </TextDiv>
  </ProjectPaper>
   

  );
}
