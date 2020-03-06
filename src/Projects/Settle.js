import React from "react";
import { ProjectPaper, TextDiv, ProjectTitle, ProjectImg, ProjectText, ImageDiv} from "../styles/Projects"
import { LinksDiv, LinkImg, LinkImgMiddle } from "../styles/Links";
export default function Settle() {


  return (
    <ProjectPaper elevation={12}>
    <TextDiv>
      <ProjectTitle>SETTLE</ProjectTitle>
      <LinksDiv>
        <a
          href="https://github.com/claraisley/settle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkImg
            alt="github"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583453196/github_1_rjvdqr.svg"
          />
        </a>

        <a
          href="https://settle.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkImgMiddle
            alt="homepage"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583453208/home-run_rzsi7x.svg"
          />
        </a>
      </LinksDiv>
      <ImageDiv>
      <ProjectImg
        alt="settle"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583451000/Screen_Shot_2020-03-05_at_6.29.19_PM_tnhxeo.png"
      />
      <ProjectImg
        alt="settle"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583455494/Screen_Shot_2020-03-05_at_7.43.34_PM_nsx6cj.png"
      />

      </ImageDiv>
     
      <ProjectText>
        <strong>ABOUT:</strong> Settle is a wellness application that
        aims to help secondary-students manage and cope with the
        symptoms of Test Anxiety. Settle introduces teens to the
        practice of mindfulness, while also empowering them with the
        tools and knowledge they need to modify the dysfunctional
        patterns of thinking associated with anxiety. User activity is
        saved and analyzed in order track/display progress.🌵
        <br />
        <strong>TECH STACK:</strong> React, React Router, Rails API,
        Axios, Styled-components, Material-UI, ApexCharts, JWT
      </ProjectText>
    </TextDiv>
  </ProjectPaper>
   

  );
}
