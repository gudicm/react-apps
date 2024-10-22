import React from 'react';

import './index.css';

interface ButtonProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  text,
  className: classname = 'button',
  children,
  onClick = () => {
    alert('Button clicked!');
  },
}) => {
  return (
    <button className={classname} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
