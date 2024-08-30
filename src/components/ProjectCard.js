import React, { useRef, useEffect, useState } from 'react';
import Tag from './Tag';
import {
    ProjectContainer,
    ContentContainer,
    TitleArea,
    Title,
    DateRange,
    BlackLine,
    ContentArea,
    TagArea,
    MediaArea,
    NavButton,
    NavButtonContainer,
    DescriptionText,
    DescriptionArea,
    Image,
    Video,
    YouTubeEmbed
} from '../styles/StyledProjectCardComponent';

const ProjectCard = ({ title, dateRange, description, tags, mediaUrl, width, height, hasNext, hasPrev, onNext, onPrev }) => {
    const [mediaHeight, setMediaHeight] = useState(0);
    const mediaRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (mediaRef.current) {
                setMediaHeight(mediaRef.current.offsetHeight);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, [mediaUrl]);

    const isYouTubeUrl = (url) => {
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    const getYouTubeEmbedUrl = (url) => {
        let videoId;
        if (url.includes('youtube.com')) {
            videoId = url.split('v=')[1];
        } else if (url.includes('youtu.be')) {
            videoId = url.split('/').pop();
        }
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <ProjectContainer>
            <NavButtonContainer left>
                <NavButton onClick={onPrev} disabled={!hasPrev}>{"<"}</NavButton>
            </NavButtonContainer>
            <ContentContainer>
                <TitleArea>
                    <Title>{title}</Title>
                    <DateRange>{dateRange}</DateRange>
                </TitleArea>
                <BlackLine />
                <ContentArea>
                    <DescriptionArea style={{ height: `${mediaHeight}px` }}>
                        <DescriptionText>{description}</DescriptionText>
                        <TagArea>
                            {tags?.map((tag, index) => (
                                <Tag key={index} {...tag} />
                            ))}
                        </TagArea>
                    </DescriptionArea>
                    <MediaArea ref={mediaRef}>
                        {isYouTubeUrl(mediaUrl) ? (
                            <YouTubeEmbed
                                src={getYouTubeEmbedUrl(mediaUrl)}
                                frameBorder="0"
                                width={width}
                                height={height}
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
                                allowFullScreen
                            />
                        ) :
                            mediaUrl?.endsWith('.mp4') ? (
                                <Video src={process.env.PUBLIC_URL + mediaUrl} controls width={width} height={height} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            ) : (
                                <Image src={process.env.PUBLIC_URL + mediaUrl} alt={title} width={width} height={height} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                            )}
                    </MediaArea>
                </ContentArea>
            </ContentContainer>
            <NavButtonContainer right>
                <NavButton onClick={onNext} disabled={!hasNext}>{">"}</NavButton>
            </NavButtonContainer>
        </ProjectContainer>
    );
};

export default ProjectCard;