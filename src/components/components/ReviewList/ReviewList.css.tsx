import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {FormButton} from "../../pages/PageLogin/PageLogin.css";

export const ReviewsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 30rem);
`

export const ReviewContainer = styled.div`
  margin: 1.5rem 3rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 5px 10px -3px rgb(35 35 35);
  border-radius: 1rem;
`

export const ReviewTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: underline red;
`

export const ReviewUser = styled.p`
  text-align: center;
  margin-top: -1rem;
  margin-left: 1rem;
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

export const ReviewPicture = styled.img`
  width: 100%;
`

export const AddReviewButton = styled(FormButton)`
  width: auto;
  display: inline;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
`

export const EmptyFeedMessage = styled.div`
  margin-top: 10rem;
  width: 100%;
  height: 83vh;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  text-align: left;

  a {
    color: #FF1D36;
    display: inline;
  }
`