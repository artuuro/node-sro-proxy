import { SilkroadSecurityJS as Security } from 'silkroad-security';

class Client {
  constructor(socket) {
    this.socket = socket;
  }

  setup() {
    this.security = new Security();
    this.security.GenerateHandshake(true, true, true);
    return {
      security: this.security,
      socket: this.socket
    };
  }
}

export default Client;