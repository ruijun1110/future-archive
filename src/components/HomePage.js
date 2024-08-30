// Import necessary libraries and assets
import React, { useState, useEffect } from 'react';
import { Container, ImageContainer, Image, BodyContainer, TitleBar, ProjectArea } from '../styles/StyledHomePageComponents';
import ProjectCard from './ProjectCard';
import { AnimatePresence } from 'framer-motion';
import MediaCard from './MediaCard';

// Image data array
const images = [
  { src: "/img/gray-folder.png", text: 'AI / ML' },
  { src: '/img/blue-folder.png', text: 'MOBILE APP' },
  { src: '/img/green-folder.png', text: 'WEB DEV' },
  { src: "/img/gray-folder.png", text: 'OTHER' },
  { src: '/img/blue-folder.png', text: 'UI/UX' },
  { src: '/img/green-folder.png', text: 'MARKETING' },
  { src: "/img/gray-folder.png", text: 'VIDEOS' },
  { src: '/img/blue-folder.png', text: 'GRAPHICS' },
];

const projectGroups = [
  {
    category: 'AI / ML',
    projects: [
      {
        type: 'project',
        title: 'Grailed Image Search',
        description: 'A Google Chrome extension that allows users to search for similar items on Grailed using item images. The image search process is done using OpenAI CLIP model. All listings data are gathered using autonomous web scraping, which is done using Playwright.',
        dateRange: '2024/7 - 2024/8',
        tags: [
          { text: 'Google Extension', color: '#c4fa6f', variant: 'filled' },
          { text: 'Full Stack Development', color: '#0000FF', variant: 'outline' },
          { text: 'MongoDB', color: '#c294ff', variant: 'filled' },
          { text: 'Pinecone Vector Database', color: '#FFA500', variant: 'outline' },
          { text: 'Google Cloud', color: '#31fe6a', variant: 'filled' },
          { text: 'Playwright', color: '#ff5d01', variant: 'filled' },
          { text: 'OpenAI CLIP', color: '#0000FF', variant: 'filled' },
          { text: 'Transformer', color: '#000000', variant: 'outline' },
          { text: 'Automate Web Scraping', color: '#ff4097', variant: 'filled' },
          { text: 'Github', color: '#036f14', variant: 'filled', githubUrl: 'https://github.com/ruijun1110/Grailed-Image-Search?tab=readme-ov-file' },
        ],
        mediaUrl: 'https://youtu.be/nmeZIZTwvkM',
        width: '50vw',
        height: '40vh'
      },
      {
        type: 'project',
        title: 'OpenHome Pepper',
        description: 'Pepper is an AI-powered smart assistant that help you manage your Google Calendar more effectively. She is also a personalized relationship coach that gives you life companionship that you will enjoy during your work.',
        dateRange: '2024/7 - 2024/8',
        tags: [
          { text: 'AI Agent', color: '#ff4097', variant: 'outline' },
          { text: 'LLM', color: '#065a29', variant: 'filled' },
          { text: 'Text-to-Speech', color: '#0000FF', variant: 'filled' },
          { text: 'Speech-to-text', color: '#fbcb1b', variant: 'filled' },
          { text: 'Google Calendar', color: '#c4fa6f', variant: 'filled' },
          { text: 'Prompt Engineering', color: '#000000', variant: 'outline' },
          { text: 'Wake Word Detection', color: '#0000FF', variant: 'outline' },
          { text: 'Google OAuth', color: '#ff5d01', variant: 'filled' },
          { text: 'Github', color: '#036f14', variant: 'filled', githubUrl: 'https://github.com/ruijun1110/OpenHome_Pepper' },
        ],
        mediaUrl: 'https://youtu.be/nAUX7Xj6ans',
        width: '50vw',
        height: '40vh'
      },
    ]
  },
  {
    category: 'MOBILE APP',
    projects: [
      {
        type: 'project',
        title: 'AIARM',
        description: 'AIarm is an innovative iOS application that reimagines the traditional alarm experience by incorporating AI-powered personalized alarm calls. This app allows users to create custom AI agents with unique personalities, moods, and motivations to deliver tailored alarm messages.',
        dateRange: '2024/7 - 2024/8',
        tags: [
          { text: 'IOS App', color: '#739ab9', variant: 'filled' },
          { text: 'Swift', color: '#0000FF', variant: 'outline' },
          { text: 'Swift UI', color: '#f54907', variant: 'filled' },
          { text: 'gpt-4o-mini', color: '#61b93e', variant: 'filled' },
          { text: 'OenAI TTS', color: '#FFA500', variant: 'outline' },
          { text: 'Prompt Engineering', color: '#282b26', variant: 'filled' },
          { text: 'UI/UX Design', color: '#fbccfb', variant: 'filled' },
          { text: 'Core Data', color: '#f91103', variant: 'outline' },
          { text: 'Figma', color: '#000000', variant: 'filled' },
          { text: 'Github', color: '#036f14', variant: 'filled', githubUrl: 'https://github.com/ruijun1110/AIARM' },
        ],
        mediaUrl: 'https://youtu.be/0OHpVeXqISo',
        width: '40vw',
        height: '40vh'
      },
    ]
  },
  {
    category: 'WEB DEV',
    projects: [
      {
        type: 'project',
        title: 'PERSONAL PORTFOLIO WEBSITE',
        description: 'Future Archive is a personal portfolio website that showcases my projects and skills. The website is built using React, styled-components, and framer-motion. It is designed to be responsive and interactive.',
        dateRange: '2024/6 - 2024/7',
        tags: [
          { text: 'React.js', color: '#f91103', variant: 'filled' },
          { text: 'Front End Development', color: '#b5f5ef', variant: 'filled' },
          { text: 'UI/UX Design', color: '#000000', variant: 'filled' },
          { text: 'Framer Motion', color: '#FFA500', variant: 'outline' },
          { text: 'DOM', color: '#ADFF2F', variant: 'filled' },
        ],
        mediaUrl: '/img/personal.png',
        width: 'auto',
        height: '40vh',
      },
    ]
  },
  {
    category: 'OTHER',
    projects: [
      {
        type: 'project',
        title: 'AI CORPORATE CHATBOT',
        description: 'This is a corporate chatbot I developed during my internship at Wanb Express. The chatbot is designed to assist employees with common company-related questions and to optimize HR training.',
        dateRange: 'INTERN PROJECT [2023/5 - 2023/8]',
        tags: [
          { text: 'AI Chatbot', color: '#ff5c2b', variant: 'filled' },
          { text: 'LLM', color: '#ffff00', variant: 'outline' },
          { text: 'Embedding', color: '#6a0ffc', variant: 'filled' },
          { text: 'RESTful API', color: '#FFA500', variant: 'outline' },
          { text: 'C#', color: '#ADFF2F', variant: 'filled' },
          { text: 'MVC Web App', color: '#FFC0CB', variant: 'filled' },
          { text: 'Axios', color: '#0000FF', variant: 'filled' },
          { text: 'MongoDB', color: '#000000', variant: 'filled' },
          { text: 'ChromaDB', color: '#00FF00', variant: 'filled' },
          { text: 'Prompt Engineering', color: '#FFA500', variant: 'filled' },
          { text: 'Token Optimization', color: '#0000FF', variant: 'outline' },
        ],
        mediaUrl: '/img/ai.png',
        width: 'auto',
        height: '30vh'
      },
      {
        type: 'project',
        title: 'MANIFEST AUTO GENERATOR',
        description: 'This is an automation tool I developed during my internship at Wanb Express. The tool is designed to generate manifest files from raw data and to optimize the manifest creation process.',
        dateRange: 'INTERN PROJECT [2023/5 - 2023/8]',
        tags: [
          { text: 'MVC Web App', color: '#ff00d9', variant: 'filled' },
          { text: 'Automation', color: '#0000FF', variant: 'outline' },
          { text: 'JSON Configuration', color: '#00FF00', variant: 'filled' },
          { text: 'RESTful API', color: '#FFA500', variant: 'outline' },
          { text: 'C#', color: '#ADFF2F', variant: 'filled' },
          { text: 'Dynamic Binding', color: '#6a0ffc', variant: 'filled' },
          { text: 'Reflection', color: '#fbff12', variant: 'filled' },
          { text: 'Serilog', color: '#000000', variant: 'filled' },
          { text: 'Github', color: '#036f14', variant: 'filled', githubUrl: 'https://github.com/ruijun1110/Manifest-Auto-Generator' },
        ],
        mediaUrl: '/img/manifest.jpg',
        width: 'auto',
        height: '30vh'
      },

    ]
  },
  {
    category: 'UI/UX',
    projects: [
      {
        type: 'media',
        projectName: 'AIarm IOS App',
        toolName: 'Figma',
        mediaUrl: '/img/alarmUI.png',
        width: '50vw',
        height: 'auto'
      },
    ]
  },
  {
    category: 'MARKETING',
    projects: [
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/1.png',
        width: '40vw',
        height: 'auto'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/3.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/4.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/5.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/6.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/7.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/8.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/9.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/10.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/11.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/12.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/13.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/14.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/15.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/16.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/17.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/18.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/19.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/20.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/21.png',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'STATE FARM GAMERHOOD SEASON 3 MARKETING CAMPAIGN',
        toolName: 'Canva',
        mediaUrl: '/img/Gamerhood/22.png',
        width: '40vw',
        height: '35vh'
      },
    ]
  },
  {
    category: 'VIDEOS',
    projects: [
      {
        type: 'media',
        projectName: 'WAVE CHINESE FASHION POP-UP RECAP',
        toolName: 'Adobe After Effects',
        mediaUrl: 'https://youtu.be/CLB5UCuolSc',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: '3D Hovering Vision Poor',
        toolName: 'Adobe After Effects',
        mediaUrl: 'https://youtu.be/i2oh04juBf0',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'First Person Shooter Lyric Animation',
        toolName: 'Adobe After Effects',
        mediaUrl: 'https://youtu.be/Gq9E2VUP46Y',
        width: '40vw',
        height: '35vh'
      },
      {
        type: 'media',
        projectName: 'Chinese Dragon New Year Animated Poster',
        toolName: 'Adobe After Effects',
        mediaUrl: 'https://youtu.be/fav7Sx3s1IY',
        width: '40vw',
        height: '35vh'
      }
    ]
  },
  {
    category: 'GRAPHICS',
    projects: [
      {
        type: 'media',
        projectName: 'CSSA PR WAVE JERSEY DESIGN',
        toolName: 'Adobe Illustrator',
        mediaUrl: '/img/pr_jersey.png',
        width: '50vw',
        height: 'auto'
      },
      {
        type: 'media',
        projectName: 'CSSA HODDIE DESIGN 1',
        toolName: 'Adobe Illustrator',
        mediaUrl: '/img/dragon.png',
        width: '35vw',
        height: 'auto'
      },
      {
        type: 'media',
        projectName: 'CSSA HODDIE DESIGN 2',
        toolName: 'Adobe Illustrator',
        mediaUrl: '/img/license.png',
        width: '30vw',
        height: 'auto'
      }
    ]
  },
];

// HomePage component
const HomePage = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [currentProject, setCurrentProject] = useState(0);

  // Handle image click
  const handleImageClick = (index) => {
    if (clickedIndex !== index) {
      setClickedIndex(index);
      setCurrentProject(0);
    } else {
      setClickedIndex(-1);
    }
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (clickedIndex === -1) setHoverIndex(-1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentProject < projectGroups[clickedIndex].projects.length - 1) {
      setCurrentProject(currentProject + 1);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickedIndex !== -1 && !event.target.matches('img') && !event.target.closest('.card-container')) {
        setClickedIndex(-1);
      }
    };

    if (clickedIndex !== -1) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [clickedIndex]);

  return (
    <Container>
      <BodyContainer>
        <TitleBar clickedIndex={clickedIndex}>
          {clickedIndex !== -1 ? images[clickedIndex].text :
            (hoverIndex !== -1 ? '(' + images[hoverIndex].text + ')' : '(FUTURE ARCHIVE)')}
        </TitleBar>
        <AnimatePresence>
          {clickedIndex !== -1 && (
            <ProjectArea
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {projectGroups[clickedIndex].projects[currentProject].type === 'media' ? (
                <MediaCard
                  {...projectGroups[clickedIndex].projects[currentProject]}
                  hasNext={currentProject < projectGroups[clickedIndex].projects.length - 1}
                  hasPrev={currentProject > 0}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />) : (

                <ProjectCard
                  {...projectGroups[clickedIndex].projects[currentProject]}
                  hasNext={currentProject < projectGroups[clickedIndex].projects.length - 1}
                  hasPrev={currentProject > 0}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
              )}
            </ProjectArea>
          )}
        </AnimatePresence>

        <ImageContainer clickedIndex={clickedIndex}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              index={index}
              hoverIndex={hoverIndex}
              clickedIndex={clickedIndex}
              style={{
                zIndex: images.length - index,
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => handleMouseLeave(-1)}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </ImageContainer>
      </BodyContainer>
    </Container>
  );
};

export default HomePage;
