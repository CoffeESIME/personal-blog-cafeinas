import React, { useState, useEffect } from 'react';
import './ChangingText.css';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
    phrases: string[];
    interval?: number;
    className?: string;
}

const ChangingText: React.FC<Props> = ({ phrases, interval = 3000, className = '' }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(currentIndex => (currentIndex + 1) % phrases.length);
        }, interval);
        return () => clearInterval(intervalId);
    }, [interval]);

    return (
        <div style={{ position: 'relative', height: '24px', width: '300px' }}>
        <AnimatePresence>
          <motion.span
            key={phrases[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', width: '100%' }}
          >
            {phrases[index]}
          </motion.span>
        </AnimatePresence>
      </div>)
}

export default ChangingText;
