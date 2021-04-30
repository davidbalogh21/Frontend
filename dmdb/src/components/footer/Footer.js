import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import {FaFacebookF, FaGithub, FaInstagram} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#FF1D36", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        DMDB: The Place Where Everyone Can Find What to Watch Tonight!
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Contact Me</Heading>
            <FooterLink href="https://www.facebook.com/david.balogh.1217/" target="blank">
              <FaFacebookF/>
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/davidbalogh21/"  target="blank">
            <FaInstagram/>
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
            
            </FooterLink>
            <FooterLink href="https://github.com/davidbalogh21"  target="blank">
            <FaGithub/>
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span>
            </FooterLink>
            <FooterLink href="mailto:david_balogh21@yahoo.com"  target="blank">
              <MdEmail/>
                <span style={{ marginLeft: "10px" }}>
                  Email
                </span>
            </FooterLink>
          </Column>
          <Column>
          <Heading>3SS</Heading>
          <FooterLink href = "https://3ready.tv/">Products</FooterLink>
          <FooterLink href = "https://3ready.tv/">Services</FooterLink>
          <FooterLink href = "https://3ready.tv/">Contact</FooterLink>
          <FooterLink href = "https://3ready.tv/">Careers</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer