# PROJECT SUMMARY & QUICK REFERENCE

## 📦 What Was Created

A complete **Plaintext to Cipher Text Conversion Application** with:
- **Backend**: Node.js + Express API
- **Frontend**: React.js web application
- **9 Cipher Algorithms**: Caesar, ROT13, Atbash, Reverse, Substitution, Vigenere, Base64, Morse
- **Modern UI**: Responsive design with gradient styling
- **Docker Support**: Optional containerization
- **Full Documentation**: Setup guides and API reference

---

## 🚀 START HERE

### For Windows Users (EASIEST)
1. Double-click `start.bat` in the root directory
2. Two terminal windows will open
3. Wait for "Frontend: http://localhost:3000" message
4. Browser opens automatically
5. Done! Start converting text

### For Mac/Linux Users
1. Run `./start.sh` in terminal
2. Open `http://localhost:3000` in browser

### Manual Start
```bash
# Terminal 1 - Backend
cd backend
npm install
npm start

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

---

## 📂 PROJECT STRUCTURE

```
cipher-converter/
├── backend/
│   ├── server.js           ← Main Express server
│   ├── ciphers.js          ← 9 cipher algorithms
│   ├── routes.js           ← API endpoints
│   ├── package.json
│   ├── .env                ← Config (PORT=5000)
│   └── Dockerfile          ← For Docker
│
├── frontend/
│   ├── src/
│   │   ├── App.js          ← Main React component
│   │   ├── components/
│   │   │   ├── CipherSelector.js
│   │   │   ├── ConverterForm.js
│   │   │   └── ResultDisplay.js
│   │   └── index.js
│   ├── public/index.html
│   ├── package.json
│   ├── .env                ← Config (REACT_APP_API_URL)
│   └── Dockerfile          ← For Docker
│
├── README.md               ← Full documentation
├── SETUP.md                ← Detailed setup guide
├── start.bat               ← Quick start (Windows)
├── start.sh                ← Quick start (Mac/Linux)
├── docker-compose.yml      ← Docker configuration
└── .gitignore
```

---

## 🔗 IMPORTANT URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:3000 | Web interface |
| Backend API | http://localhost:5000 | REST API |
| API Docs | http://localhost:5000/api/ciphers | Available algorithms |
| Health Check | http://localhost:5000/api/health | Server status |

---

## 🔐 AVAILABLE CIPHERS

| Cipher | Endpoint | Parameters | Example |
|--------|----------|-----------|---------|
| Caesar | `/caesar` | plaintext, shift | "hello" + shift 3 = "khoor" |
| ROT13 | `/rot13` | plaintext | "hello" = "uryyb" |
| Atbash | `/atbash` | plaintext | "hello" = "svool" |
| Reverse | `/reverse` | plaintext | "hello" = "olleh" |
| Substitution | `/substitution` | plaintext, key | Custom alphabet |
| Vigenere | `/vigenere` | plaintext, key | Uses keyword |
| Base64 | `/base64-encode` | plaintext | "hello" = "aGVsbG8=" |
| Base64 | `/base64-decode` | plaintext | "aGVsbG8=" = "hello" |
| Morse | `/morse` | plaintext | "SOS" = "... --- ..." |

---

## 🧪 TEST THE API

### Using PowerShell (Windows)
```powershell
# Caesar Cipher
$body = @{plaintext = "hello world"; shift = 3} | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:5000/api/caesar" `
  -Method POST -ContentType "application/json" -Body $body

# Morse Code
$body = @{plaintext = "SOS"} | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:5000/api/morse" `
  -Method POST -ContentType "application/json" -Body $body
```

### Using cURL (Mac/Linux)
```bash
# Caesar Cipher
curl -X POST http://localhost:5000/api/caesar \
  -H "Content-Type: application/json" \
  -d '{"plaintext": "hello world", "shift": 3}'

# Base64 Encode
curl -X POST http://localhost:5000/api/base64-encode \
  -H "Content-Type: application/json" \
  -d '{"plaintext": "hello"}'
```

---

## 📋 RESPONSE FORMAT

All API endpoints return JSON:
```json
{
  "ciphertext": "khoor zruog",
  "algorithm": "Caesar Cipher",
  "shift": 3
}
```

---

## 🐛 COMMON ISSUES & FIXES

| Issue | Solution |
|-------|----------|
| Port 5000 in use | Change `PORT=5001` in `backend/.env` |
| Port 3000 in use | Change React port in `frontend/.env` |
| "Cannot find module" | Run `npm install` in the directory |
| API errors in browser | Ensure backend is running on port 5000 |
| Dependencies fail | Run `npm cache clean --force` && `npm install` |

---

## 💻 TECH STACK

**Backend:**
- Node.js (Runtime)
- Express.js (Framework)
- CORS (Cross-origin support)
- Dotenv (Configuration)

**Frontend:**
- React 18 (UI Library)
- CSS3 (Styling)
- Fetch API (HTTP)

---

## 📚 KEY FILES EXPLAINED

### backend/ciphers.js
Contains `CipherConverter` class with 8 static cipher methods:
- `caesarCipher(text, shift)`
- `rot13(text)`
- `atbashCipher(text)`
- `reverseCipher(text)`
- `substitutionCipher(text, key)`
- `vigenereCipher(text, key)`
- `base64Encode(text)`
- `base64Decode(text)`
- `morseCode(text)`

### backend/routes.js
Defines POST endpoints for each cipher algorithm. Each endpoint:
- Validates input
- Calls appropriate cipher method
- Returns JSON response

### frontend/App.js
Main React component that:
- Manages selected cipher state
- Handles form submission
- Fetches API results
- Displays results

### frontend/components/
- **CipherSelector.js**: Button grid for algorithm selection
- **ConverterForm.js**: Text input and key field
- **ResultDisplay.js**: Shows cipher text with copy button

---

## 🚢 DOCKER DEPLOYMENT

### Run with Docker Compose
```bash
docker-compose up --build
```

This starts:
- Backend on http://localhost:5000
- Frontend on http://localhost:3000

### Build Individual Docker Images
```bash
# Build backend
cd backend
docker build -t cipher-backend .

# Build frontend
cd frontend
docker build -t cipher-frontend .
```

---

## 📈 FUTURE ENHANCEMENTS

Possible additions:
- [ ] User accounts & saved conversions
- [ ] Additional ciphers (AES, RSA, Blowfish)
- [ ] Batch processing
- [ ] Decryption support
- [ ] History of conversions
- [ ] Dark mode toggle
- [ ] Mobile app
- [ ] WebSocket for real-time updates

---

## 🤝 EXTENDING THE PROJECT

### Add a New Cipher

1. **Add method to `backend/ciphers.js`:**
```javascript
static myCipher(text) {
  // Implementation
  return encryptedText;
}
```

2. **Add endpoint to `backend/routes.js`:**
```javascript
router.post('/mycipher', (req, res) => {
  const { plaintext } = req.body;
  const ciphertext = CipherConverter.myCipher(plaintext);
  res.json({ ciphertext, algorithm: 'My Cipher' });
});
```

3. **Update frontend to use it:** (handles automatically via API)

---

## ✅ CHECKLIST

Before deploying:
- [ ] Both servers start without errors
- [ ] Frontend loads on http://localhost:3000
- [ ] API responds at http://localhost:5000/api/ciphers
- [ ] Test each cipher algorithm
- [ ] Copy button works in UI
- [ ] Error handling works (empty input, invalid shift)

---

## 📞 GETTING HELP

1. Check **README.md** for detailed documentation
2. Check **SETUP.md** for installation help
3. Look at example cURL commands above
4. Check browser console (F12) for errors
5. Check backend terminal for server errors

---

## 🎯 NEXT STEPS

1. **Start the servers**: Run `start.bat` or `start.sh`
2. **Open browser**: http://localhost:3000
3. **Test conversion**: Enter text and select cipher
4. **Explore API**: Visit http://localhost:5000/api/ciphers
5. **Read documentation**: See README.md for details

---

## 📜 LICENSE

Open source - Free to use and modify

---

**Created**: February 2026
**Status**: Fully Functional ✅

Enjoy converting text to cipher! 🔐
