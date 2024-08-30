import styled from "styled-components";
import { animated } from 'react-spring';


// Styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100vw;
  background-color: #ebebeb;
  position: relative;
`;

// Styled component for the animated image
const AnimatedImage = styled(animated.img)`
  width: 25vw;
  height: auto;
  transition: transform 0.1s ease-out;
  cursor: pointer;
`;

// Styled component for the text overlay
const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  color: black;
`;

// Styled component for the links
const Link = styled.a`
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: black;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, AnimatedImage, TextOverlay, Link };