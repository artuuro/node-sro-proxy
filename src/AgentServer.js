import Proxy from "@core/Proxy";
import config from "@config/Agent";
import schedules from "@config/Schedules";
import * as ctrl from '@control/index';

const module = new Proxy({
  schedules: schedules,
  ...config
});

module.middleware('client', 0x2001, ctrl.BlockClientHandshake);

module.init();