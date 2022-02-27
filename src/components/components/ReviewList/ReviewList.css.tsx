import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {FormButton} from "../../pages/PageLogin/PageLogin.css";

export const ReviewsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
`

export const ReviewContainer = styled.div`
  height: 15rem;
  margin: 1.5rem 3rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 5px 10px -3px rgb(35 35 35);
  border-radius: 1rem;
`

export const ReviewTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: underline red;
`

export const ReviewUser = styled.p`
    margin-top: -1rem;
`

export const ReviewDate = styled.div`
  margin-bottom: 1rem;
`

export const ReviewRatingText = styled.div`
  margin-bottom: 1rem;
  font-weight: 500;
`

export const ReviewLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export const ReviewRatingContainer = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
`
