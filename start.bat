@echo off
REM Cipher Converter - Full Stack Application Startup Script

setlocal enabledelayedexpansion

echo.
echo ===================================
echo  Cipher Converter - Full Stack App
echo ===================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed.
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is installed
node --version
npm --version
echo.

REM Start backend
echo Starting Backend Server...
cd backend
call npm install
if errorlevel 1 (
    echo Failed to install backend dependencies
    pause
    exit /b 1
)

echo Starting Express server on port 5000...
start "Backend Server" cmd /k "npm start"
echo.

REM Wait for backend to start
timeout /t 3 /nobreak

REM Start frontend
echo Starting Frontend Server...
cd ..\frontend
call npm install
if errorlevel 1 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
)

echo Starting React server on port 3000...
start "Frontend Server" cmd /k "npm start"
echo.

echo ===================================
echo Both servers are starting...
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo API Docs: http://localhost:5000/api/ciphers
echo ===================================
echo.
echo NOTE: Frontend may take a few moments to compile
echo Please wait for both windows to finish loading...
echo.
pause
