import React from 'react';
import './index.css'; // Import the CSS file

interface ErrorComponentProps {
    error?: Error | null;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
    return (
        <div className="error-container">
            <h2>{error?.name || 'Something went wrong'}</h2>
            <p>{error?.message || 'An unexpected error occurred.'}</p>
            <p>{error?.stack}</p>
        </div>
    );
};

export default ErrorComponent;
