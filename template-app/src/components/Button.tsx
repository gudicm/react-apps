import React from 'react';

interface ButtonProps {
  text?: string;
  classname?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  text = 'Click me!',
  classname = '',
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
