import Card from "@material-ui/core/Card";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  background-color: #d7dcd0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
  height: 48vh;
  display: flex;

  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

export const StyledCharliePic = styled.img`
height: 39vh;
  width: 38vh;
  border-radius: 2%;

  @media (max-width: 768px) {
    height: 39vh;
    width: 38vh;
  }
  &:hover {
    transform: translateY(-4px);
    box-shadow: 10px 10px 5px grey;
  }
`

export const CharlieDiv = styled.div`
width: 90%;
`