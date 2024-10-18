import React from 'react';

import './index.css';

interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  text = 'Yo!',
  className: classname = 'button',
  onClick = () => {
    console.log('Button clicked!');
  },
}) => {
  return (
    <button className={classname} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
