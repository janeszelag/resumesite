import React from "react";
import BackButton from "./Buttons/BackButton";
import Zoom from "@material-ui/core/Zoom";
import UpButton from "./Buttons/UpButton";
import {
  MainDiv,
  StyledPaper,
  StyledAvatar
} from "./styles/ContentPages";
import {
  ProjectPaper,
  TextDiv,
  ProjectTitle,
  BioText
} from "./styles/Projects";

export default function Bio(props) {
  return (
    <MainDiv>
      <BackButton onClick={() => props.transition("MENU")} />
      <Zoom in={true}>
        <StyledPaper>
          <StyledAvatar
            alt="Katherine Szelag"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583284463/me_ppljqf.png"
          />
          <ProjectPaper elevation={12}>
            <TextDiv>
              <ProjectTitle>bio</ProjectTitle>
              <BioText>
                <strong>I am....</strong> a recent graduate of the Lighthouse
                Labs Web Development bootcamp.
                <br />
                <br />
                <strong>I am....</strong> a mathematics and science educator
                passionate about instructing students possesing some form of
                learning difference or exceptionality.
                <br />
                <br />
                <strong>I have....</strong> a background in biological research
                focusing on women's and infant's health. I completed a Master's
                Degree as a member of the Jurisicova lab in the Lunen-Tanenbaum
                Research Institute of Mount Sinai Hospital. My project
                investigated the role of lipid signalling in placental
                development and function.
                <br />
                <br />
                <strong>In the future I hope to....</strong> build on the
                programming skills I have gained, while also continuing to learn
                new languages and frameworks. I hope to use my
                education/experience to work with technologies solving problems
                in the fields of education and health-care. I am especially
                interested in applications promoting mental wellness and
                emotional intelligence.
              </BioText>
            </TextDiv>
          </ProjectPaper>
          <ProjectPaper elevation={12}>
            <TextDiv>
              <ProjectTitle>experience</ProjectTitle>
              <BioText>
                <strong>private math and science tutoring, 2014 - present </strong> <br />
                Specializes in the instruction of elementary and secondary
                students possessing some type of learning difference or
                exceptionality, including but not limited to ADHD, OCD,
                dysgraphia and dyslexia. Possesses a solid network of clients
                developed solely through word-of-mouth referrals and reviews.
                <br />
                <br />
                <strong>learning specialist, 2018 – 2019</strong> <br />
                <strong>Ruth Rumack's Learning Space</strong> <br />
                Taught 20+ secondary students, majority of whom possessed some
                form of learning difference or exceptionality. Applied
                research-based Direct Instruction methods, designed lesson plans
                and improved student's executive functioning skills, leading to
                their increased academic achievement and lifelong success.
                Successfully prepared over 30 students for standardized tests,
                including the SSAT, SAT, and ACT.  <br />
                <br />
                <strong>
                  graduate student trainee, 2014 - 2018 
                </strong>{" "}
                <br />
                <strong>
                  Lunenfeld-Tanenbaum Research Institute, Mount Sinai Hospital{" "}
                </strong>{" "}
                <br />
                Independently designed and executed experiments on both animal
                and cell models using a variety of biological methods and
                techniques. Effectively troubleshooted problems encountered
                while performing duties and experiments. Analyzed and
                interpreted scientific data via standard statistical methods, in
                coordination with the principal investigator and other senior
                members of the lab. Mentored and instructed undergraduate students in
                biological techniques, experimental design, animal-handling, and
                general lab safety and culture. Regularly presented data at lab
                meetings, research fairs and conferences.
              </BioText>
            </TextDiv>
          </ProjectPaper>
          <UpButton onClick={() => props.scrollUp()} />
        </StyledPaper>
      </Zoom>
    </MainDiv>
  );
}
