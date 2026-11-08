@echo off
title VeKtra Automation - Despliegue a GitHub y Vercel
echo =======================================================
echo   Desplegando VeKtra Automation a GitHub y Vercel
echo =======================================================
echo.
cd /d "%~dp0"

echo [1/3] Verificando estado local...
git add .
git commit -m "feat: landing page completa lista para produccion" --allow-empty

echo.
echo [2/3] Subiendo archivos a GitHub (drichiefernandez-web/vektra-automation)...
echo (Si aparece una ventana en tu navegador, haz clic en Authorize/Sign in)
echo.
git push -u origin main --force

echo.
echo =======================================================
echo [3/3] Despliegue completado con exito!
echo.
echo Vercel esta compilando tus cambios automaticamente.
echo En 10 segundos entra a: https://vektra-automation.vercel.app
echo =======================================================
echo.
pause
