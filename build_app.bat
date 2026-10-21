@echo off
title DB Knowledge Generator - Build Production App
echo ========================================================
echo   Building DB Knowledge Generator Standalone EXE...
echo   (Embedding static frontend assets directly into binary)
echo ========================================================
echo.

call "C:\Program Files (x86)\Microsoft Visual Studio\18\BuildTools\VC\Auxiliary\Build\vcvars64.bat"

echo.
echo [1/3] Building frontend bundle...
call bun run build
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Frontend build failed.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/3] Building standalone Tauri executable...
call cargo tauri build --no-bundle
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Tauri build failed.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [3/3] Copying production executable to root folder...
copy /Y "src-tauri\target\release\db_knowledge_app.exe" "db-knowledge-app.exe"
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Failed to copy executable.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ========================================================
echo   SUCCESS! Production binary generated: db-knowledge-app.exe
echo   This standalone app requires NO dev server or localhost.
echo ========================================================
echo.
pause
