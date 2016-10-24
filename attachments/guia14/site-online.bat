@echo off
ping "%1" -n 1 -w 1000 > nul
if errorlevel 1 (
	echo Site fora do ar - %1
) else (
	echo Site funcionando - %1
)