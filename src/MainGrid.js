import React from "react";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Zoom from '@material-ui/core/Zoom';

import { StyledPaper, Title, Base, StyledCharlie } from "./styles/Menu";

export default function MainGrid(props) {
  return (

    <Zoom
    in={props.mode}
    
  >
<Grid container spacing={1}>
      <Grid item xs={12} sm={12}>
        <Base onClick={() => props.transition("PROJECTS")}>
          <StyledPaper>
            <Title>projects</Title>
          </StyledPaper>
        </Base>
      </Grid>

      <Grid item xs={12} sm={9}>
        <Base onClick={() => props.transition("BIO")}>
          <StyledPaper>
            <Title>bio</Title>
          </StyledPaper>
        </Base>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Base onClick={() => props.transition("CHARLIE")}>
          <StyledPaper>
            <StyledCharlie
              alt="dog icon"
              src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583376265/dog-tags-military_vb6hbd.svg"
            />
          </StyledPaper>
        </Base>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Base onClick={() => props.transition("SKILLS")}>
          <StyledPaper>
            <Title>skills</Title>
          </StyledPaper>
        </Base>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Base onClick={() => props.transition("EDUCATION")}>
          <StyledPaper>
            <Title>education</Title>
          </StyledPaper>
        </Base>
      </Grid>
    </Grid>
  </Zoom>

    
  );
}
