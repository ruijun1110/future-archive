// Import necessary libraries and assets
import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Container, AnimatedImage } from '../styles/StyledContactPageComponents';


// ContactPage component
const ContactPage = () => {
    const containerRef = useRef(null);
    const calc = (x, y) => {
        const rect = containerRef.current.getBoundingClientRect();
        return [-(y - rect.top - rect.height / 2) / 60, (x - rect.left - rect.width / 2) / 60, 1.05];
    };
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 1, tension: 300, friction: 30 }
    }));

    const handleClick = () => {
        window.open('https://www.linkedin.com/in/ruijun-wang0211/', '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            set({ xy: calc(clientX, clientY) });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [set]);

    return (
        <Container ref={containerRef}>
            <animated.div style={{ transform: props.xy.to(trans), position: 'relative' }}>
                <AnimatedImage src={process.env.PUBLIC_URL + "/img/disk.png"} alt="Contact Image" onClick={handleClick}
                    style={{ cursor: 'pointer' }} />
            </animated.div>
        </Container>
    );
};

export default ContactPage;
