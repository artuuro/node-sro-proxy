cd ../../

export NODE_ENV=production
export MODULE=DownloadServer

# Proxy Bindings
export BIND_IP=0.0.0.0
export BIND_PORT=8003

# Actual Server Bindings
export REMOTE_IP=138.201.58.79
export REMOTE_PORT=16002

# IP Limit:
export IP_LIMIT=3

# Block country access
#export BLOCKED_COUNTRIES=TR,GB,USA

node bin/index