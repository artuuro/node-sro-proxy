import Proxy from "@core/Proxy";
import { AgentServer } from "@config/index";

const module = new Proxy(AgentServer);

module.init();