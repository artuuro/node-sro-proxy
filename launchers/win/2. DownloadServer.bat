@echo off
title DownloadServer

cd ../../

set NODE_ENV=production
set MODULE=DownloadServer

:: Proxy Bindings
set BIND_IP=0.0.0.0
set BIND_PORT=8003

:: Actual Server Bindings
set REMOTE_IP=138.201.58.79
set REMOTE_PORT=16002

:: IP Limit:
set IP_LIMIT=3

:: Block country access
:: set BLOCKED_COUNTRIES=TR,GB,USA

node bin/index