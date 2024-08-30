import React from 'react';
import { motion } from 'framer-motion';

const TransitionWrapper = ({ children, isAnimating, onAnimationComplete }) => {
    const numberOfStrips = 5;  // Number of strips for the animation
    const height = '100%';  // This can be adjusted based on your design needs

    const stripVariants = {
        initial: { scaleY: 0 },
        animate: (custom) => ({
            scaleY: [0, 1.1, 1],  // Adding a slight overshoot
            transition: { delay: custom * 0.1, duration: 0.8 }
        }),
        exit: { scaleY: 0 }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            {children}
            {isAnimating && Array.from({ length: numberOfStrips }).map((_, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: `${(100 / numberOfStrips) * index}%`,
                        left: 0,
                        right: 0,
                        height: height,
                        backgroundColor: 'black',
                        originY: 0,
                    }}
                    variants={stripVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={index}
                    onAnimationComplete={onAnimationComplete}
                />
            ))}
        </div>
    );
};

export default TransitionWrapper;
