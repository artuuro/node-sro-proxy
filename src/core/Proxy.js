import { createServer } from 'net';
import Client from '@core/Client';
import Remote from '@core/Remote';
import PacketHandler from '@core/PacketHandler';

class Proxy {
  constructor(config) {
    this.config = config;
    this.worker = new PacketHandler(this.config);
  }

  setup() {
    this.server = createServer(socket => {
      let client = new Client(socket).setup();
      let remote = new Remote(this.config).setup();

      this.listen(client, remote);
    });

    this.server.on('connection', socket => {
      console.log(`Connected`, socket.address());
    })

    this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);
    console.log(`[${this.config.module}]${JSON.stringify(this.config.LOCAL)} ready`);
  }

  listen(client, remote) {
    client.socket.on('data', async data => await this.worker.handle(remote.socket, client.security, data, 'client'));
    remote.socket.on('data', async data => await this.worker.handle(client.socket, remote.security, data, 'remote'));
  }
}

export default Proxy;