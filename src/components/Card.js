// Import necessary libraries
import React from 'react';
import {
    CardContainer,
    BlackShape,
    BlackTitle,
    BlackText,
    BlackParagraph,
    LearnMoreButton,
    Header,
    Row,
    Cell,
    ImageContainer
} from '../styles/StyledCardComponents';

// Card component
const Card = ({ title, date, imageSrc, isClicked, setIsClicked }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        setIsClicked(!isClicked);
    };

    return (
        <div style={{ position: 'relative' }} onClick={handleClick}>
            <BlackShape isClicked={isClicked}>
                <BlackTitle>OpenHome Pepper</BlackTitle>
                <BlackParagraph>Pepper can help you manage your Google Calendar using only your voice command. She is also a personalized relationship coach that gives you life companionship that you will enjoy during your work</BlackParagraph>
                <LearnMoreButton href="https://github.com" target="_blank" rel="noopener noreferrer">Learn More</LearnMoreButton>
            </BlackShape>
            <CardContainer isClicked={isClicked}>
                <Header>
                    <Row>
                        <Cell><strong>Title:</strong></Cell>
                        <Cell>{title}</Cell>
                    </Row>
                    <Row>
                        <Cell><strong>Date:</strong></Cell>
                        <Cell>{date}</Cell>
                    </Row>
                </Header>
                <ImageContainer>
                    <img src={imageSrc} alt="Card" style={{ width: '10vw', height: '10vw' }} />
                </ImageContainer>
            </CardContainer>
        </div>
    );
};

export default Card;
