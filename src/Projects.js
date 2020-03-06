import React from "react";
import BackButton from "./Buttons/BackButton";
import Zoom from "@material-ui/core/Zoom";
import UpButton from "./Buttons/UpButton";
import { MainDiv, StyledPaper, ItalicText } from "./styles/ContentPages";
import Settle from "./Projects/Settle"
import { GreenHyperlink } from "./styles/Projects"



export default function Bio(props) {
  return (
    <MainDiv>
      <BackButton onClick={() => props.transition("MENU")} />
      <Zoom in={true}>
        <StyledPaper>
          <Settle/>
          <ItalicText>
            The git repository for this website can be found{" "}
            <GreenHyperlink
              href="https://github.com/janeszelag/resumesite"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </GreenHyperlink>
          </ItalicText>
          <UpButton onClick={() => props.scrollUp()} />
        </StyledPaper>
      </Zoom>
    </MainDiv>
  );
}
