import Proxy from "@core/Proxy";
import { AgentServer } from "@config/index";
import * as ctrl from "@mw/index";

const module = new Proxy(AgentServer);

module.middleware('client', 0x705E, ctrl.SiegeActionSQLi);

module.init();