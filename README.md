# node-sr-proxy
_NodeJS (ES9) packet interceptor & middle-ware layer for MMORPG Silkroad Online Game Client <---> Server._

# Features
- Correct client->server opcode whitelisting
- Packet intercepting & manipulation
- Multi module
- Basic middlewares:
  - Auto-Captcha
  - Online players
  - AgentServer redirect
  - DownloadServer redirect
  - ShardList rewrite (fake online players)

## Prerequesities
- NodeJS LTS: https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
- Silkroad Online game client & server 
- Yarn package manager: `npm i -g yarn`
- PM2 `yarn add -g pm2`

## Setup
- Install dependencies `yarn`
- Configure modules at `src/config/` files accordingly.
- Write middlewares by example from `src/controllers/`.

## Launch development mode
- GatewayServer `yarn dev:GatewayServer`
- AgentServer `yarn dev:AgentServer`
- DownloadServer `yarn dev:DownloadServer`

## Launch production mode
- GatewayServer `yarn GatewayServer`
- AgentServer `yarn AgentServer`
- DownloadServer `yarn DownloadServer`
- All at once `pm2 start && pm2 dashboard`

## Build
`yarn build`

# What else?
- packet docs https://github.com/DummkopfOfHachtenduden/SilkroadDoc
- silkroad-security https://github.com/EmirAzaiez/SilkroadSecurityJS

## Would like to contribute?
- For bug reporting use issues.
- For code contributions do a pull request.

Built with ♡ by Artuuro @ https://sroparadise.net