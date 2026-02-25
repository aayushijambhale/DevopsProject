import React, { useState, useEffect } from 'react';
import './CipherSelector.css';

const CipherSelector = ({ selectedCipher, onCipherChange }) => {
  const [ciphers, setCiphers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCiphers = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${apiUrl}/ciphers`);
        const data = await response.json();
        setCiphers(data.ciphers);
      } catch (error) {
        console.error('Error fetching ciphers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCiphers();
  }, []);

  const getCipherIcon = (name) => {
    const icons = {
      'Caesar Cipher': '🔄',
      'ROT13': '🔁',
      'Atbash Cipher': '🔅',
      'Reverse Cipher': '↩️',
      'Substitution Cipher': '🔠',
      'Vigenere Cipher': '🗝️',
      'Base64 Encoding': '📦',
      'Base64 Decoding': '📭',
      'Morse Code': '📡',
    };
    return icons[name] || '🔐';
  };

  if (loading) {
    return (
      <div className="cipher-selector">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading cipher algorithms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cipher-selector">
      <div className="selector-header">
        <h2>Choose an Algorithm</h2>
        <p className="selector-description">Select a cipher algorithm to encrypt your text</p>
      </div>
      <div className="cipher-grid">
        {ciphers.map((cipher) => {
          const cipherKey = cipher.endpoint.slice(1);
          const isActive = selectedCipher === cipherKey;
          return (
            <button
              key={cipher.endpoint}
              className={`cipher-card ${isActive ? 'active' : ''}`}
              onClick={() => onCipherChange(cipherKey)}
              title={cipher.description}
              tabIndex={0}
              aria-label={`Select ${cipher.name}`}
            >
              <div className="cipher-icon">{getCipherIcon(cipher.name)}</div>
              <div className="cipher-name">{cipher.name}</div>
              <div className="cipher-description">{cipher.description}</div>
              {isActive && <div className="active-indicator" title="Selected"></div>}
            </button>
          );
        })}
      </div>
      <div className="cipher-stats">
        <p>Algorithms available: <span className="badge">{ciphers.length}</span></p>
      </div>
    </div>
  );
};

export default CipherSelector;
