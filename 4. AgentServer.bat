@echo off
title AgentServer

set NODE_ENV=production
set MODULE=AgentServer

:: Proxy Bindings
set BIND_IP=0.0.0.0
set BIND_PORT=8002

:: Actual Server Bindings
set REMOTE_IP=138.201.58.79
set REMOTE_PORT=16004

:: Limits
set IP_LIMIT=20
set HWID_LIMIT=3

:: Block country access
:: set BLOCKED_COUNTRIES=TR,GB,USA

node bin/index