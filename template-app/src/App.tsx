import React, { useState, useEffect } from 'react';
import './App.css';

import Button from './components/Button';
import Circular from './components/Circular';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean | null>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Circular size={100} color="grey" strokeWidth={10} />
  ) : (
    <>
      <h1>Hello World!</h1>
      <Button />
    </>
  );
};

export default App;
