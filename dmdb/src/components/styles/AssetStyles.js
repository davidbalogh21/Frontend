import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3em;
  color: black;
  padding-top: 10px;
  margin-bottom: 5px;
`;

export const Date = styled.p`
  font-size: 1.3em;
  color: gray;
`;

export const Plot = styled.p`
  font-size: 1.2em;
  color: black;
  padding-top: 10px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 2em;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const TextBox = styled.div`
  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`;

export const ActorBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3em;
  flex-wrap: wrap;
`;

export const Poster = styled.img`
  max-width: 350px;
  margin: 2em;
  display: inline-block;
  box-shadow: 0 5px 10px -3px rgba(35, 35, 35, 1);

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`;

export const ActorPhoto = styled.img`
  max-width: 150px;
  margin: 15px;
  box-shadow: 0 5px 10px -3px rgba(35, 35, 35, 1);

  @media (max-width: 768px) {
    max-width: 75px;
  }
`;

export const CompanyPhoto = styled.img`
  max-width: 100px;
  margin: 15px;

  @media (max-width: 768px) {
    max-width: 35px;
  }
`;

export const ActorName = styled.h4`
  text-transform: uppercase;
  text-align: center;
  padding-right: 1em;
`;

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  text-decoration: none;
  text-align: center;
  background-color: ${(props) => props.buttonColor};
`;

export const ImportantText = styled.h1`
  width: 100%;
  display: block; 
`