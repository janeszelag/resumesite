import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  min-height: 70vh;
  width: 44%;

  @media (max-width: 900px) {
    width: 90%;
    border: solid;
    border-weight: 0.5px;
    border-color: #c7bfb5;
  }
`;
export const ColumnTitle = styled.h1`
  color: #000000;
  font-weight: 400;
  font-size: 3em;
  text-align: center;
  font-family: "Cantata One", serif;
  margin: 0em;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    font-size: 3em;
  }
  &:hover {
    color: #b30000;
  }
`;

export const SubTitle = styled.h2`
  color: #000000;
  font-weight: 400;
  font-size: 2em;
  text-align: center;
  font-family: "Cantata One", serif;
  margin-top: 1em;
  margin-bottom: 0.5em;
  &:hover {
    color: #b30000;
  }
`;
export const StyledHref = styled.a`
  text-align: center;
  width: 100%;

  text-decoration: underline;
  text-decoration-color: #000000;
  &:hover {
    text-decoration-color: #b30000;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  text-decoration-color: #000000;
  &:hover {
    text-decoration-color: #b30000;
  }
`;
export const StyledLink2 = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #b30000;
  }
`;

export const BioDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  min-height: 70vh;
  width: 26%;

  @media (max-width: 900px) {
    width: 90%;
    border: solid;
    border-weight: 0.5px;
    border-color: #c7bfb5;
  }
`;
export const MyImage = styled.img`
  height: 34vh;
  width: 42vh;
`;

export const ProjectImage = styled.img`
  height: 48vh;
  width: 100%;
  margin-bottom: 1em;
  @media (max-width: 900px) {
    height: 24vh;
    width: 36vh;
  }
`;
export const Text = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  font-family: "Cantata One", serif;
  margin: 1em;
  margin-bottom: 0.5em;
  &:hover {
    color: #b30000;
  }
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const Icon = styled.img`
  height: 12vh;
  width: 12vh;

  @media (max-width: 900px) {
    height: 10vh;
    width: 10vh;
  }
`;
export const SideDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
`;

export const SideDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1em;
  padding-top: 1em;
  min-height: 70vh;
  width: 26%;
  background-color: #e9e5e2;
  @media (max-width: 900px) {
    width: 90%;
    justify-content: flex-start;
  }
`;


