module.exports = {
  apps : [{
    name: 'GatewayServer',
    script: 'bin/index.js',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
      MODULE: 'GatewayServer'
    },
    env_production: {
      NODE_ENV: 'production',
      MODULE: 'GatewayServer'
    }
  }, {
    name: 'DownloadServer',
    script: 'bin/index.js',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
      MODULE: 'DownloadServer'
    },
    env_production: {
      NODE_ENV: 'production',
      MODULE: 'DownloadServer'
    }
  }, {
    name: 'AgentServer',
    script: 'bin/index.js',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
      MODULE: 'AgentServer'
    },
    env_production: {
      NODE_ENV: 'production',
      MODULE: 'AgentServer'
    }
  }]
};
