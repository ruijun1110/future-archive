import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled component for the main container
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  perspective: 1000px;
  height: 95vh;
  position: relative;
  background-color: #ebebeb;
`;

// Styled component for the image container
const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: ${({ clickedIndex }) => clickedIndex !== -1 ? '15%' : '40%'};
`;

// Styled component for the images
const Image = styled.img`
  width: 18vmin;
  height: 15vmin;
  transition: transform 0.3s ease-out, left 0.3s ease-out;
  transform: ${({ index, hoverIndex, clickedIndex }) =>
    index === clickedIndex ? 'rotateY(-30deg) translateX(0%) scale(0.55)' :
      clickedIndex !== -1 ? 'rotateY(-30deg) translateY(15%) scale(0.5)' :
        index === hoverIndex ? `rotateY(-10deg) translateX(20%) translateY(-60%)` :
          `rotateY(-25deg) translateY(-40%) translateX(${index > hoverIndex ? 0 : 0}%)`};
  position: relative;
  margin-left: ${({ index, clickedIndex }) => clickedIndex === -1 ? '-3vmin' : '-6vmin'};
  margin-right: ${({ index, clickedIndex }) => clickedIndex === -1 ? '-3vmin' : '-6vmin'};
  transform-origin: bottom center;
`;

// Styled component for the body container
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 95%;
  width: 100%;
`;

// Styled component for the title bar
const TitleBar = styled.div`
  padding-top: ${({ clickedIndex }) => clickedIndex !== -1 ? '10vh' : '20vh'};
  padding-bottom: ${({ clickedIndex }) => clickedIndex !== -1 ? '5vh' : '15vh'};
  display: flex;
  align-items: center;
  justify-content: ${({ clickedIndex }) => clickedIndex !== -1 ? 'flex-start' : 'center'};
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 650;
  font-style: normal;
  background-color: #ebebeb;
  color: black;
  font-size: ${({ clickedIndex }) => clickedIndex !== -1 ? '4vmin' : '8vmin'};
  transition: all 0.2s ease-out;
  transform: ${({ clickedIndex }) => clickedIndex !== -1 ? 'translateX(9.5%)' : 'translateX(0%)'};
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: ${({ clickedIndex }) => (clickedIndex !== -1 ? '5vmin' : '10vmin')};
    padding-top: 8vh;
    padding-bottom: 18vh;
  }
`;

// Styled component for the card display area
const CardDisplayArea = styled(motion.div)`
  display: flex;
  gap: 5vmin;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 20%;
  transform: translateY(-50%);
  z-index: 10;
`;


const ProjectArea = styled(motion.div)`
  position: relative;
  width: 100%;
`;


export { Container, ImageContainer, Image, BodyContainer, TitleBar, CardDisplayArea, ProjectArea };