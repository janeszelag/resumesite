import styled from "styled-components";

//styles for App.js

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 10%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-top: 30%
  }
 
  align-items: center;
`;

export const StyledDiv1 = styled.div`
  display: flex;
  height: 35vh;
  width: 100%;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #faf9f8;
  text-align: center;
  border-bottom: solid;
  border-bottom-style: double;
  border-bottom-color: #000000;
  border-width: 8px;
  @media (max-width: 900px) {
    justify-content: center;
    text-align: center;
  }
`;

export const NameDiv = styled.div`
  display: flex;
  text-align: center;
  margin: 4px;
  @media (max-width: 768px) {
    width: 80%;
    margin: 10px;
  }
`;

export const SideTitle = styled.img`
  width: 220px;
  height: 180px;
  margin-left: 1em;
  margin-right: 1em;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Name = styled.h1`
  color: #000000;
  font-size: 75px;

  font-weight: 400;
  margin: 2px;
  padding: 2px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 60px;
    line-height: 60px;
  }
`;

export const StyledDiv2 = styled.div`
  width: 100%;
  min-height: 70vh;


  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
 
`;

export const LinksDiv = styled.div`
  padding: 0px;
  width: 50%;
  height: 9vh;
  display: flex;
  border-radius: 3px;
  background-color: #9c9791;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%
  }

`;

export const StyledDiv3 = styled.div`
  width: 100%;
  min-height: 20vh;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #c7bfb5;

`;

// styles for Menu.js

export const OuterDiv = styled.div`
width 70%;
@media (max-width: 768px) {
  width 90%;
}
`;
