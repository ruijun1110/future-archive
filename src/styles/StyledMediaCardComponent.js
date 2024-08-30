import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;

export const BlackLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid black;
  margin: 0.5vmin 0;
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  font-family: 'Victor Mono', monospace;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 1vmin 0;
`;

export const Title = styled.p`
  font-size: 2.3vmin;
  font-weight: bold;
  margin: 0 1.5vmin 0 0;
`;

export const ToolContainer = styled.div`
  display: inline-block;
  padding: 0.5vmin 1vmin;
  border-radius: 15px;
  font-size: 1vw;
  font-weight: bold;
  border: 1px solid black;
  color: black;
  white-space: nowrap;
`;

export const MediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 60%;
  height: 100%;
  margin: 0 auto;
`;

export const MediaContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3vmin;   
`;

export const Video = styled.video`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const YouTubeEmbed = styled.iframe`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  max-width: 100%;
  max-height: 100%;
  border: none;
`;

export const Image = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 4vmin;
  color: black;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  ${props => props.left ? 'left: -15vmin;' : 'right: -15vmin;'}
`;