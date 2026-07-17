@echo off
echo.
echo  ========================================
echo    RaveInk - Vercel Deploy Baslatiliyor
echo  ========================================
echo.
cd /d C:\Users\ertug\Desktop\RaveInk\raveink-app
npx vercel --prod
echo.
echo  ========================================
echo    Deploy tamamlandi!
echo    https://raveink-app.vercel.app
echo  ========================================
echo.
pause
