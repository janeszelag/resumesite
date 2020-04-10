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
  BioText
} from "./styles/Projects";


export default function Bio(props) {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  }
  const history = useHistory();
  return (
    <MainDiv>
      <BackButton onClick={() => history.push("/main")} />
      <Zoom in={true}>
        <StyledDiv>
          <ProjectPaper elevation={12}>
            <TextDiv>
              <ProjectTitle>Bio</ProjectTitle>
              <BioText>
                <strong>I am....</strong> a full stack developer located in Toronto, open to and seeking
                opportunities. A recent graduate of the Lighthouse Labs Web
                Development bootcamp, my enthusiasm for creative problem-solving
                and love for all things STEM led me to a new career in software
                development👩🏼‍💻.
                <br />
                <br />
                <strong>I am....</strong> a mathematics and science educator who
                specializes in the instruction of students possesing some form
                of learning difference or exceptionality. Although challenging
                at times, I strive to get my students excited about math,
                particularly through the use of games and puzzles. I'm excited to now also
                spread my passion for programming to my students, especially young
                women and girls✏️.
                <br />
                <br />
                <strong>I have....</strong> a background in biological research
                focusing on women's and infant's health. I completed a graduate
                degree in Reproductive Physiology as a member of the Jurisicova lab in the Lunen-Tanenbaum
                Research Institute of Mount Sinai Hospital. My project
                investigated the role of lipid signalling in placental
                development and function🐭.
                <br />
                <br />
                <strong>
                  When I'm not programming or teaching I am....
                </strong>{" "}
                listening to a comedy or history podcast! I also love martial
                arts and boxing - I have a second degree black-belt in Tae Kwon
                Do🥋.
                <br />
                <br />
                <strong>In the future I hope to....</strong> build on the
                programming skills I have gained, while also continuing to learn
                new languages and frameworks. I hope to one day use my
                education/experience to work with technologies solving problems
                in the fields of education, biotechnology or health-care. I am
                especially interested in applications promoting mental wellness
                and emotional intelligence🧬.
              </BioText>
            </TextDiv>
          </ProjectPaper>
          <UpButton onClick={() => scrollUp()} />
        </StyledDiv>
      </Zoom>
    </MainDiv>
  );
}
