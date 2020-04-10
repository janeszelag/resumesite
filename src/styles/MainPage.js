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

`
export const ProjectsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1em;
height: 70vh;
width: 44%;
border: solid;
border-color: #000000;
border-width: 2px;
@media (max-width: 900px) {
  width: 90%;

}

`
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
`;

export const StyledLink = styled(Link)`

  text-decoration: underline;
  text-decoration-color: #000000;
  

`

export const BioDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1em;
height: 70vh;
width: 26%;
border: solid;
border-color: #000000;
border-width: 2px;
@media (max-width: 900px) {
  width: 90%;

}

`
export const SideDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1em;
min-height: 70vh;
width: 26%;
border: solid;
border-color: #000000;
border-width: 2px;
@media (max-width: 900px) {
  width: 90%;

}


`