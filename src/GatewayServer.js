import Proxy from '@core/Proxy';
import { GatewayServer, Database } from '@config/index';
import * as ctrl from '@control/index';
import * as svc from '@service/index';

const module = new Proxy({
  ...GatewayServer,
  MSSQL: Database
});

(async () => {
  await module.registerService('database', svc.MSSQL);
  await module.registerService('cache', svc.Cache);
  
  await module.middleware('client', 0xCAFE, ctrl.HardwareID);
  await module.middleware('remote', 0xA100, ctrl.RedirectDownload);
  await module.middleware('remote', 0xA101, ctrl.RewriteShardList);
  await module.middleware('remote', 0xA102, ctrl.LoginResponse);
  await module.middleware('remote', 0x2322, ctrl.AutoCaptcha);

  await module.start();
})();

