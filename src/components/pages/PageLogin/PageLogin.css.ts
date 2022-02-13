import styled from 'styled-components';

export const PageWrapper = styled.div`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  width: 100vw;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Subtitle = styled.h2`
  text-align: center;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const AdditionalInfo = styled.span`
  font-size: 12px;
`;

export const SocialLink = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;