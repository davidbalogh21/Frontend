import styled from "styled-components"

export const Gif = styled.img`
    width: 25vw;
`
export const Wrapper = styled.div`
    text-align: center;
    display: block;
    margin: 5vh auto;
`

export const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 25px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #FF1D36;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #FF1D36;
  }
`;