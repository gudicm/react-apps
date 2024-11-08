import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null; // This component does not render anything itself
};

export default ScrollToSection;
