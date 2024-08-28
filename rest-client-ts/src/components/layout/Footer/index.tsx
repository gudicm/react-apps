import React from 'react';

type FooterProps = {
  title?: string;
};

const Footer: React.FC<FooterProps> = ({ title = 'Footer' }) => {
  return (
    <footer>
      <p>{title}</p>
    </footer>
  );
};

export default Footer;
