import { SilkroadSecurityJS as Security } from 'silkroad-security';

class Client {
  constructor(socket) {
    this.id = `${socket.remoteAddress}:${socket.remotePort}`;
    this.socket = socket;
  }

  setup() {
    this.socket.on('error', () => {});
    this.socket.on('close', () => console.log(`[CONENCTION CLOSED]`));

    this.security = new Security();
    this.security.GenerateHandshake(true, false, true);

    return {
      security: this.security,
      socket: this.socket
    };
  }
}

export default Client;