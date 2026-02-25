import React, { useEffect, useState } from 'react';
import ConverterPage from './pages/ConverterPage';
import './App.css';

function App() {
  const [apiHealth, setApiHealth] = useState(true);

  // Check API health on mount
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
        await fetch(`${apiUrl}/../health`);
      } catch (err) {
        setApiHealth(false);
        console.error('API health check failed:', err);
      }
    };
    checkHealth();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="header-main">
            <div className="header-title">
              <h1>
                <span className="logo-icon">🔐</span>
                Cipher Converter
              </h1>
            </div>
            {!apiHealth && (
              <div className="api-warning">
                ⚠️ Backend server not connected
              </div>
            )}
          </div>
        </div>
      </header>

      <ConverterPage />

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <p><strong>Cipher Converter</strong> v1.0.0</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/aayushijambhale/DevopsProject" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
            <span>•</span>
            <a href="https://aayushijambhale.github.io/DevopsProject" target="_blank" rel="noopener noreferrer" title="Documentation">Docs</a>
            <span>•</span>
            <button type="button" title="About" onClick={() => alert('Cipher Converter v1.0.0\nDeveloped by Aayushi Jambhale')}>About</button>
          </div>
          <p className="footer-copyright">&copy; 2026 Cipher Converter. Licensed under MIT.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
