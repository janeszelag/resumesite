import React from "react";
import BackButton from "./Buttons/BackButton";
import Zoom from "@material-ui/core/Zoom";
import UpButton from "./Buttons/UpButton";
import { MainDiv, StyledPaper, ItalicText } from "./styles/ContentPages";
import Settle from "./Projects/Settle"
import Tweeter from "./Projects/Tweeter"
import Scheduler from "./Projects/Scheduler"
import { useHistory } from "react-router-dom";



export default function Bio(props) {
  const history = useHistory();
  const scrollUp = () => {
    window.scrollTo(0, 0);
  }
  return (
    <MainDiv>
      <BackButton onClick={() => history.push("/main")} />
      <Zoom in={true}>
        <StyledPaper>
          <Settle/>
          <Scheduler/>
          <Tweeter/>
          <UpButton onClick={() => scrollUp()} />
        </StyledPaper>
      </Zoom>
    </MainDiv>
  );
}
