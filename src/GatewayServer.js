import Proxy from '@core/Proxy';
import { GatewayServer } from '@config/index';
import * as ctrl from '@mw/index';

const module = new Proxy(GatewayServer);

//module.middleware('remote', 0xA100, ctrl.RedirectDownload);
module.middleware('remote', 0xA102, ctrl.RedirectAgent);
module.middleware('remote', 0xA101, ctrl.RewriteShardList);
module.middleware('remote', 0x2322, ctrl.AutoCaptcha);

module.run();