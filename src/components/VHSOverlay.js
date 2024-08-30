// VHSOverlay.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const jitter = keyframes`
  0% { transform: translate(0, 0); }
  10% { transform: translate(-5%, 0); }
  20% { transform: translate(5%, 0); }
  30% { transform: translate(-5%, 0); }
  40% { transform: translate(5%, 0); }
  50% { transform: translate(0, 0); }
  100% { transform: translate(0, 0); }
`;

const VHSOverlay = styled.div`
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    black 0px, black 1px,
    transparent 1px, transparent 4px
  );
  opacity: 0.1;
  // animation: ${jitter} 0.5s infinite;
  z-index: 1000;  // Ensure it covers everything else

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/png;base64,...'); // Base64 encoded noise image
    opacity: 0.05;
    mix-blend-mode: overlay;
  }
`;

const VHSComponent = () => {
  return <VHSOverlay />;
};

export default VHSComponent;
