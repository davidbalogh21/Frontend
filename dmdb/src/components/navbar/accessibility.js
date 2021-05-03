import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Button = styled.a`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid #FF1D36;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: #fff;
    background-color: #FF1D36;
  }
`;


export function Accessibility() {
  return (
    <AccessibilityContainer>
      <Button href="https://www.3ss.tv/" target="blank">3SS</Button>
    </AccessibilityContainer>
  );
}