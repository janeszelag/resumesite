import React from "react";
import { ProjectPaper, TextDiv, ProjectTitle, ProjectImg, ProjectText, ImageDiv} from "../styles/Projects"
import { LinksDiv, LinkImg} from "../styles/Links";

export default function Scheduler() {


  return (
    <ProjectPaper elevation={12}>
    <TextDiv>
      <ProjectTitle>SCHEDULER</ProjectTitle>
      <LinksDiv>
        <a
          href="https://github.com/janeszelag/scheduler"
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
        alt="scheduler"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583456188/interview-hover_whczjj.png"
      />
       <ProjectImg
        alt="scheduler"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583456179/delete-confirmation_ntxqtd.png"
      />
      </ImageDiv>

      <ProjectText>
        <strong>ABOUT:</strong> Responsive, single page React application that allows users to book and cancel interviews.📆 Tested using both Jest and Cypress🤓. 
        <br />
        <strong>TECH STACK:</strong> ReactWebpack, Babel, Axios, Storybook, Webpack Dev Server, Jest, Testing Library, Cypress
      </ProjectText>
    </TextDiv>
  </ProjectPaper>
   

  );
}
