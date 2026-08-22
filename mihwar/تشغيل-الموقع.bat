@echo off
title Mihwar - Local Site
cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies... (first time only)
  call npm install --no-audit --no-fund
)

echo.
echo ============================================
echo   Starting Mihwar site...
echo   Open your browser at:  http://localhost:5173
echo   (The browser will open automatically)
echo   Press Ctrl+C to stop the server.
echo ============================================
echo.

start "" http://localhost:5173
call npm run dev -- --port 5173 --strictPort
pause
