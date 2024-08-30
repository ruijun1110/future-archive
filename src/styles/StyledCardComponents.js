import styled, { css } from 'styled-components';

const CardContainer = styled.div`
  width: 90%;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  display: flex;
  position: relative;
  flex-direction: column;
  border: 2px solid black;
  z-index: 2;
  background-color: #ebebeb;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    ${({ isClicked }) => !isClicked && css`
      transform: translateX(-5px) translateY(-5px);
    `}
  }

  ${({ isClicked }) => isClicked && css`
    z-index: 1;
    transform: translateX(5px) translateY(5px);
  `}

  @media (min-width: 768px) {
    width: 20vw;
    max-width: none;
  }
`;

const BlackShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  transform: translateX(5px) translateY(5px);

  ${({ isClicked }) => isClicked && css`
    z-index: 2;
    transform: translateX(0px) translateY(0px);
  `}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  color: white;
  padding: 20px;
  box-sizing: border-box;
`;

const BlackTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5vw;
  }
`;

const BlackText = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 0.8rem;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: semibold;

  @media (min-width: 768px) {
    font-size: 1.1vw;
  }
`;

const BlackParagraph = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 0.7rem;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    font-size: 1vw;
  }
`;

const LearnMoreButton = styled.a`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  align-self: center;

  &:hover {
    background-color: #ddd;
  }

  @media (min-width: 768px) {
    font-size: 1vw;
  }
`;

const Header = styled.div`
  padding: 0;
  background-color: #ebebeb;
`;

const Row = styled.div`
  display: flex;
  border-bottom: 2px solid black;
`;

const Cell = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 2px solid black;
  font-size: 0.8rem;

  &:first-child {
    flex: 1;
  }

  &:last-child {
    flex: 3;
    border-right: none;
  }

  @media (min-width: 768px) {
    font-size: 1vw;
  }
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  CardContainer,
  BlackShape,
  BlackTitle,
  BlackText,
  BlackParagraph,
  LearnMoreButton,
  Header,
  Row,
  Cell,
  ImageContainer,
};