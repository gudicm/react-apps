import React from 'react';

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title = 'Header' }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
    </>
  );
};

export default Header;
