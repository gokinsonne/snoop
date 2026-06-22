@echo off
chcp 65001 >nul
cd /d "D:\1 AA\ЗАПУСК САЙТА\snoop-dogg-dollars"

echo ========================================
echo  Snoop Dogg Dollars - Fix & Deploy
echo ========================================

git add -A
git status

echo.
echo ========================================
echo  Committing with trailingSlash fix...
echo ========================================
git commit -m "fix: add trailingSlash for static routes"

echo.
echo ========================================
echo  Pushing to Vercel...
echo ========================================
git push

echo.
echo ========================================
echo  DONE! Check Vercel in 1 minute.
echo ========================================
pause
