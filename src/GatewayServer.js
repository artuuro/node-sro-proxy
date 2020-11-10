import Proxy from '@core/Proxy';
import { GatewayServer, Database } from '@config/index';

const module = new Proxy({
  ...GatewayServer,
  MSSQL: Database
});

module.start();
