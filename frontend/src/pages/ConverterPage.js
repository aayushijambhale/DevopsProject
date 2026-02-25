import React, { useState } from 'react';
import CipherSelector from '../components/CipherSelector';
import ConverterForm from '../components/ConverterForm';
import ResultDisplay from '../components/ResultDisplay';
import './ConverterPage.css';

const ConverterPage = () => {
  const [selectedCipher, setSelectedCipher] = useState('caesar');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCipherChange = (cipherName) => {
    setSelectedCipher(cipherName);
    setResult(null);
    setError(null);
  };

  const handleConvert = async (plaintext, key = null) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      let endpoint = `${apiUrl}/${selectedCipher}`;

      const payload = { plaintext };
      if (key) {
        payload.key = key;
      }
      if (selectedCipher === 'caesar') {
        payload.shift = key ? parseInt(key) : 3;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to convert text. Please check your input and try again.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="converter-page">
      <div className="converter-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <CipherSelector
            selectedCipher={selectedCipher}
            onCipherChange={handleCipherChange}
          />
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-grid">
            {/* Left Column - Form */}
            <div className="form-column">
              {error && (
                <div className="alert alert-error">
                  <span className="alert-icon">✕</span>
                  <div className="alert-content">
                    <h4>Error</h4>
                    <p>{error}</p>
                  </div>
                </div>
              )}

              <ConverterForm
                selectedCipher={selectedCipher}
                onConvert={handleConvert}
                loading={loading}
              />
            </div>

            {/* Right Column - Result */}
            {result && (
              <div className="result-column">
                <ResultDisplay result={result} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ConverterPage;
