import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Circular from './components/Circular';
import { routes } from './constants/routes';
import Footer from './features/footer';
import Header from './features/header';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer); // Clear the timeout when the component is unmounted
  }, []);

  return loading ? (
    <Circular size={50} color="black" strokeWidth={8}>
      <h2>loading ...</h2>
    </Circular>
  ) : (
    <Router>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer title="&copy; 2024 Your Blog Name. All rights reserved." />
    </Router>
  );
};

export default App;
