@echo off

echo Iniciando servidor Laravel...
start cmd /k "php artisan serve"

echo Iniciando servidor React / Vite...
start cmd /k "npm run dev"

pause