import React from 'react';

type FooterProps = {
  title?: string;
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ title = null, children = null }) => {
  return (
    <footer>
      {title && <h4>{title}</h4>}
      {children}
    </footer>
  );
};

export default Footer;
