@echo off
title DB Knowledge Generator
echo ========================================================
echo   DB Knowledge Generator - Windows Desktop App
echo ========================================================
echo.

if exist "db-knowledge-app.exe" (
    echo Launching Production Build...
    start "" "db-knowledge-app.exe"
    exit /b 0
)

if exist "src-tauri\target\release\db_knowledge_app.exe" (
    echo Launching Production Build...
    start "" "src-tauri\target\release\db_knowledge_app.exe"
    exit /b 0
)

if exist "src-tauri\target\release\db-knowledge-app.exe" (
    echo Launching Production Build...
    start "" "src-tauri\target\release\db-knowledge-app.exe"
    exit /b 0
)

echo No pre-built production binary found.
echo Building standalone executable now...
call build_app.bat
if exist "db-knowledge-app.exe" (
    start "" "db-knowledge-app.exe"
)
exit /b 0
