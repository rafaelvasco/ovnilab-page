
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  initialDelay?: number;
  onComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 50,
  initialDelay = 0,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset animation when text changes
    setDisplayedText('');
    setIsComplete(false);
    
    let currentIndex = 0;
    
    // Initial delay before starting animation
    const initialTimer = setTimeout(() => {
      // Start the typing animation
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      }, delay);
      
      return () => clearInterval(interval);
    }, initialDelay);
    
    return () => clearTimeout(initialTimer);
  }, [text, delay, initialDelay, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={cn(className)}>
      {displayedText}
      <span className={`${cursorVisible && !isComplete ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  );
};

export default AnimatedText;
