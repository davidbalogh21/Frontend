import styled from "styled-components";
import {Form, FormLinkText, FormTitle} from "../PageLogin/PageLogin.css";
import Rating from '@mui/material/Rating';

export const PageWrapper = styled.div`
  margin: 2rem;
`

export const Poster = styled.img`
  max-width: 24rem;
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


export const ReviewForm = styled(Form)`
  width: 100rem;
`

export const ReviewFormDescription = styled.textarea`
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", serif;
  text-align: left;
  width: 100%;
  padding: 0.7rem;
  background: #e0dede;
  color: #383737;
  font-weight: 400;
  font-size: 1rem;
  height: 10rem;
  outline: none;
  border-radius: 0.4rem;
  border: 1px solid #DED6D6;
  margin-bottom: 1.25rem;
  resize: vertical;

  ::placeholder {
    color: #a8a7a7;
  }

  :focus::placeholder {
    color: transparent;
  }
`

export const ReviewFormTitle = styled(FormTitle)`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

  a {
    text-decoration: none;
    color: dimgrey;
  }
`;

export const ReviewMovieTagline = styled(FormLinkText)`
  text-align: center;

  &:first-of-type {
    margin-bottom: 1.5rem;
  }
`

export const ReviewMovieRating = styled(Rating)`
  margin-bottom: 1.25rem;
`