@echo off
title DB Knowledge Generator (Dev Mode)
echo ========================================================
echo   Starting DB Knowledge Generator in Dev Mode...
echo   (Vite dev server + Tauri native window)
echo ========================================================
echo.
:: Clean up any stale process holding port 5173 to prevent ERR_CONNECTION_REFUSED
powershell -NoProfile -Command "$conns = Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue; if ($conns) { $pids = $conns | Select-Object -ExpandProperty OwningProcess -Unique; foreach ($p in $pids) { Stop-Process -Id $p -Force -ErrorAction SilentlyContinue } }"

call "C:\Program Files (x86)\Microsoft Visual Studio\18\BuildTools\VC\Auxiliary\Build\vcvars64.bat"
cargo tauri dev
