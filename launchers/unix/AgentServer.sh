cd ../../

export NODE_ENV=production
export MODULE=AgentServer

# Proxy Bindings
export BIND_IP=0.0.0.0
export BIND_PORT=8002

# Actual Server Bindings
export REMOTE_IP=138.201.58.79
export REMOTE_PORT=16004

# Limits
export IP_LIMIT=20
export HWID_LIMIT=3

# Block country access
# export BLOCKED_COUNTRIES=TR,GB,USA

node bin/index