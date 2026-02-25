# SETUP & RUN GUIDE

## ⚡ Quick Start (Windows)

### Step 1: Install Node.js
Make sure you have Node.js installed on your system. Download from [nodejs.org](https://nodejs.org/)

### Step 2: Open Terminal/PowerShell

Navigate to the project directory:
```powershell
cd 'e:\Aayu Devops\cipher-converter'
```

### Step 3: Install Backend Dependencies

```powershell
cd backend
npm install
```

### Step 4: Start Backend Server

```powershell
npm start
```

You should see:
```
Server is running on http://localhost:5000
API Documentation: http://localhost:5000/api/ciphers
```

### Step 5: Open New Terminal Window

Keep the backend running. Open a new PowerShell/Terminal window.

### Step 6: Install Frontend Dependencies

```powershell
cd frontend
npm install
```

### Step 7: Start Frontend Server

```powershell
npm start
```

This will automatically open your browser to `http://localhost:3000`

## ✅ Verify Installation

1. **Backend API**: Visit `http://localhost:5000/api/ciphers` - should show available ciphers
2. **Frontend**: Open `http://localhost:3000` - should show the Cipher Converter UI
3. **Test Conversion**: 
   - Enter "hello"
   - Select "Caesar Cipher"
   - Click "Convert to Cipher Text"
   - Should display "khoor"

## 📡 Testing API Endpoints

### Using PowerShell (Windows)

```powershell
# Caesar Cipher
$body = @{plaintext = "hello world"; shift = 3} | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:5000/api/caesar" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body

# Morse Code
$body = @{plaintext = "SOS"} | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:5000/api/morse" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body
```

## 🐛 Troubleshooting

### Issue: "npm: The term 'npm' is not recognized"
**Solution**: Node.js is not installed or not in PATH
- Install Node.js from nodejs.org
- Restart PowerShell/Terminal

### Issue: "Port 5000 is already in use"
**Solution**: Change the port in `backend/.env`
```
PORT=5001
```

### Issue: "Cannot find module 'express'"
**Solution**: Dependencies not installed
```powershell
cd backend
npm install
```

### Issue: Frontend shows "Cannot POST /api/..."
**Solution**: Backend is not running
- Make sure backend server is running on port 5000

## 📂 Project Structure

```
cipher-converter/
├── backend/               # Node.js Express API
│   ├── server.js
│   ├── ciphers.js
│   ├── routes.js
│   ├── package.json
│   └── .env
├── frontend/              # React.js UI
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
├── README.md
└── SETUP.md (this file)
```

## 🎯 Features Available

- ✅ Caesar Cipher (with shift)
- ✅ ROT13
- ✅ Atbash Cipher
- ✅ Reverse Cipher
- ✅ Substitution Cipher
- ✅ Vigenere Cipher (with key)
- ✅ Base64 Encode/Decode
- ✅ Morse Code

## 🔄 Development Workflow

### Backend Development
```powershell
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development
```powershell
cd frontend
npm start    # Starts dev server with hot reload
```

## 🚀 Production Build

### Build Frontend
```powershell
cd frontend
npm run build
```

Output will be in `frontend/build/` directory

## 📚 Additional Commands

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 💡 Tips

1. **Keep both servers running** - Backend and Frontend need to run simultaneously
2. **Check API first** - If frontend shows errors, first verify backend is working
3. **Port conflicts** - Make sure ports 5000 and 3000 are available
4. **Clear cache** - If dependencies fail: `npm cache clean --force`

## 🆘 Need Help?

1. Check the main README.md for detailed API documentation
2. Verify both servers are running on correct ports
3. Check browser console (F12) for frontend errors
4. Check terminal output for backend errors

---

Happy encrypting! 🔐
