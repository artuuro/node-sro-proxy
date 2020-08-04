import Proxy from '@core/Proxy';
import config from '@config/Gateway';
import * as ctrl from '@control/index';

const module = new Proxy(config);

module.middleware('client', 0x2001, ctrl.BlockClientHandshake); //8193
module.middleware('remote', 0xA102, ctrl.RedirectAgent); //41218
module.middleware('remote', 0x2322, ctrl.AutoCaptcha); //8994

module.init();