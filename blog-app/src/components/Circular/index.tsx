import React from 'react';
import './index.css';

type CircularProps = {
    size?: number;
    color?: string;
    strokeWidth?: number;
    children?: React.ReactNode;
};

const Circular: React.FC<CircularProps> = ({
    size = 100,
    color = 'grey',
    strokeWidth = 10,
    children = null
}) => {
    const radius: number = (size - strokeWidth) / 2;
    const circumference: number = 2 * Math.PI * radius;

    return (
        <div className="circular-container">
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
            {children}
        </div>



    );
};

export default Circular;
