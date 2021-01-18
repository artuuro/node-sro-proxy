@echo off
title GatewayServer

set NODE_ENV=production
set MODULE=GatewayServer

:: Proxy Bindings
set BIND_IP=0.0.0.0
set BIND_PORT=7001

:: Actual Server Bindings
set REMOTE_IP=138.201.58.79
set REMOTE_PORT=15779

:: AgentServer Redirect
set REDIRECT_AGENT_IP=138.201.58.79
set REDIRECT_AGENT_PORT=8002

:: DownloadServer Redirect
set REDIRECT_DOWNLOAD_IP=138.201.58.79
set REDIRECT_DOWNLOAD_PORT=8003

:: Other
set FAKE_PLAYERS=403
set IP_LIMIT=20
set HWID_LIMIT=3
set BLOCK_BOTS=false

:: Value to send automatically at login captcha
set LOGIN_CAPTCHA=0

:: Block country access
:: set BLOCKED_COUNTRIES=TR,GB,USA

node bin/index