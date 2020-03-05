import React from "react";
import styled from "styled-components";


const LinksDiv = styled.div`
height: 30%;
display: flex;
flex-direction: row;

justify-content: center;
align-items: center;

@media (max-width: 768px) {
  height: 15%;
}


`;
const LinkImg = styled.img`
width: 5vh;
height: 5vh;
margin-left: 1em;
@media (max-width: 768px) {
  width: 4vh;
  height: 4vh;
}
&:hover {
  transform: rotate(20deg);
  cursor: pointer;
}
`
export default function Links() {
  return (

    <LinksDiv>
    <a href="https://github.com/janeszelag" target="_blank">
      <LinkImg
        alt="github"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583345284/github_kamxct.svg"
      />
    </a>

    <a
      href="https://www.canva.com/design/DADyKHdsUv0/_q5BVefQa8GfiP0l0orK-g/view?utm_content=DADyKHdsUv0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
      target="_blank"
    >
      <LinkImg
        alt="resume"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583345272/document_xtuk0s.svg"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/katherine-szelag/"
      target="_blank"
    >
      <LinkImg
        alt="linkedin"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583345161/linkedin_kzdmwd.svg"
      />
    </a>
  </LinksDiv>
  
  )
}