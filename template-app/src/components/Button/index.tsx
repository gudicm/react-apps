import React from 'react';

import './index.css';

export interface ButtonProps {
  text?: string;
  classname?: string;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  text = 'Yo!',
  classname = 'button',
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

