import styled from "styled-components";


//styles for App.js

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
`;

export const StyledDiv1 = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #faf9f8;
  
  border-bottom: solid;
  border-color: #d8d2cb;
  border-width: 3px;
`;

//font-family: 'Girassol', cursive;
export const Name = styled.h1`
  color: #000000;
  font-size: 6em;
  text-align: center;
  font-weight: 400;
  
 

  @media (max-width: 768px) {
    font-size: 4em;
    margin-left: 0em;
    margin-bottom: 0em;
  }
`;

export const StyledDiv2 = styled.div`
  width: 100%;
  min-height: 80%;
  margin-top: 2em;
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


// styles for Menu.js

export const OuterDiv = styled.div`
width 70%;
@media (max-width: 768px) {
  width 90%;
}
`;
