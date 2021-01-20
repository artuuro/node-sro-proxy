@echo off
title API_Proxy

cd ../../

set NODE_ENV=production
set MODULE=API_Proxy

:: Proxy DB API Binding:
set BIND_PORT=1991

:: Access Token:
set ACCESS_TOKEN=sroparadise.net

node bin/index