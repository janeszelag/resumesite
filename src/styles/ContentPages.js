import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";


export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledPaper = styled(Paper)`
  width: 100%;
  height: 100%;
  background-color: #faf9f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
  margin-top: 2em;
`;

export const Text = styled.p`
  color: #353336;
  font-size: 2em;
  text-align: center;
  font-weight: 300;
  margin: 1em;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const ItalicText = styled(Text)`
font-size: 1.5em;

@media (max-width: 768px) {
  font-size: 1em;
}
`

export const StyledAvatar = styled(Avatar)`
  margin-top: 1em;
  height: 28vh;
  width: 28vh;

  @media (max-width: 768px) {
    height: 16vh;
    width: 16vh;
  }
`;