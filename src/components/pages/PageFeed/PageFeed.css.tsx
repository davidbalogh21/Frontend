import styled, {css} from 'styled-components'
import {ActivityWrapper, ReviewCardRatingText} from "../../components/UserActivity/UserActivity.css";

export const FeedWrapper = styled(ActivityWrapper)`
  grid-template-columns: repeat(auto-fill, 50rem);
`

export const UserWrapper = styled(ReviewCardRatingText)`
  a {
    text-decoration: none;
    color: #FF1D36;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const SelectFeedWrapper = styled.div` 
  height: 4rem;
  width: 100%;
  display: flex;
  background-color: white;
  padding-top: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.4rem;
`

export const LeftFeedSelection = styled.p<{isActive?: boolean}>`
  flex-grow: 1;
  position: relative;
  
  ${(props => props.isActive && css`
      color: #FF1D36;
  `)}
  
  &:after {
    content: '';
    position: absolute;
    width: 8rem;
    transform: scaleX(0) translateX(-50%);
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #FF1D36;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  &:hover {
    cursor: pointer;
    
    &:after {
      transform: scaleX(1) translateX(-50%);
      transform-origin: bottom left;
    }
  }
`

export const RightFeedSelection = styled(LeftFeedSelection)`
  
  &:after {
    width: 7rem;
  }
`;
