
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";



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
  font-family: "Cantata One", serif;
  margin: 0em;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    font-size: 3em;
  }
  &:hover {
    color: #b30000;
    
  }
`;

export const ProjectImg = styled.img`
  height: 80vh;
  width: 80%;
  border-radius: 2%;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1em;

  @media (max-width: 768px) {
    height: 24vh;
    width: 36vh;
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
  font-size: 1.5em;
  font-family: "Cantata One", serif;
  font-weight: 400;
  margin: 1em;
  margin-top: 1em;
  @media (max-width: 768px) {
    font-size: 1em;
  }

`;
export const BioText = styled.p`
color: #000000;
  font-size: 1.5em;
  font-family: "Cantata One", serif;
  font-weight: 400;
  margin: 1em;
  margin-top: 0em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
export const EducationText = styled.p`
  color: #353336;
  font-size: 1.5em;
  font-family: "Cantata One", serif;
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

export const StyledHref = styled.a`
text-decoration: none;
margin: 0em;
&:hover {
  text-decoration: underline;
  text-decoration-color: #b30000;
  
}
`;