// Import necessary libraries and assets
import React, { useState } from 'react';
import {
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
} from '../styles/StyledAboutPageComponents';



// AboutPage component
const AboutPage = () => {
    const [activeSection, setActiveSection] = useState('Me');

    const sections = [
        { id: 'Me', title: 'Me' },
        { id: 'Skills', title: 'Skills' },
        { id: 'Internships', title: 'Internships' },
    ];

    const getRandomRotation = () => Math.random() * 7 - 3; // Random rotation between -3 and 3 degrees
    const renderSkillItems = (skills) => {
        return skills.map((skill, index) => (
            <SkillsListItem
                key={index}
                rotation={getRandomRotation()}
            >
                {skill}
            </SkillsListItem>
        ));
    };

    const skillsData = [
        {
            title: "Coding Language",
            skills: ["Java", "Python", "C++", "C#", "C", "React.js", "Next.js", "Swift"]
        },
        {
            title: "Artificial Intelligence",
            skills: ["Tensorflow", "Pytorch", "Keras", "Scikit-learn", "Langchain", "Transformer"]
        },
        {
            title: "Tools",
            skills: ["Github", "Docker", "NoSQL/SQL Database", "Postman", "Google Cloud", "XCode", "Android Studio"]
        },
        {
            title: "Visual Design",
            skills: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Canva"]
        }
    ];

    return (
        <Container>
            <Sidebar>
                <SidebarHeader>
                    <span className="sidebar-title">NÍ HǍO</span>
                    <br />
                    <span className="sidebar-title">I AM RAYMOND</span>
                </SidebarHeader>
                <AboutImg src='/img/about-pic.png' alt="about" />
                <div>
                    <SidebarStaticItem>
                        <ItemTitle>{"Table of Content"}</ItemTitle>
                    </SidebarStaticItem>
                    {sections.map((section, index) => (
                        <SidebarItem
                            key={section.id}
                            active={activeSection === section.id}
                            onClick={() => setActiveSection(section.id)}
                        >
                            <ItemNumber>{index + 1}</ItemNumber>
                            <ItemTitle>{section.title}</ItemTitle>
                        </SidebarItem>
                    ))}
                </div>
            </Sidebar>
            <Content>
                {activeSection === 'Me' && (
                    <AboutContainer>
                        <AboutTextContainer>
                            <AboutTitle>ABOUT ME</AboutTitle>
                            <AboutText>
                                My name is <strong>Ruijun Wang</strong>. It is pronounced "Ray-june" but I also go by Raymond. I am a <strong>Computer Science & Business Administration</strong> major senior at <strong>USC</strong>. I love doing creative and innovative work: <strong>coding, marketing, fashion visual design</strong>, etc. While I am not working, you would most likely to find me in the gym or in my kitchen. <strong>I am currently looking for any potential job opportunity in software engineering or product management. </strong> Feel free to reach out and connect with me! My contact information is on the Contact page.
                            </AboutText>
                        </AboutTextContainer>
                    </AboutContainer>
                )}
                {activeSection === 'Skills' && (
                    <AboutContainer>
                        <AboutTextContainer>
                            <AboutTitle>ABOUT MY SKILLS</AboutTitle>
                            <SkillsRow>
                                <SkillsSection>
                                    <SkillsBold>Coding Language</SkillsBold>
                                    <SkillsList>
                                        {renderSkillItems(["Java", "Python", "C++", "C#", "C", "React.js", "Next.js", "Swift"])}
                                    </SkillsList>
                                </SkillsSection>
                                <SkillsSection>
                                    <SkillsBold>Artificial Intelligence</SkillsBold>
                                    <SkillsList>
                                        {renderSkillItems(["Tensorflow", "Pytorch", "Keras", "Scikit-learn", "Langchain", "Transformer"])}
                                    </SkillsList>
                                </SkillsSection>
                            </SkillsRow>
                            <SkillsRow>
                                <SkillsSection>
                                    <SkillsBold>Tools</SkillsBold>
                                    <SkillsList>
                                        {renderSkillItems(["Github", "Docker", "NoSQL/SQL Database", "Postman", "Google Cloud", "XCode", "Android Studio"])}
                                    </SkillsList>
                                </SkillsSection>
                                <SkillsSection>
                                    <SkillsBold>Visual Design</SkillsBold>
                                    <SkillsList>
                                        {renderSkillItems(["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Canva"])}
                                    </SkillsList>
                                </SkillsSection>
                            </SkillsRow>
                        </AboutTextContainer>
                    </AboutContainer>
                )}
                {activeSection === 'Internships' && (
                    <AboutContainer>
                        <AboutTextContainer>
                            <AboutTitle>Internships</AboutTitle>
                            <InternshipSection>
                                <InternshipHeader>
                                    <CompanyName><strong>OpenHome</strong></CompanyName>
                                    <PositionTitle>Product Developer</PositionTitle>
                                </InternshipHeader>
                                <InternshipPeriod>
                                    <span>San Francisco, California</span>
                                    <span>01/08/2024 - 05/16/2024</span>
                                </InternshipPeriod>
                                <InternshipAchievements>
                                    <InternshipAchievement>Developed a personalized AI assistant to manage Google Calendar via voice, leveraging wake word detection, STT, TTS, and LLM</InternshipAchievement>
                                    <InternshipAchievement>Optimized LLM with prompt engineering for personalized conversation and context management for efficient token usage</InternshipAchievement>
                                    <InternshipAchievement>Incorporated Google Calendar API and OAuth authentication, enabling secure calendar CRUD operations via voice commands</InternshipAchievement>
                                </InternshipAchievements>
                            </InternshipSection>
                            <LineBreaker></LineBreaker>
                            {/* Internship 2 */}
                            <InternshipSection>
                                <InternshipHeader>
                                    <CompanyName><strong>Wanb Express</strong></CompanyName>
                                    <PositionTitle>Software Engineer</PositionTitle>
                                </InternshipHeader>
                                <InternshipPeriod>
                                    <span>Shenzhen, China</span>
                                    <span>05/21/2023 - 08/23/2023</span>
                                </InternshipPeriod>
                                <InternshipAchievements>
                                    <InternshipAchievement>Independently built an AI chatbot leveraging gpt-3.5-turbo to <strong>optimize HR training and customer service</strong>, reduced cost by <strong>18%</strong></InternshipAchievement>
                                    <InternshipAchievement><strong>Spearheaded</strong> prompt engineering to optimize the quality of chatbot responses, <strong>minimizing token usage per completion by 32%</strong></InternshipAchievement>
                                    <InternshipAchievement>Developed a <strong>RESTful web API</strong> using C# to enable AI chatbot capabilities, implemented Axios for <strong>streamlined API communication</strong></InternshipAchievement>
                                    <InternshipAchievement>Designed MongoDB and ChromaDB architecture for <strong>efficient embedding storage and retrieval for semantic search</strong></InternshipAchievement>
                                    <InternshipAchievement>Built a C# MVC web application to automate shipping manifest customization for <strong>more than 20 customs</strong></InternshipAchievement>
                                    <InternshipAchievement><strong>Boosted manifest completion time by over 40%</strong>, with improved data accuracy and reduced human errors</InternshipAchievement>
                                </InternshipAchievements>
                            </InternshipSection>
                        </AboutTextContainer>
                    </AboutContainer>
                )}
            </Content>
        </Container>
    );
};

export default AboutPage;
