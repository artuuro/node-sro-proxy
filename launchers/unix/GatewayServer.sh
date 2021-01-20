cd ../../

export NODE_ENV=production
export MODULE=GatewayServer

# Proxy Bindings
export BIND_IP=0.0.0.0
export BIND_PORT=8001

# Actual Server Bindings
export REMOTE_IP=138.201.58.79
export REMOTE_PORT=15779

# AgentServer Redirect
export REDIRECT_AGENT_IP=138.201.58.79
export REDIRECT_AGENT_PORT=8002

# DownloadServer Redirect
export REDIRECT_DOWNLOAD_IP=138.201.58.79
export REDIRECT_DOWNLOAD_PORT=8003

# Other
export FAKE_PLAYERS=403
export IP_LIMIT=20
export HWID_LIMIT=3
export BLOCK_BOTS=false

# Value to send automatically at login captcha
export LOGIN_CAPTCHA=0

# Block country access
# export BLOCKED_COUNTRIES=TR,GB,USA

node bin/index