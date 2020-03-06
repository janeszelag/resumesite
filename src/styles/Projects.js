
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const GreenHyperlink = styled.a`
  color: #6e7c5e;

`;

export const ProjectPaper = styled(Paper)`
  width: 90%;
  margin-top: 2em;
  background-color: #faf9f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProjectTitle = styled.h1`
  color: #000000;
  font-weight: 400;
  font-size: 4em;
  text-align: center;

  margin: 0em;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

export const ProjectImg = styled.img`
  height: 32vh;
  width: 48vh;
  border-radius: 2%;
  margin-bottom: 1em;
  margin-right: 1em;

  @media (max-width: 768px) {
    height: 20vh;
    width: 30vh;
  }
  &:hover {
    &:hover {
      transform: translateY(-1px);
      box-shadow: 10px 10px 5px grey;
    }
  }
`;

export const ProjectText = styled.p`
  color: #353336;
  font-size: 2em;
  font-family: "Poppins";
  font-weight: 400;
  margin: 1em;
  margin-top: 1em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
export const BioText = styled.p`
color: #000000;
  font-size: 2em;
  font-family: "Poppins";
  font-weight: 400;
  margin: 1em;
  margin-top: 0em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
export const EducationText = styled.p`
  color: #353336;
  font-size: 2em;
  font-family: "Poppins";
  font-weight: 400;
  margin: 1em;
  margin-top: 0em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;


export const ImageDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;

`