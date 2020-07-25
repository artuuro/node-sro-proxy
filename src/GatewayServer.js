import ProxyServer from "@entity/ProxyServer";
import config from "@config/Gateway";

new ProxyServer(config).init();