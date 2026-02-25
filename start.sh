#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Cipher Converter - Full Stack Application ===${NC}"
echo -e "${BLUE}Starting both Backend and Frontend servers...${NC}\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo -e "${GREEN}✓ Node.js is installed${NC}"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo ""

# Start backend
echo -e "${BLUE}Starting Backend Server...${NC}"
cd backend
npm install > /dev/null 2>&1
npm start &
BACKEND_PID=$!
echo -e "${GREEN}✓ Backend started (PID: $BACKEND_PID)${NC}"
echo "Backend running on: http://localhost:5000"
echo ""

# Wait a bit for backend to start
sleep 3

# Start frontend
echo -e "${BLUE}Starting Frontend Server...${NC}"
cd ../frontend
npm install > /dev/null 2>&1
npm start &
FRONTEND_PID=$!
echo -e "${GREEN}✓ Frontend started (PID: $FRONTEND_PID)${NC}"
echo "Frontend running on: http://localhost:3000"
echo ""

echo -e "${GREEN}=== Both servers are running ===${NC}"
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:5000"
echo "API Documentation: http://localhost:5000/api/ciphers"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for interrupt
trap "kill $BACKEND_PID $FRONTEND_PID" INT
wait
