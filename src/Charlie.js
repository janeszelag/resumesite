import React, { useState, useEffect } from "react";
import BackButton from "./Buttons/BackButton";
import Zoom from "@material-ui/core/Zoom";
import UpButton from "./Buttons/UpButton"
import { MainDiv, StyledPaper, Text} from "./styles/ContentPages"
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { StyledCard, StyledCharliePic, CharlieDiv} from "./styles/Charlie"




export default function Charlie(props) {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 600) setIsMobile(true);
  }, []);

  return (
    <MainDiv>
      <BackButton onClick={() => props.transition("MENU")} />
      <Zoom in={true}>
        <StyledPaper>
          <Text>
            This page is in fact just a shameless tribute to Charlie the Golden Doodle 🤷🏼‍♀️🧡 
          </Text>
          <CharlieDiv>
          <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <StyledCard elevation={10}>
              <CardContent>
                <StyledCharliePic alt="charlie" src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583447551/746D92A2-831D-46A8-A194-99EAE40BF631_gn9snn.jpg" />
              </CardContent>

            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard elevation={10}>
              <CardContent>
                <StyledCharliePic alt="charlie" src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583447562/IMG_3028_garhxl.jpg" />
              </CardContent>

            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledCard elevation={10}>
              <CardContent>
                <StyledCharliePic alt="charlie" src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583447573/IMG_3891_ti6zxq.jpg" />
              </CardContent>

            </StyledCard>
          </Grid>

          </Grid>
          </CharlieDiv>
        
          {isMobile && <UpButton onClick={() => props.scrollUp()}/>}
        </StyledPaper>
      </Zoom>
      
    </MainDiv>
  );
}
