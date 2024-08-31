import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  display: inline-block;
  padding: 0.5vmin 1vmin;
  margin: 0.5vmin 0.5vmin 0.5vmin 0;
  border-radius: 15px;
  font-size: 1.5vmin;
  font-weight: bold;
  white-space: nowrap;
  font-family: 'Victor Mono', monospace;
  ${({ color, variant }) =>
    variant === 'filled'
      ? `
        background-color: ${color};
        color: white;
        border: 1px solid black;
      `
      : `
        background-color: transparent;
        color: ${color};
        border: 1px solid ${color};
      `
  }
  ${({ clickable }) =>
    clickable &&
    `
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    `
  }
`;

const Tag = ({ text, color, variant, githubUrl }) => {
  const isGithub = text.toLowerCase() === 'learn more';

  const handleClick = () => {
    if (isGithub) {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <TagContainer color={color} variant={variant} clickable={isGithub} onClick={handleClick}>
      {text}
    </TagContainer>
  );
};

export default Tag;