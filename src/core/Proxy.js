import { Client, Remote, EventHandler } from '@core/index';
import { createServer } from 'net';
import { EventEmitter } from 'events';

class Proxy {
  constructor(config) {
    this.config = config;
    this.instances = {};
    this.middlewares = {
      client: {},
      remote: {}
    };
    this.events = new EventEmitter();
  }

  middleware(side, opcode, action) {
    this.middlewares[side][opcode] = action;
  }

  remove(id) {
    if (this.instances[id]) {
      delete this.instances[id];
      console.log(`[${id}] DISCONNECTED`);
    }
  }

  listen(instance, id, sender) {
    instance[sender].socket.on('error', () => this.remove(id));
    instance[sender].socket.on('close', () => this.remove(id));

    instance[sender].socket.on('data', data => {
      instance[sender].security.Recv(data.toJSON().data);

      if (this.instances[id]) {
        this.events.emit('event', {
          instance: instance,
          sender: sender,
          config: this.config,
          event: this.events,
          middlewares: this.middlewares[sender] || false
        });
      }
    });

    console.log(`INSTANCE READY: [${id}][${sender}]`);
  }

  init() {
    this.server = createServer(socket => {
      const client = new Client(socket);
      const remote = new Remote(this.config);
      const id = `${socket.remoteAddress}:${socket.remotePort}`;
      let instance = {
        client: client.setup(),
        remote: remote.setup()
      };

      this.listen(instance, id, 'client');
      this.listen(instance, id, 'remote');

      Object.assign(this.instances, {
        [id]: instance
      });
    });
   
    this.events.on('event', EventHandler);
    this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);

    console.log(`READY: ${this.config.module} ${JSON.stringify(this.config.LOCAL)}`);
  }
}

export default Proxy;