import { SilkroadSecurityJS as Security } from 'silkroad-security';
import { Socket } from 'net';

class Remote {
  constructor(config) {
    this.config = config;
  }

  setup() {
    this.security = new Security();
    this.socket = new Socket();

    this.socket.connect({
      host: this.config.REMOTE.HOST,
      port: this.config.REMOTE.PORT,
      onread: {
        buffer: Buffer.alloc(8 * 1024)
      }
    });

    return this;
  }
}

export default Remote;