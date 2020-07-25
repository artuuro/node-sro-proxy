import net from 'net';
import PacketHandler from '@entity/PacketHandler';

class Instance {
  constructor(config, socket) {
    this.config = config;
    this.localSocket = socket;
  }

  connect() {
    this.worker = new PacketHandler(this.config);
    this.remoteSocket = new net.Socket();
    this.remoteSocket.connect({
      host: this.config.REMOTE.HOST,
      port: this.config.REMOTE.PORT,
      onread: {
        buffer: Buffer.alloc(8 * 1024)
      }
    });
  }

  attachListeners() {
    this.localSocket.on('error', () => {});
    this.localSocket.on('close', () => console.log(`[CONENCTION CLOSED]`));

    // Sockets from remote (server)
    this.remoteSocket.on('data', async data => await this.worker.handle(this.localSocket, data, 'server'));

    // Sockets from local (client)
    this.localSocket.on('data', async data => await this.worker.handle(this.remoteSocket, data, 'client'));
  }
}

export default Instance;