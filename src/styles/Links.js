import styled from "styled-components";

export const LinksDiv = styled.div`
  margin-bottom: 2em;
  height: 25%;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 15%;
  }
`;

export const LinkImg = styled.img`
  width: 5vh;
  height: 5vh;
  margin-left: 0em;
  @media (max-width: 768px) {
    width: 4vh;
    height: 4vh;
  }
  &:hover {
    transform: rotate(20deg);
    cursor: pointer;
  }
`;

export const LinkImgMiddle = styled(LinkImg)`
  margin-left: 0.75em;
  margin-right: 0.75em;
`;
