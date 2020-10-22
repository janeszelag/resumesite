import styled from "styled-components";

export const LinksDiv = styled.div`
  height: 25%;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const LinkImg = styled.img`
  width: 6vh;
  height: 6vh;
  margin: 0px 4px 0px 4px;

  &:hover {
    transform: rotate(20deg);
    cursor: pointer;
  }
`;



export const Href = styled.a`
  width: 6vh;
  height: 6vh;
  margin: 0px 4px 0px 4px;

`
