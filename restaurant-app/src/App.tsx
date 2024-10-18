import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import './App.css';
import Circular from './components/Circular';
import ErrorBoundary from './components/Error/error';
import Footer from './features/Footer';
import Header from './features/Header';
import Main from './features/Main';






// Lazily load Button component
// const Button = React.lazy(() => import('./components/Button'));


const App: React.FC = () => {
  return (
    <ErrorBoundary>
      {/* Wrap Suspense with ErrorBoundary to handle errors in lazy-loaded components */}
      <Suspense fallback={<Circular size={50} color="blue" strokeWidth={5} />}>
        <>

          <Header />

          <Main />
          
          <Footer />
        </>
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
