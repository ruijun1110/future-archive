import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  max-height: 80vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 4vmin;
  max-width: 80vw;
  max-height: 80vh; // Limit the maximum height
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1vmin;
  font-family: 'Victor Mono', monospace;
`;

export const Title = styled.h2`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin: 0;
`;

export const DateRange = styled.span`
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  color: #555;
`;

export const BlackLine = styled.div`
  border-top: 1px solid black;
  margin: 0 0 1vh 0;
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  min-height: 0;
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  padding-right: 2vmin;
  min-height: 0;
`;

export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: auto;
`;

export const DescriptionText = styled.div`
  text-align: start;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  line-height: 1.4;
  margin-bottom: 2vmin;
  margin-left: 0.5vmin;
  overflow-wrap: break-word;
  flex-grow: 1;
  font-family: 'Victor Mono', monospace;
`;

export const MediaArea = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;
  height: 100%;
  position: relative;
  ${props => props.left ? 'left: 0;' : 'right: 0;'}
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: clamp(1rem, 3vw, 2rem);
  cursor: pointer;
  color: ${props => props.disabled ? 'gray' : 'black'};
  padding: 0;
  &:disabled {
    cursor: not-allowed;
  }
`;