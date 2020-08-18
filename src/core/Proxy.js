import { stream } from 'silkroad-security';
import { Client, Remote, Event } from '@core/index';
import { createServer } from 'net';
import { EventEmitter } from 'events';

class Proxy {
  constructor(config) {
    Object.assign(this, {
      config: {
        debug: process.env.NODE_ENV == 'development',
        ...config
      },
      instances: {},
      middlewares: {
        client: {},
        remote: {}
      },
      stream: stream,
      events: new EventEmitter()
    });
  }

  middleware(side, opcode, action) {
    this.middlewares[side][opcode] = action;
  }

  remove(id) {
    if (this.instances[id]) {
      delete this.instances[id];
      if (this.config.debug) console.log(`[Client]->{${id}}->(disconnected)`);
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
          stream: this.stream,
          event: this.events,
          middlewares: this.middlewares[sender] || false
        });
      }
    });
  }

  run() {
    this.server = createServer(socket => {
      const client = new Client(socket);
      const remote = new Remote(this.config);
      const id = `${socket.remoteAddress}:${socket.remotePort}`;

      let instance = {
        client: client.setup(),
        remote: remote.setup()
      };

      if (this.config.debug) console.log(`[Client]->{${id}}->(connected)`);

      this.listen(instance, id, 'client');
      this.listen(instance, id, 'remote');

      Object.assign(this.instances, {
        [id]: instance
      });
    });
   
    this.events.on('event', Event);
    this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);

    if (this.config.debug) console.log(`[${this.config.module}]->${JSON.stringify(this.config.LOCAL)}->(ready)`);
  }
}

export default Proxy;