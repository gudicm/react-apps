import React, { Suspense } from 'react';

import './App.css';
import Circular from './components/Circular';
import ErrorBoundary from './components/Error/error';
 // Import the ErrorBoundary

// Lazily load Button component
const Button = React.lazy(() => import('./components/Button'));

const App: React.FC = () => {
  
  
  return (
    <ErrorBoundary>
      {/* Wrap Suspense with ErrorBoundary to handle errors in lazy-loaded components */}
      <Suspense fallback={<Circular size={50} color="blue" strokeWidth={5} />}>
        <>
          <h1>Price list example</h1>
          <Button />
        </>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
