import Proxy from "@core/Proxy";
import { DownloadServer } from "@config/index";

const module = new Proxy(DownloadServer);

module.init();