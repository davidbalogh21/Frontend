import styled from 'styled-components';
import {FormButton} from "../PageLogin/PageLogin.css";

export const BackgroundContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const CategoryContainer = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, 23vw);
  place-content: center;
  gap: 2rem;
  margin: 5vh 10vw;
`;

export const Card = styled.div`
  height: 100%;
  border-radius: 4px;
  background-color: #f0f0f0;
  box-shadow: 0 5px 10px -3px rgba(35, 35, 35, 0.6);
  color: black;
  transition: 0.4s;

  img {
    width: 100%;
    height: 50%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  h2 {
    padding: 5px 20px;
    text-transform: uppercase;
    text-align: left;
  }

  h3 {
    padding-left: 20px;
  }

  ul {
    padding-left: 40px;
    margin-bottom: 30px;
  }

  &:hover {
    transition: 0.4s;
    box-shadow: 0 5px 10px -3px rgba(165, 155, 155, 0.3);
  }
`;

export const CategoryTitle = styled.h1`
  text-decoration: underline;
  text-underline: #FF1D36;
  color: black;
  margin-left: 5rem;
`

export const CategoryButton = styled(FormButton)`
  width: 10%;
  margin: 2.5rem 0 1.25rem 5rem;
`

