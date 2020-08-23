import { stream } from 'silkroad-security';
import { Client, Remote, Event } from '@core/index';
import { createServer } from 'net';
import { EventEmitter } from 'events';

class Proxy {
  constructor(config) {
    Object.assign(this, {
      services: {},
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
    if (this.config.debug) console.log(`[${this.config.module}]->{${process.env.NODE_ENV}}->(run)`);
  }

  async registerService(name, action) {
    try {
      this.services[name] = new action(this.config);
      await this.services[name].attach();
      if (this.config.debug) console.log(`[Service](${name})->(ready)`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async middleware(side, opcode, action) {
    try {
      this.middlewares[side][opcode] = action;
      if (this.config.debug) console.log(`[Middleware]->{${side}}[${opcode}]->(ready)`);
    } catch (e) {
      throw new Error(e);
    }
  }

  createInstanceID(input) {
    return Buffer.from(input, 'utf-8').toString('base64');
  }

  getInstanceParams(input) {
    const [ ip, port ] = Buffer.from(input, 'base64').toString('utf-8').split(':');
    return {
      id: input,
      ip, 
      port,
    };
  }

  removeInstance(id) {
    if (this.instances[id]) {
      delete this.instances[id];
      if (this.config.debug) console.log(`[Client]->{${id}}->(disconnected)`);
    }
  }

  listen(instance, id, sender) {
    instance[sender].socket.on('error', () => this.removeInstance(id));
    instance[sender].socket.on('close', () => this.removeInstance(id));

    instance[sender].socket.on('data', data => {
      instance[sender].security.Recv(data.toJSON().data);

      if (this.instances[id]) {
        this.events.emit('event', {
          client: {
            ...this.getInstanceParams(id)
          },
          instance: instance,
          sender: sender,
          service: this.services,
          config: this.config,
          stream: this.stream,
          event: this.events,
          middlewares: this.middlewares[sender] || false
        });
      }
    });
  }

  async start() {
    this.server = createServer(socket => {
      const client = new Client(socket);
      const remote = new Remote(this.config);
      const id = this.createInstanceID(`${socket.remoteAddress}:${socket.remotePort}`);

      let instance = {
        client: client.setup(),
        remote: remote.setup()
      };

      if (this.config.debug) console.log(`[Client]->(${socket.remoteAddress}:${socket.remotePort}){${id}}->(connected)`);

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