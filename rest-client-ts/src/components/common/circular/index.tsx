import React from 'react';
import './index.css'; // CSS for animation

type CircularProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

const Circular: React.FC<CircularProps> = ({ size = 100, color = 'grey', strokeWidth = 10 }) => {
  const radius: number = (size - strokeWidth) / 2;
  const circumference: number = 2 * Math.PI * radius;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="animated-circular">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        className="background-circle"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        className="loading-circle"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: circumference * 0.75,
        }}
      />
    </svg>
  );
};

export default Circular;
