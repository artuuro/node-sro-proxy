# node-sro-proxy

## Features
- Fully ES6+ JavaScript using BabelJS and NodeJS v14+.
- This is designed to definitely be the easiest way of getting your own edits/custom stuff running.
- Connection is as stable and smooth like there "would be no proxy" when running in production.
- GatewayServer, AgentServer, DownloadServer filters with configuration.
- Unlimited connections (RAM, CPU is your limit).
- Special API designed to allow easily implementing new back-end features or packet handles.
- Session detection (online/offline), updating in database, recording users to rows.
- Web APIs providing full CRUD over entire VSRO database.
- Multiple pre-built controllers to help getting you started creating new content straight away.
- Some fun stuff like modified weather packet (see `src/controllers`).

### Prerequesities
- Extract `data` folder from https://silkroad.pw/files/data.rar to the project root (.bin files are for IP geolocation and Proxy).
- Inject HWID.dll from `HWID_DLL` into your client.
- NodeJS LTS: https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
- Silkroad Online game client & server 
- Yarn package manager: `npm i -g yarn`
- PM2 `yarn add -g pm2`

### Setup
- Install dependencies `yarn`
- Setup `src/config/AgentServer.js`, `src/config/GatewayServer.js` and `src/config/DownloadServer.js` accordingly or use ENV.
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

### Other launching options:
- See `.bat` or `.sh` files for use-cases.

### Build production version
`yarn build`

## What else?
- packet docs https://github.com/DummkopfOfHachtenduden/SilkroadDoc
- silkroad-security https://github.com/EmirAzaiez/SilkroadSecurityJS
- SequelizeJS (for MSSQL) https://sequelize.org/master/manual/model-basics.html

## Contributions?
- For bug reporting use issues.
- For code contributions do a pull request.

Built with ♡ by Artuuro @ https://sroparadise.net