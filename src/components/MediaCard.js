import React from 'react';
import {
    CardContainer,
    Title,
    MediaContainer,
    MediaContent,
    Video,
    Image,
    NavButton,
    BlackLine,
    ContentContainer,
    ToolContainer,
    TitleArea,
    YouTubeEmbed
} from '../styles/StyledMediaCardComponent';




const VideoCard = ({ projectName, toolName, mediaUrl, width, height, hasNext, hasPrev, onNext, onPrev }) => {
    const isVideo = mediaUrl.endsWith('.mp4');
    const isYouTube = mediaUrl.includes('youtube.com') || mediaUrl.includes('youtu.be');

    // Function to extract YouTube video ID
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
        <CardContainer>
            <TitleArea>
                <Title>{projectName}</Title>
                <ToolContainer>{toolName}</ToolContainer>
            </TitleArea>
            <BlackLine />
            <ContentContainer>
                <MediaContainer>
                    <NavButton left onClick={onPrev} disabled={!hasPrev}>{"<"}</NavButton>
                    <MediaContent>
                        {isYouTube ? (
                            <YouTubeEmbed
                                src={getYouTubeEmbedUrl(mediaUrl)}
                                title={projectName}
                                allow="clipboard-write; encrypted-media; gyroscope"
                                allowFullScreen
                                width={width}
                                height={height}
                            />
                        ) : isVideo ? (
                            <Video src={process.env.PUBLIC_URL + mediaUrl} controls width={width} height={height} style={{ objectFit: 'contain' }} />
                        ) : (
                            <Image src={process.env.PUBLIC_URL + mediaUrl} alt={projectName} width={width} height={height} style={{ objectFit: 'contain' }} />
                        )}
                    </MediaContent>
                    <NavButton right onClick={onNext} disabled={!hasNext}>{">"}</NavButton>
                </MediaContainer>
            </ContentContainer>
        </CardContainer>
    );
};

export default VideoCard;