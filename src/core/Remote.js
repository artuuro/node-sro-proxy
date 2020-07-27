import { SilkroadSecurityJS as Security } from 'silkroad-security';
import { Socket } from 'net';

class Remote {
  constructor(config) {
    this.config = config;
  }

  setup() {
    this.security = new Security();
    this.socket = new Socket();

    return {
      security: this.security,
      socket: this.socket
    };
  }
}

export default Remote;