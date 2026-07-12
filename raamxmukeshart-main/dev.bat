@echo off
REM Starts (or cleanly restarts) the local dev server on port 3000.
REM Usage: double-click this file, or run `dev.bat` in this folder.

echo Stopping anything already on port 3000...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000 ^| findstr LISTENING') do taskkill /F /PID %%a >nul 2>&1

echo Starting dev server at http://localhost:3000 ...
call npm run dev
