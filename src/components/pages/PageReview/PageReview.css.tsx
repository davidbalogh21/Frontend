import styled, {css} from "styled-components";
import {Form, FormButton} from "../PageLogin/PageLogin.css";
import {FormInput, InputWrapper} from '../PageLogin/PageLogin.css'
import { Button } from "../../styles/AccessibilityStyles.css"
import IconButton from "@mui/material/IconButton";

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
  position: relative;
`

export const ReviewTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`

export const ReviewUser = styled.div`
  margin-left: 2rem;
  font-size: 1.1rem;
  color: dimgrey;
  margin-bottom: 2rem;
  line-height: 2rem;

  a {
    text-decoration: none;
    color: #FF1D36;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const ReviewText = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 2rem;
`

export const RatingContainer = styled.div`
  margin-bottom: 2rem;
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
  position: relative;
`

export const CommentSentiment = styled.div<{isNegative: boolean}>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ddd;
  border: ${(props) => props.isNegative ? '#FF1D36' : 'green'} 2px solid ;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 16px;
`

export const NegativeCommentLayer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const CommentUser = styled.div`
  font-size: 1.4rem;
  font-weight: 400;

  a {
    text-decoration: none;
    color: #FF1D36;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
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

export const CommentInputWrapper = styled.div<{isDisabled: boolean;}>`
  display: inline;
  ${props => props.isDisabled && css`
    cursor: not-allowed;
  `}
`

export const CommentInput = styled(FormInput)<{isDisabled: boolean;}>`
  width: 92%;
  ${props => props.isDisabled && css`
    pointer-events: none;
  `}
`

export const EmptyCommentText = styled.div`
  margin: 1.5rem;
  font-size: 1.1rem;
`

export const CommentButton = styled(FormButton)<{ notLoggedIn: boolean }>`
  width: 8%;

  ${(props) => props.notLoggedIn && css`
    pointer-events: none;
  `}
`

export const LikeNumber = styled.span`
  font-size: 1.2rem;
  font-weight: bolder;
  padding-top: 4rem;
`

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const FollowButton = styled.button<{ isFollowed: boolean }>`
  background-color: ${(props) => props.isFollowed ? '#FF1D36' : 'white'};
  color: ${(props) => props.isFollowed ? 'white' : '#222'};
  outline: 0;
  padding: 0.4rem 0.8rem;
  font-size: 13px;
  font-weight: 600;
  border-radius: 3rem;
  border: 0.18rem solid #FF1D36;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 1.5rem;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",serif;

  &:hover {
    background-color: ${(props) => !props.isFollowed ? '#FF1D36' : 'white'};
    color: ${(props) => !props.isFollowed ? 'white' : '#222'};
  }
`


export const LikeIconButton = styled(IconButton)<{isDisabled: boolean}>`
  ${props => props.isDisabled && css`
      pointer-events: none;
  `}
`