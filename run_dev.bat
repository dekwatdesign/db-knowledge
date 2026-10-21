@echo off
title DB Knowledge Generator (Dev Mode)
echo ========================================================
echo   Starting DB Knowledge Generator in Dev Mode...
echo   (Vite dev server + Tauri native window)
echo ========================================================
echo.
call "C:\Program Files (x86)\Microsoft Visual Studio\18\BuildTools\VC\Auxiliary\Build\vcvars64.bat"
cargo tauri dev
