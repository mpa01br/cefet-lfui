@echo off
ping www.google.com -n 1 -w 1000 > nul
if errorlevel 1 (
	echo Site fora do ar
) else (
	echo Site funcionando
)
pause