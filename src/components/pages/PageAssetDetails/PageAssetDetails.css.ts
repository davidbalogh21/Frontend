import styled from 'styled-components';

export const PageWrapper = styled.div`
	margin: 2rem;
`

export const Title = styled.h1`
  font-size: 3rem;
  color: black;
  padding-top: 0.1rem;
  margin-bottom: 0.5rem;
`;

export const Date = styled.p`
  font-size: 1rem;
  color: gray;
`;

export const Plot = styled.p`
  font-size: 1.2rem;
  color: black;
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 2.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const TextBox = styled.div`
  max-width: 50rem;
  margin: auto 1rem;
`;

export const ActorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 13rem);
  justify-content: flex-start;
  margin: 1.25rem;
  flex-wrap: wrap;
`;

export const Poster = styled.img`
  max-width: 22.5rem;
  display: inline-block;
  box-shadow: 0 5px 10px -3px rgba(35, 35, 35, 1);
  margin: auto 2rem;

  @media (max-width: 768px) {
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

export const Button = styled.a <{ isYoutube?: boolean }>`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  color: white;
  border: 2px solid black;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.isYoutube ? '#FF1F00' : '#F5C519'};
`;

export const ImportantText = styled.h1`
  width: 100%;
  display: block;
`;

export const ReviewButton = styled.button`
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",serif;
  width: 100%;
  background-color: #FF1D36;
  color: #ECECEC;
  box-shadow: inset 0 0 10px #b5b1b1;
  font-size: 1.2rem;
  padding: 0.7rem 0;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-bottom: 1.25rem;
  display: block;
`;

export const DataButton = styled(ReviewButton)<{isYoutube?: boolean}>`
  width: 11rem;
  display: inline-block;
  background-color: ${(props) => props.isYoutube ? '#FF1F00' : '#F5C519'};
  margin-right: 2.4rem;
  text-decoration: none;
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  color: white;
`