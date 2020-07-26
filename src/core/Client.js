import Security from '@sro/Security';

class Client {
  constructor(socket) {
    this.id = `${socket.remoteAddress}:${socket.remotePort}`;
    this.socket = socket;
  }

  setup() {
    this.socket.on('error', () => {});
    this.socket.on('close', () => console.log(`[CONENCTION CLOSED]`));

    this.security = new Security();
    this.security.generateSecurity(true, true, true);
    
    return this;
  }
}

export default Client;