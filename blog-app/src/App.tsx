import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { routes } from './constants/routes';
import Footer from './features/Footer';
import Header from './features/Header';

const App: React.FC = () => {

  return (
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
