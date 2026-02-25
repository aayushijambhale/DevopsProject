import React, { useState } from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  const [copied, setCopied] = useState(false);
  const [downloadFormat, setDownloadFormat] = useState('txt');

  const handleCopy = () => {
    navigator.clipboard.writeText(result.ciphertext);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    let content = result.ciphertext;
    let filename = `cipher_${result.algorithm.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`;

    if (downloadFormat === 'json') {
      content = JSON.stringify(result, null, 2);
      element.setAttribute('type', 'application/json');
      filename += '.json';
    } else {
      element.setAttribute('type', 'text/plain');
      filename += '.txt';
    }

    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`);
    element.setAttribute('download', filename);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const getAlgorithmCategory = (algorithm) => {
    const categories = {
      'Caesar Cipher': 'Substitution',
      'ROT13': 'Substitution',
      'Atbash Cipher': 'Substitution',
      'Reverse Cipher': 'Simple',
      'Substitution Cipher': 'Substitution',
      'Vigenere Cipher': 'Polyalphabetic',
      'Base64 Encoding': 'Encoding',
      'Base64 Decoding': 'Encoding',
      'Morse Code': 'Conversion',
    };
    return categories[algorithm] || 'Encryption';
  };

  const getAlgorithmComplexity = (algorithm) => {
    const complexity = {
      'Caesar Cipher': 'Low',
      'ROT13': 'Low',
      'Atbash Cipher': 'Low',
      'Reverse Cipher': 'Very Low',
      'Substitution Cipher': 'Medium',
      'Vigenere Cipher': 'Medium-High',
      'Base64 Encoding': 'Low',
      'Base64 Decoding': 'Low',
      'Morse Code': 'Medium',
    };
    return complexity[algorithm] || 'Unknown';
  };

  const formatCipherText = (text) => {
    const maxLength = 150;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="result-display">
      <div className="result-header">
        <div className="result-title">
          <h2>✔ Encryption Successful</h2>
          <p className="result-subtitle">Your text has been encrypted</p>
        </div>
        <div className="result-badge">
          <span className="badge" title="Algorithm category">{getAlgorithmCategory(result.algorithm)}</span>
          <span className="badge" title="Complexity">{getAlgorithmComplexity(result.algorithm)}</span>
        </div>
      </div>
      <div className="result-grid">
        <div className="result-section">
          <div className="section-header">
            <h4>Cipher Text</h4>
            <span className="text-length" title="Length">{result.ciphertext.length} chars</span>
          </div>
          <div className="cipher-text-box">
            <span className="cipher-text" title="Cipher output">{result.ciphertext}</span>
          </div>
        </div>
        <div className="result-section">
          <div className="section-header">
            <h4>Actions</h4>
          </div>
          <div className="result-actions">
            <button className="btn btn-success" onClick={handleCopy} title="Copy to clipboard">
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <select className="download-select" value={downloadFormat} onChange={e => setDownloadFormat(e.target.value)} title="Choose download format">
              <option value="txt">TXT</option>
              <option value="json">JSON</option>
            </select>
            <button className="btn btn-info" onClick={handleDownload} title="Download result">
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="result-footer">
        <p>💡 <strong>Tip:</strong> Save your encrypted text for later use or share it securely with others.</p>
      </div>
    </div>
  );
};

export default ResultDisplay;
