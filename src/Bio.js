import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import BackButton from "./styles/BackButton";
import Zoom from "@material-ui/core/Zoom";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  height: 100%;
  background-color: #faf9f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
`;

const Text = styled.p`
  color: #353336;
  font-size: 2em;
  text-align: center;
  font-weight: 300;
  margin: 1em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const StyledAvatar = styled(Avatar)`
  margin-top: 1em;
  height: 22vh;
  width: 22vh;

  @media (max-width: 768px) {
    height: 16vh;
    width: 16vh;
  }
`;
export default function Bio(props) {
  return (
    <MainDiv>
      <BackButton onClick={() => props.transition("MENU")} />
      <Zoom in={props.mode}>
        <StyledPaper>
          <StyledAvatar
            alt="Katherine Szelag"
            src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583284463/me_ppljqf.png"
          />
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </Text>
        </StyledPaper>
      </Zoom>
    </MainDiv>
  );
}
