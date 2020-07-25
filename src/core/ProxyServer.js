import net from 'net';
import Instance from '@entity/Instance';

class Server {
  constructor(config) {
    this.config = config;
  }

  init() {
    this.listener = net.createServer(socket => {
      let instance = new Instance(this.config, socket);
      instance.id = socket.remoteAddress + ':' + socket.remotePort;
      instance.connect();
      instance.attachListeners();
    });

    this.listener.on('connection', socket => {
      console.log(`[CONNECTED]`, socket.address());
    });

    this.listener.listen(this.config.LOCAL.PORT, this.config.LOCAL.PORT);
    console.log(`[${this.config.module}]${JSON.stringify(this.config.LOCAL)}`);
  }

}

export default Server;