import styled from 'styled-components';


export const CardWrapper = styled.div`
  display: grid;
  margin: 5rem 7.5rem;
  grid-template-columns: repeat(auto-fill, 22.5rem);
  justify-content: space-around;
  grid-gap: 2rem;
  flex-grow: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 17.5rem);
  }
`;

export const Card = styled.div`
  height: 45rem;
  width: 22.5rem;
  border-radius: 0.4rem;
  background-color: #f0f0f0;
  box-shadow: 0 .5rem 1rem -0.3rem rgba(35, 35, 35, 0.6);
  color: black;
  transition: 0.4s;
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 17.5rem;
    height: 40rem;
  }

  img {
    display: block;
    width: 100%;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }

  h2 {
    width: 90%;
    height: 10rem;
    margin: 2rem auto;
    font-weight: 600;
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    line-height: 1.5rem;
  }

  h3 {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
  }

  &:hover {
    transition: 0.4s;
    box-shadow: 0 0.5rem 1rem -0.3rem rgba(165, 155, 155, 0.3);
  }
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 2rem;
`;