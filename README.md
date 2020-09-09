# node-sro-proxy

## Features
- Low memory usage & low latency
- Client->server packet whitelists
- Both way packet interception & manipulation
- Cluster mode enabling to handle basically unlimited amount of connections (more clusters = more connections)
- Plugin/Service system allowing to load up things like MSSQL, Memory Cache (already provided) and similar.
- Packet-based Middleware system with basic features as:
  - Client HWID capture
  - Auto-Captcha
  - AgentServer redirect
  - DownloadServer redirect
  - ShardList rewrite (fake online players)
  - Fortress SQL injection fix

### Prerequesities
- NodeJS LTS: https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
- Silkroad Online game client & server 
- Yarn package manager: `npm i -g yarn`
- PM2 `yarn add -g pm2`

### Setup
- Install dependencies `yarn`
- Setup `src/config/AgentServer.js`, `src/config/GatewayServer.js` and `src/config/DownloadServer.js` accordingly.
- Rename `src/config/Database.js.example` to `Database.js` and configure accordingly.
- Run `yarn install:db` to create (or drop & create again) the initial database.

### Launch in development mode
- GatewayServer `yarn dev:GatewayServer`
- AgentServer `yarn dev:AgentServer`
- DownloadServer `yarn dev:DownloadServer`

### Launch in production mode
- GatewayServer `yarn GatewayServer`
- AgentServer `yarn AgentServer`
- DownloadServer `yarn DownloadServer`
- All at once `pm2 start && pm2 dashboard`

### Build
`yarn build`

## What else?
- packet docs https://github.com/DummkopfOfHachtenduden/SilkroadDoc
- silkroad-security https://github.com/EmirAzaiez/SilkroadSecurityJS
- SequelizeJS (for MSSQL) https://sequelize.org/master/manual/model-basics.html

## Contributions?
- For bug reporting use issues.
- For code contributions do a pull request.

Built with ♡ by Artuuro @ https://sroparadise.net