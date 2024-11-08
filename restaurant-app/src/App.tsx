import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import './App.css';
import Circular from './components/Circular';
import ErrorBoundary from './components/Error/error';
import { ROUTES } from './constants/routes';
import About from './features/AboutUs';
import Footer from './features/Footer';
import Header from './features/Header';
import Home from './features/Home';
import ScrollToSection from './features/ScrollToSection';
import Shop from './features/Shop';

// Lazily load Button component
// const Button = React.lazy(() => import('./components/Button'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      {/* Wrap Suspense with ErrorBoundary to handle errors in lazy-loaded components */}
      <Suspense fallback={<Circular size={50} color="blue" strokeWidth={5} />}>
        <Router>
          <ScrollToSection />


          <Header />
          <Routes>
            {ROUTES.map((route, index) =>
              route.component ? (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ) : (
                // Redirect or add navigation links for anchor routes
                route.path.includes('#') && (
                  <Route
                    key={index}
                    path={route.path}
                    element={<Navigate to="/" replace />} // Redirect to the root for anchors
                  >
                  </Route>
                )
              )
            )}
          </Routes>

          <Home />

          <About />

          <Shop />

          <Footer />


        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
