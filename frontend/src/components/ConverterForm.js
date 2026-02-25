import React, { useState } from 'react';
import './ConverterForm.css';

const ConverterForm = ({ selectedCipher, onConvert, loading }) => {
  const [plaintext, setPlaintext] = useState('');
  const [key, setKey] = useState('');
  const [charCount, setCharCount] = useState(0);

  const needsKey = ['substitution', 'vigenere', 'caesar'].includes(selectedCipher);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setPlaintext(value);
    setCharCount(value.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plaintext.trim()) {
      onConvert(plaintext, key || null);
    }
  };

  const handleClear = () => {
    setPlaintext('');
    setKey('');
    setCharCount(0);
  };

  const getKeyLabel = () => {
    const labels = {
      'caesar': 'Shift Value',
      'vigenere': 'Vigenere Key',
      'substitution': 'Substitution Key',
    };
    return labels[selectedCipher] || 'Key';
  };

  const getKeyPlaceholder = () => {
    const placeholders = {
      'caesar': '3 (default)',
      'vigenere': 'KEY (default)',
      'substitution': 'qwertyuiopasdfghjklzxcvbnm',
    };
    return placeholders[selectedCipher] || '';
  };

  const getKeyHint = () => {
    const hints = {
      'caesar': 'Enter a number (1-25) to shift letters',
      'vigenere': 'Enter a word or phrase for encryption key',
      'substitution': 'Enter 26 unique letters for substitution',
    };
    return hints[selectedCipher] || '';
  };

  return (
    <form onSubmit={handleSubmit} className="converter-form">
      <div className="form-header">
        <h3>Configure & Convert</h3>
        <p>Enter your text and configure parameters</p>
      </div>

      <div className="form-group">
        <div className="label-row">
          <label htmlFor="plaintext">Plaintext Input</label>
          <span className="char-count" title="Character count">{charCount} characters</span>
        </div>
        <textarea
          id="plaintext"
          value={plaintext}
          onChange={handleTextChange}
          placeholder="Enter the text you want to encrypt..."
          rows={8}
          disabled={loading}
          spellCheck="false"
          className="modern-textarea"
        />
        <div className="input-hint">
          <span role="img" aria-label="info">ℹ️</span> Supports uppercase, lowercase, numbers, and special characters
        </div>
      </div>

      {needsKey && (
        <div className="form-group">
          <div className="label-row">
            <label htmlFor="key">{getKeyLabel()}</label>
            <span className="optional">Optional</span>
          </div>
          <input
            type="text"
            id="key"
            value={key}
            onChange={e => setKey(e.target.value)}
            placeholder={getKeyPlaceholder()}
            disabled={loading}
            className="modern-input"
          />
          <div className="input-hint">
            <span role="img" aria-label="hint">💡</span> {getKeyHint()}
          </div>
        </div>
      )}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={loading || !plaintext.trim()} title="Convert text">
          {loading ? <span className="loader"></span> : 'Convert'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleClear} disabled={loading} title="Clear form">
          Clear
        </button>
      </div>
    </form>
  );
};

export default ConverterForm;
