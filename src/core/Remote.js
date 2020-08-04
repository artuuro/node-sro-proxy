import { SilkroadSecurityJS as Security } from 'silkroad-security';
import { Socket } from 'net';
class Remote {
  constructor(config) {
    this.config = config;
    this.security = new Security();
    this.socket = new Socket();
  }

  setup() {
    this.socket.connect({
      host: this.config.REMOTE.HOST,
      port: this.config.REMOTE.PORT,
      onread: {
        buffer: Buffer.alloc(8 * 1024)
      }
    });
    
    return {
      security: this.security,
      socket: this.socket
    };
  }
}

export default Remote;