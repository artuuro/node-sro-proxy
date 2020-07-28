import Proxy from "@core/Proxy";
import config from "@config/Download";

const module = new Proxy(config);

module.init();