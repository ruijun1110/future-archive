// src/components/Slider.js
import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../img/gray-folder.png';
import img2 from '../img/blue-folder.webp';
import img3 from '../img/green-folder.png';

const Container = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  width: 100%;
  perspective: 1000px;
  height: 600px;
  position: relative;
  background-color: #ebebeb;
`;
const ImageContainer = styled.div`
  display: flex;
  flex: 3;  // Take up 3/4 of the space
  justify-content: center;
  perspective: 1000px;
  position: relative;
`;
const Image = styled.img`
  width: 300px;
  height: 250px;
  transition: transform 0.3s ease-out, left 0.3s ease-out;
  transform: ${({ index, hoverIndex }) =>
    `translateY(${index === hoverIndex ? -20 : 0}px)`};
  position: absolute;
  bottom: 0;
  top: 0;
  margin-bottom: auto;
  margin-top: auto;
`;

const InfoBar = styled.div`
  flex: 1;  // Take up 1/4 of the space
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  background-color: #e3e3e3;
  color: black;
  text-align: center;
`;

const images = [
  { src: img1, text: 'OpenHome Pepper' },
  { src: img2, text: 'Image 2 Description' },
  { src: img3, text: 'Image 3 Description' },
  { src: img1, text: 'Repeat Image 1' },
  { src: img2, text: 'Repeat Image 2' },
  { src: img3, text: 'Repeat Image 3' },
];

const FileSlider = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <>
      <Container>
        <ImageContainer>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              index={index}
              hoverIndex={hoverIndex}
              style={{
                bottom: `calc(${index * 100}px)`,  // Adjusted for general positioning
                zIndex: images.length - index,
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            />
          ))}
        </ImageContainer>
        <InfoBar>{images[hoverIndex] ? images[hoverIndex].text : 'Welcome'}</InfoBar>
      </Container>
    </>
  );
};

export default FileSlider;
