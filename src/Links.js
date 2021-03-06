import React from "react";
import { LinksDiv, LinkImg, Href } from "./styles/Links"


export default function Links() {
  return (

    <LinksDiv>
    <Href href="https://github.com/janeszelag" target="_blank" rel="noopener noreferrer">
      <LinkImg
        alt="github"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583345284/github_kamxct.svg"
      />
    </Href>

    <Href
      href="https://www.canva.com/design/DADyKHdsUv0/_q5BVefQa8GfiP0l0orK-g/view?utm_content=DADyKHdsUv0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkImg
        alt="resume"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583345272/document_xtuk0s.svg"
      />
    </Href>
    <Href
      href="https://www.linkedin.com/in/katherine-szelag/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkImg
        alt="linkedin"
        src="https://res.cloudinary.com/dpfixnpii/image/upload/v1583345161/linkedin_kzdmwd.svg"
      />
    </Href>
  </LinksDiv>
  
  )
}