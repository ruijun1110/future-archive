import styled, { keyframes } from 'styled-components';

// Define keyframes for scrolling text animation
const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-200%);
  }
`;

// Styled component for the footer
const StyledFooter = styled.footer`
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 1vh 0;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  font-size: 3vmin;
`;

// Styled component for the scrolling text
const ScrollingText = styled.div`
  white-space: nowrap;
  display: block;
  animation: ${scroll} 20s linear infinite;
  font-family: "Familjen Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export { StyledFooter, ScrollingText };