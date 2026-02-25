const express = require('express');
const CipherConverter = require('./ciphers');

const router = express.Router();

// Caesar Cipher endpoint
router.post('/caesar', (req, res) => {
  const { plaintext, shift = 3 } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.caesarCipher(plaintext, shift);
  res.json({ 
    ciphertext,
    algorithm: 'Caesar Cipher',
    shift
  });
});

// ROT13 endpoint
router.post('/rot13', (req, res) => {
  const { plaintext } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.rot13(plaintext);
  res.json({ 
    ciphertext,
    algorithm: 'ROT13'
  });
});

// Atbash Cipher endpoint
router.post('/atbash', (req, res) => {
  const { plaintext } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.atbashCipher(plaintext);
  res.json({ 
    ciphertext,
    algorithm: 'Atbash Cipher'
  });
});

// Reverse Cipher endpoint
router.post('/reverse', (req, res) => {
  const { plaintext } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.reverseCipher(plaintext);
  res.json({ 
    ciphertext,
    algorithm: 'Reverse Cipher'
  });
});

// Substitution Cipher endpoint
router.post('/substitution', (req, res) => {
  const { plaintext, key = 'qwertyuiopasdfghjklzxcvbnm' } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.substitutionCipher(plaintext, key);
  res.json({ 
    ciphertext,
    algorithm: 'Substitution Cipher'
  });
});

// Vigenere Cipher endpoint
router.post('/vigenere', (req, res) => {
  const { plaintext, key = 'KEY' } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.vigenereCipher(plaintext, key);
  res.json({ 
    ciphertext,
    algorithm: 'Vigenere Cipher',
    key
  });
});

// Base64 Encode endpoint
router.post('/base64-encode', (req, res) => {
  const { plaintext } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.base64Encode(plaintext);
  res.json({ 
    ciphertext,
    algorithm: 'Base64 Encoding'
  });
});

// Base64 Decode endpoint
router.post('/base64-decode', (req, res) => {
  const { plaintext } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.base64Decode(plaintext);
  res.json({ 
    ciphertext,
    algorithm: 'Base64 Decoding'
  });
});

// Morse Code endpoint
router.post('/morse', (req, res) => {
  const { plaintext } = req.body;
  
  if (!plaintext) {
    return res.status(400).json({ error: 'Plaintext is required' });
  }

  const ciphertext = CipherConverter.morseCode(plaintext);
  res.json({ 
    ciphertext,
    algorithm: 'Morse Code'
  });
});

// Get all available ciphers
router.get('/ciphers', (req, res) => {
  res.json({
    ciphers: [
      {
        name: 'Caesar Cipher',
        endpoint: '/caesar',
        description: 'Shifts each letter by a fixed number',
        parameters: ['plaintext', 'shift (optional)']
      },
      {
        name: 'ROT13',
        endpoint: '/rot13',
        description: 'Special Caesar cipher with shift of 13',
        parameters: ['plaintext']
      },
      {
        name: 'Atbash Cipher',
        endpoint: '/atbash',
        description: 'Reverses alphabet (A↔Z, B↔Y, etc)',
        parameters: ['plaintext']
      },
      {
        name: 'Reverse Cipher',
        endpoint: '/reverse',
        description: 'Reverses the entire string',
        parameters: ['plaintext']
      },
      {
        name: 'Substitution Cipher',
        endpoint: '/substitution',
        description: 'Substitutes letters using a key',
        parameters: ['plaintext', 'key (optional)']
      },
      {
        name: 'Vigenere Cipher',
        endpoint: '/vigenere',
        description: 'Polyalphabetic substitution cipher',
        parameters: ['plaintext', 'key (optional)']
      },
      {
        name: 'Base64 Encoding',
        endpoint: '/base64-encode',
        description: 'Encodes text to Base64',
        parameters: ['plaintext']
      },
      {
        name: 'Base64 Decoding',
        endpoint: '/base64-decode',
        description: 'Decodes Base64 text',
        parameters: ['plaintext']
      },
      {
        name: 'Morse Code',
        endpoint: '/morse',
        description: 'Converts text to Morse code',
        parameters: ['plaintext']
      }
    ]
  });
});

module.exports = router;
