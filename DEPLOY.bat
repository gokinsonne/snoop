@echo off
chcp 65001 >/dev/null
cd /d "D:\1 AA\ЗАПУСК САЙТА\snoop-dogg-dollars"

echo ========================================
echo  Snoop Dogg Dollars - Auto Deploy
echo ========================================

git config --global --add safe.directory "D:/1 AA/ЗАПУСК САЙТА/snoop-dogg-dollars" 2>/dev/null

git add -A
git status

echo.
echo ========================================
echo  Committing...
echo ========================================
git commit -m "seo: add review casinos faq pages"

echo.
echo ========================================
echo  Pushing to Vercel...
echo ========================================
git push

echo.
echo ========================================
echo  DONE! Check Vercel dashboard.
echo ========================================
pause
