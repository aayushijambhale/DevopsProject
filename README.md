# Cipher Text Converter

A full-stack web application for converting plaintext to cipher text using various encryption algorithms. Built with **React.js** (frontend) and **Node.js + Express** (backend).

## 🎯 Features

- **9 Different Cipher Algorithms**:
  - Caesar Cipher (with customizable shift)
  - ROT13
  - Atbash Cipher
  - Reverse Cipher
  - Substitution Cipher
  - Vigenere Cipher (with key)
  - Base64 Encoding/Decoding
  - Morse Code

- **Modern UI**: Beautiful, responsive design with gradient backgrounds
- **Real-time Conversion**: Instant text conversion
- **Copy to Clipboard**: Easy sharing of cipher text
- **API Documentation**: Built-in API explorer

## 📁 Project Structure

```
cipher-converter/
├── backend/
│   ├── package.json
│   ├── server.js           # Express server entry point
│   ├── ciphers.js          # Cipher algorithms implementation
│   ├── routes.js           # API routes
│   └── .env                # Environment variables
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   └── components/
│   │       ├── CipherSelector.js
│   │       ├── CipherSelector.css
│   │       ├── ConverterForm.js
│   │       ├── ConverterForm.css
│   │       ├── ResultDisplay.js
│   │       └── ResultDisplay.css
│   └── .env                # Environment variables
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
# Or for development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will open at `http://localhost:3000`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```

### Get Available Ciphers
```
GET /api/ciphers
```

### Caesar Cipher
```
POST /api/caesar
Content-Type: application/json

{
  "plaintext": "hello",
  "shift": 3
}
```

### ROT13
```
POST /api/rot13
Content-Type: application/json

{
  "plaintext": "hello"
}
```

### Atbash Cipher
```
POST /api/atbash
Content-Type: application/json

{
  "plaintext": "hello"
}
```

### Reverse Cipher
```
POST /api/reverse
Content-Type: application/json

{
  "plaintext": "hello"
}
```

### Substitution Cipher
```
POST /api/substitution
Content-Type: application/json

{
  "plaintext": "hello",
  "key": "qwertyuiopasdfghjklzxcvbnm"
}
```

### Vigenere Cipher
```
POST /api/vigenere
Content-Type: application/json

{
  "plaintext": "hello",
  "key": "secret"
}
```

### Base64 Encode
```
POST /api/base64-encode
Content-Type: application/json

{
  "plaintext": "hello"
}
```

### Base64 Decode
```
POST /api/base64-decode
Content-Type: application/json

{
  "plaintext": "aGVsbG8="
}
```

### Morse Code
```
POST /api/morse
Content-Type: application/json

{
  "plaintext": "hello"
}
```

## 🎨 Example Usage

### Using cURL

```bash
# Caesar Cipher
curl -X POST http://localhost:5000/api/caesar \
  -H "Content-Type: application/json" \
  -d '{"plaintext": "hello world", "shift": 3}'

# Vigenere Cipher
curl -X POST http://localhost:5000/api/vigenere \
  -H "Content-Type: application/json" \
  -d '{"plaintext": "hello world", "key": "SECRET"}'

# Base64 Encode
curl -X POST http://localhost:5000/api/base64-encode \
  -H "Content-Type: application/json" \
  -d '{"plaintext": "hello world"}'

# Morse Code
curl -X POST http://localhost:5000/api/morse \
  -H "Content-Type: application/json" \
  -d '{"plaintext": "SOS"}'
```

### Response Format

All cipher endpoints return a JSON response with the following format:

```json
{
  "ciphertext": "khoor zruog",
  "algorithm": "Caesar Cipher",
  "shift": 3
}
```

## 🛠️ Technology Stack

### Backend
- **Express.js** - Web server framework
- **Node.js** - Runtime environment
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Frontend
- **React.js** - UI library
- **CSS3** - Styling with modern features
- **Fetch API** - HTTP client for API calls

## 📝 License

This project is open source and available under the ISC License.

## 👨‍💻 Author

Created as a learning project for cipher algorithms and full-stack JavaScript development.

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 is already in use, you can change it in `backend/.env`:
```
PORT=5001
```

### CORS Errors
Make sure the backend is running on port 5000 before starting the frontend. The frontend has a proxy setting in `package.json` that points to `http://localhost:5000`.

### Dependency Issues
If you encounter issues with dependencies, try clearing the cache:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learning Resources

- [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Vigenere Cipher](https://en.wikipedia.org/wiki/Vigenère_cipher)
- [Base64 Encoding](https://en.wikipedia.org/wiki/Base64)
- [Morse Code](https://en.wikipedia.org/wiki/Morse_code)

---

Enjoy converting your text to cipher! 🔐
