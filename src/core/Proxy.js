import { createServer } from 'net';
import Client from '@core/Client';
import Remote from '@core/Remote';
// import EventHandler from '@core/EventHandler';
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
          middleware: this.middlewares[sender]
        });
      }
    });

    console.log(`READY: [${id}][${sender}]`);
  }

  // Move to EventHandler
  async handleEvent(ctx) {
    const target = ctx.sender == 'client' ? 'remote' : 'client';
    const receive = await ctx.instance[ctx.sender].security.GetPacketToRecv() || [];
    for (const packet of receive) {
      if ((target === 'remote' && ctx.config.whitelist[packet.opcode]) || target == 'client') {
        if (ctx.middleware[packet.opcode]) {
          const resultPacket = await middleware(packet, ctx);
          if (resultPacket) await ctx.instance[target].security.Send(resultPacket.opcode, resultPacket.data, resultPacket.encrypted, resultPacket.massive);
        } else {
          await ctx.instance[target].security.Send(packet.opcode, packet.data, packet.encrypted, packet.massive);
        }
      }
    }
    const send = await ctx.instance[target].security.GetPacketToSend() || [];
    for (const packet of send) {
      await ctx.instance[target].socket.write(Buffer.from(packet));
    }
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

    this.events.on('event', this.handleEvent);
    this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);
    console.log(`READY: ${this.config.module} ${JSON.stringify(this.config.LOCAL)}`);
  }

}

export default Proxy;