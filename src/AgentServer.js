import Proxy from "@core/Proxy";
import { AgentServer, Database } from "@config/index";

const module = new Proxy({
    ...AgentServer,
    MSSQL: Database
});

module.start();
