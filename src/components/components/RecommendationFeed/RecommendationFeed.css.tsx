import styled from 'styled-components'

export const RecommendationFeedWrapper = styled.div`
  margin: 2rem 6rem;
`

export const RecommendationTitle = styled.div`
  font-size: 1.2rem;
  color: black;
  margin: 2rem 0 1rem 5rem;
  
  span {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #FF1D36;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
