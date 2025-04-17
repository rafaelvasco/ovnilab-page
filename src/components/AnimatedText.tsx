
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  onComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  onComplete
}) => {
  // Call onComplete immediately since there's no animation
  React.useEffect(() => {
    if (onComplete) onComplete();
  }, [onComplete]);

  return (
    <span className={cn(className)}>
      {text}
    </span>
  );
};

export default AnimatedText;
