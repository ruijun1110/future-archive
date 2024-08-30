import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Styled component for the navbar
const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f4;
  font-family: 'Courier New', Courier, monospace;
  color: black;
  font-size: 2vmin;
`;

// Styled component for the navigation tabs
const Tab = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  padding: 1vh 3vw 1vh 2vw;
  cursor: pointer;
  font-family: "Familjen Grotesk", sans-serif;
  font-size: 2.5vmin;
  background-color: ${({ isActive }) => isActive ? '#ebebeb' : '#f5f5f4'};
  color: black;
  text-decoration: none;
  &.active {
    background-color: #ebebeb;
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);
    text-decoration: line-through;
  }
  &:hover {
    text-decoration: ${({ isActive }) => isActive ? 'none' : 'line-through'};
  }
`;

// Styled component for the left section
const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

// Styled component for the right section
const RightSection = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2vw;
  font-size: 2.5vmin;
  font-family: "Familjen Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export { StyledNavBar, Tab, LeftSection, RightSection };