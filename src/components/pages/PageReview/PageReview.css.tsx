import styled, {css} from "styled-components";
import {Form, FormButton} from "../PageLogin/PageLogin.css";
import {FormInput, InputWrapper} from '../PageLogin/PageLogin.css'

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


export const ReviewContainer = styled.div`
  width: 100rem;
  padding: 2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background: #fff;
  margin-left: 2rem;
`

export const ReviewTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`

export const ReviewUser = styled.div`
  margin-left: 2rem;
  font-size: 0.9rem;
  color: dimgrey;
  margin-bottom: 2rem;
`

export const ReviewText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 5rem;
`

export const RatingContainer = styled.div`
  width: 8rem;
  height: 8rem;
  position: relative;
  bottom: 0;
  left: 0;
`

export const CommentTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  display: block;
  margin: 2rem;
`

export const CommentSectionContainer = styled.div`
  border-radius: 0.8rem;
  padding: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  background: #fff;
  margin: 0 2rem;
`

export const CommentContainer = styled.div`
  margin: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background: #e8e6e6;
`

export const CommentUser = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`

export const CommentDate = styled.div`
  font-size: 0.9rem;
  color: dimgrey;
  margin: -0.5rem 0 1rem 2rem;
`

export const CommentText = styled.div`
  font-size: 1rem;
  font-weight: normal;
`

export const CommentForm = styled(Form)`
  width: 100%;
`

export const CommentInputWrapper = styled(FormInput)`
  width: 92%;
`

export const EmptyCommentText = styled.div`
  margin: 1.5rem;
  font-size: 1.1rem;
`

export const CommentButton = styled(FormButton)<{notLoggedIn: boolean}>`
  width: 8%;
  
  ${(props) => props.notLoggedIn && css`
    cursor: not-allowed;
  `}
`