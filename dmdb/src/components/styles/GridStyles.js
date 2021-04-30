import styled from "styled-components";


export const CategoryContainer = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, ${props => props.repeatValue});
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
  position: relative;
  padding-bottom: 20px;

  img {
    display: block;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  h2 {
    font-weight: 600;
    padding: 0px 10px;
    text-align: center;
    font-size: 1.5em;
    text-transform: uppercase;
    padding-bottom: 2em;
    line-height: 1em;
  }

  h3 {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
  }

  &:hover {
    transition: 0.4s;
    box-shadow: 0 5px 10px -3px rgba(165, 155, 155, 0.3);
  }
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin: 1em 2em;
`