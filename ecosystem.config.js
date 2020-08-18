module.exports = {
  apps: [
    {
      name: 'GatewayServer',
      script: 'bin/index.js',
      instances: 2,
      autorestart: true,
      env: {
        NODE_ENV: 'development',
        MODULE: 'GatewayServer',
        node_args: "--max_old_space_size=1024"
      },
      env_production: {
        NODE_ENV: 'production',
        MODULE: 'GatewayServer',
        node_args: "--max_old_space_size=4096"
      }
    },
    {
      name: 'AgentServer',
      script: 'bin/index.js',
      instances: 6,
      autorestart: true,
      env: {
        NODE_ENV: 'development',
        MODULE: 'AgentServer',
        node_args: "--max_old_space_size=1024"
      },
      env_production: {
        NODE_ENV: 'production',
        MODULE: 'AgentServer',
        node_args: "--max_old_space_size=4096"
      }
    },
    /** 
    {
      name: 'DownloadServer',
      script: 'bin/index.js',
      instances: 2,
      autorestart: true,
      env: {
        NODE_ENV: 'development',
        MODULE: 'DownloadServer',
        node_args: "--max_old_space_size=1024"
      },
      env_production: {
        NODE_ENV: 'production',
        MODULE: 'DownloadServer',
        node_args: "--max_old_space_size=4096"
      }
    },*/
  ]
};
