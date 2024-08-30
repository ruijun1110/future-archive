// NoiseBackground.js
import React, { useEffect, useRef } from 'react';

const NoiseBackground = ({ opacity = 0.2, width = 1920, height = 1080 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        function generateNoise() {
            const imageData = context.createImageData(width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const color = Math.random() * 255; // Random gray scale color
                data[i] = color;     // red
                data[i + 1] = color; // green
                data[i + 2] = color; // blue
                data[i + 3] = opacity * 255; // alpha
            }

            context.putImageData(imageData, 0, 0);
        }

        generateNoise();

        // Set the canvas as a background image
        document.body.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';

        // Cleanup on component unmount
        return () => {
            document.body.style.backgroundImage = '';
        };
    }, [width, height, opacity]);

    return <canvas ref={canvasRef} width={width} height={height} style={{ display: 'none', zIndex: '1000' }} />;
};

export default NoiseBackground;
