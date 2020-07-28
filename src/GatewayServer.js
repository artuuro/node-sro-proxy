import Proxy from '@core/Proxy';
import config from '@config/Gateway';
import * as ctrl from '@control/index';

const module = new Proxy(config);

module.middleware('client', 0x2001, ctrl.BlockClientHandshake);
module.middleware('remote', 0xA102, ctrl.RedirectAgent);

module.init();