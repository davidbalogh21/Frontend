import styled from 'styled-components'
import {FormButton, FormPicture, FormPictureWrapper, FormTitle, PageWrapper} from "../PageLogin/PageLogin.css";

export const ProfilePageWrapper = styled(PageWrapper)`
  height: auto;
`;

export const ProfileDataWrapper = styled.div`
    margin-top: 2.5rem;
    width: 35rem;
    padding: 1.5rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    background: #fff;
`;

export const ProfilePictureWrapper = styled(FormPictureWrapper)`
  height: 10rem;
  width: 10rem;
`

export const ProfilePicture = styled(FormPicture)`
  height: 10rem;
  width: 10rem;
`

export const ProfileTitle = styled(FormTitle)`
    margin-top: -3rem;
`

export const ProfileFollowers = styled(FormTitle)`
  font-weight: normal;
  font-size: 1rem;
  margin-top: 1rem;
`

export const InfoTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`

export const InfoWrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`

export const InfoData = styled.div`
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
`

export const LogoutButton = styled(FormButton)`
  
`

export const FollowData = styled.span`
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ModalText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: auto;
  background-color: whitesmoke;
  border: 2px solid #000;
  padding: 2.5rem 5rem;
`

export const ModalTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`

export const ModalLinkToProfile = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  display: block;
  color: darkslategrey;
  
  &:hover {
    text-decoration: underline;
  }
`
