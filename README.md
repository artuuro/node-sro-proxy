# node-sr-proxy (WIP)
_NodeJS (ES9) packet interceptor & middle-ware layer for MMORPG Silkroad Online Game Server & Client._

# Features
- Packet whitelisting
- Opcode intercepting (middlewares)
- Multi module

## Prerequesities
- NodeJS LTS: https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
- Silkroad Online game client & server 
- Yarn package manager: `npm i -g yarn`
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
## Build
`yarn build`
## Wish to contribute?
- Use issues.
- Do a pull request, thanks.


PACKETS DOCUMENTATION: https://github.com/DummkopfOfHachtenduden/SilkroadDoc
Built with ♡ by Artuuro @ https://sroparadise.net,
Special thanks to https://github.com/EmirAzaiez/SilkroadSecurityJS