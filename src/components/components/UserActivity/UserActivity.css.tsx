import styled from 'styled-components'

export const ActivityWrapper = styled.div`
  margin-top: 2.5rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 25rem);
  justify-content: space-evenly
`

export const ActivityTitle = styled.div`
  margin-top: 3.5rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
`

export const ReviewCardWrapper = styled.div`
  display: flex;
  box-shadow: 0 .5rem 1rem -0.3rem rgba(35, 35, 35, 0.6);
  margin-bottom: 2.5rem;
`

export const ReviewCardTitle = styled.div`
  font-size: 1.2rem;
  margin: 1rem 1rem;
  font-weight: 500;
`

export const ReviewCardDate = styled.div`
  font-size: 1rem;
  margin: 0.5rem 1rem;
  font-weight: 400;
  color: dimgrey;
`

export const ReviewCardRatingText = styled.div`
  margin: 1rem 0 1rem 1rem;
`

export const ReviewRatingContainer = styled.div`
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`

export const IconContainer = styled.div`
  margin-left: 1rem;
`

export const EmptyMessage = styled.div`
  text-align: center;
  font-size: 1.6rem;
`