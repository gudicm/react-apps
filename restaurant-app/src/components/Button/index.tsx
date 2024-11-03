import React from 'react';

import './index.css';

interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick = () => {
    alert('Button clicked!');
  },
}) => {
  return (
    <button className={className || ''} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
