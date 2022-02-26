import styled from "styled-components";

export const PageWrapper = styled.div`
	margin: 2rem;
`

export const Poster = styled.img`
  max-width: 22.5rem;
  display: inline-block;
  box-shadow: 0 5px 10px -3px rgba(35, 35, 35, 1);
  margin: auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 2.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;


export const ReviewTitle = styled.div`

`;