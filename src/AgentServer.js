import Proxy from "@core/Proxy";
import { AgentServer, Database } from "@config/index";
import * as ctrl from "@control/index";
import * as svc from "@service/index";

const module = new Proxy({
  ...AgentServer,
  MSSQL: Database
});

module.start();
