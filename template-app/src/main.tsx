import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const useStrictMode = import.meta.env.VITE_USE_STRICT_MODE === 'true';
// console.assert( useStrictMode === true, 'useStrictMode must be true');
// eslint-disable-next-line react-refresh/only-export-components
const RootComponent = useStrictMode ? (
  <React.StrictMode>
    <App />
  </React.StrictMode>
) : (
  <App />
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(RootComponent);
