import Proxy from "@core/Proxy";
import { AgentServer, Database } from "@config/index";
import * as ctrl from "@control/index";
import * as svc from "@service/index";

const module = new Proxy({
  ...AgentServer,
  MSSQL: Database
});

(async () => {
  await module.registerService('database', svc.MSSQL);
  await module.registerService('cache', svc.Cache);

  await module.middleware('client', 0x705E, ctrl.SiegeActionSQLi);
  await module.middleware('client', 0x7025, ctrl.UserChatInput);
  await module.start();
})();
