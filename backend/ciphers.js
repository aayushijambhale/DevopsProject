// Cipher Algorithms

class CipherConverter {
  // Caesar Cipher - shift each character by a fixed number
  static caesarCipher(text, shift = 3) {
    return text
      .split('')
      .map((char) => {
        if (/[a-z]/.test(char)) {
          return String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
        } else if (/[A-Z]/.test(char)) {
          return String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
        }
        return char;
      })
      .join('');
  }

  // ROT13 - special case of Caesar cipher with shift of 13
  static rot13(text) {
    return this.caesarCipher(text, 13);
  }

  // Atbash Cipher - reverse alphabet substitution
  static atbashCipher(text) {
    return text
      .split('')
      .map((char) => {
        if (/[a-z]/.test(char)) {
          return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
        } else if (/[A-Z]/.test(char)) {
          return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
        }
        return char;
      })
      .join('');
  }

  // Reverse Cipher - reverses the string
  static reverseCipher(text) {
    return text.split('').reverse().join('');
  }

  // Simple Substitution Cipher using a predefined key
  static substitutionCipher(text, key = 'qwertyuiopasdfghjklzxcvbnm') {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cipher = {};
    
    for (let i = 0; i < alphabet.length; i++) {
      cipher[alphabet[i]] = key[i];
      cipher[alphabet[i].toUpperCase()] = key[i].toUpperCase();
    }

    return text
      .split('')
      .map((char) => cipher[char] || char)
      .join('');
  }

  // Vigenere Cipher - uses a key for polyalphabetic substitution
  static vigenereCipher(text, key = 'KEY') {
    key = key.toLowerCase();
    let keyIndex = 0;

    return text
      .split('')
      .map((char) => {
        if (/[a-z]/.test(char)) {
          const shift = key.charCodeAt(keyIndex % key.length) - 97;
          keyIndex++;
          return String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
        } else if (/[A-Z]/.test(char)) {
          const shift = key.charCodeAt(keyIndex % key.length) - 97;
          keyIndex++;
          return String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
        }
        return char;
      })
      .join('');
  }

  // Base64 Encoding
  static base64Encode(text) {
    return Buffer.from(text).toString('base64');
  }

  // Base64 Decoding
  static base64Decode(text) {
    try {
      return Buffer.from(text, 'base64').toString('utf-8');
    } catch (error) {
      return 'Invalid Base64 input';
    }
  }

  // Morse Code
  static morseCode(text) {
    const morseMap = {
      'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
      'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
      'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
      'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
      'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
      'Z': '--..', 
      '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
      '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
      '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
      '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
      '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
      '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
      '$': '...-..-', '@': '.--.-.'
    };

    return text
      .toUpperCase()
      .split('')
      .map((char) => morseMap[char] || char)
      .join(' ');
  }
}

module.exports = CipherConverter;
