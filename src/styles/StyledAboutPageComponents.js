import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 10vh);
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  font-family: 'Victor Mono', monospace;
  height: 100%;
  padding: 3vh;
`;

const Content = styled.div`
  width: 100%;
  overflow-y: auto;
  font-family: 'Familjen Grotesk', sans-serif;
  flex: 1;
  padding: 2vh;
  font-size: 3vmin;
  
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ebebeb;
  font-family: 'Familjen Grotesk', sans-serif;
  justify-content: flex-start;
  padding: 2vh;
  font-size: 3vmin;
  width: 100%;
  overflow-y: auto;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const SidebarHeader = styled.div`
  margin-bottom: 2vh;
  margin-top: 2vh;
  font-size: 4vmin;
  font-family: 'Unbounded', sans-serif;
  text-align: start;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5vh 0;
  border-top: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ active }) => (active ? '#cccccc' : 'transparent')};
  
  &:hover {
    background-color: #cccccc;
  }
`;

const SidebarStaticItem = styled(SidebarItem)`
  cursor: default;
  &:hover {
    background-color: transparent;
  }
`;

const ItemNumber = styled.div`
  margin-right: 2vw; /* Space between the number and the title */
  font-weight: bold;
`;

const ItemTitle = styled.div`
  text-align: left;
`;

const AboutTextContainer = styled.div`
  width: 100%;
  text-align: start;
  line-height: 1.5;
  font-size: 1.5vmin;
  overflow-y: auto;

  
`;

const AboutTitle = styled.h2`
  font-size: 6vmin;
  font-weight: bold;
  color: black;
  width: 100%;
  font-family: "Londrina Outline", sans-serif;
  margin-block-end: 0;
  margin-block-start: 0;
`;

const AboutText = styled.p`
  margin-block-start: 0;
  font-size:2.5vw;
  padding: 0 1vw;
  font-weight: semi-bold;
  margin-bottom: 2vh;
  text-indent: 2vw;
  text-align: justify;
  line-height: 5vh;
  font-family: "Nanum Pen Script", cursive;
  font-weight: 400;
  font-style: normal;
`;

const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%; /* Ensure the row takes the full width */
`;

const SkillsSection = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
  }
`;

const SkillsBold = styled.p`
  font-weight: bold;
  font-size: 2rem;
  font-family: "Londrina Outline", sans-serif;
  margin-block-end: 0;
  margin-block-start: 0;
`;

const SkillsList = styled.ul`
  font-size: 2.3vmin;
  list-style-type: disc;
  padding: 0;
  margin-block-start: 0.5em;
`;

const SkillsListItem = styled.li`
  margin-left: ${props => props.indent}vw;
  transform: rotate(${props => props.rotation}deg);
  list-style-type: none;
`;


const AboutImg = styled.img`
  width: 100%;
  max-width: 300px; /* Adjust as necessary to control the max width */
  height: auto;
  margin: 5vh auto 5vh auto; /* Center the image and add spacing */
  display: block;
`;

const InternshipSection = styled.div`
  margin-bottom: 3vh;
  width: 100%;
`;

const InternshipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5vh;
  flex-wrap: wrap;
`;

const CompanyName = styled.span`
  font-weight: bold;
  font-size: 2.5vmin;
  margin-right: 1vw;
`;

const PositionTitle = styled.span`
  border: 1px solid #000;
  border-radius: 15px;
  padding: 0.5vh 1vw;
  font-size: 1.5vmin;
`;

const InternshipPeriod = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5vmin;
  margin-bottom: 2vh;
  flex-wrap: wrap;

`;

const InternshipAchievements = styled.ul`
  list-style-type: disc;
  padding-left: 1.5vw;
  margin: 0;
`;

const InternshipAchievement = styled.li`
  font-size: 1.5vmin;
  margin-bottom: 1vh;
`;

const LineBreaker = styled.hr`
  border: none;
  border-top: 1px solid #000;
  margin: 2vh 0;
  width: 100%;
`;

export {
  Container,
  AboutContainer,
  Content,
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarStaticItem,
  ItemNumber,
  ItemTitle,
  AboutTextContainer,
  AboutTitle,
  AboutText,
  SkillsRow,
  SkillsSection,
  SkillsBold,
  SkillsList,
  AboutImg,
  InternshipSection,
  InternshipHeader,
  CompanyName,
  PositionTitle,
  InternshipPeriod,
  InternshipAchievements,
  InternshipAchievement,
  LineBreaker,
  SkillsListItem
};
