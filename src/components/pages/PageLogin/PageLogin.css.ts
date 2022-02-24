import styled from 'styled-components';
import {Link} from "react-router-dom";

export const PageWrapper = styled.div`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 91vh;
  width: 100%;
  padding-top: 2.5rem;
`;

export const Form = styled.form`
    width: 22.5rem;
    padding: 1.5rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background: #fff;
`;

export const FormPictureWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  top: -5rem;
  height: 7.5rem;
  width: 7.5rem;
`

export const FormPicture = styled.img`
  height: 7.5rem;
  width: 7.5rem;
`

export const FormTitle = styled.div`
  text-align: center;
  margin: -2.5rem 0 2rem 0;
  font-weight: bold;
  font-size: 2rem;
`;

export const Subtitle = styled.h2`
  text-align: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`

export const FormInput = styled.input`
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",serif;
  text-align: left;
  width: 100%;
  padding: 0.7rem;
  background: #e0dede;
  color: #383737;
  font-weight: 400;
  font-size: 1rem;
  outline: none;
  border-radius: 0.4rem;
  border: 1px solid #DED6D6;
  margin-bottom: 1.25rem;
  
  ::placeholder {
    color: #a8a7a7;
  }
  
  :focus::placeholder {
    color: transparent;
  }
`

export const FormButton = styled.button`
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",serif;
  width: 100%;
  background-color: #FF1D36;
  color: #ECECEC;
  box-shadow: inset 0 0 10px #b5b1b1;
  font-size: 1.2rem;
  padding: 0.7rem 0;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-bottom: 1.25rem;
`

export const FormLinkText = styled.span`
  font-size: 0.9rem;
  display: block;
  margin-bottom: 1.25rem;
  
  &:first-of-type {
    margin-bottom: 0.5rem;
  }
`

export const FormLink = styled(Link)`
  text-decoration: none;
  color: rgb(211,15,15);
  
  &:hover {
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.span`
  color: #ff0033;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`

export const DescriptionText = styled.div`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 2rem;
`