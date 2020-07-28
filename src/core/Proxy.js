import { createServer } from 'net';
import Client from '@core/Client';
import Remote from '@core/Remote';
import { EventEmitter } from 'events';

class Proxy {
  constructor(config) {
    this.config = config;
    this.instances = {};
    this.interceptors = [];
    this.events = new EventEmitter();
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
          config: this.config
        });
      }
    });

    console.log(`[${id}][${sender}] READY`);
  }

  async handleEvent(event) {
    const target = event.sender == 'client' ? 'remote' : 'client';
    const receive =  await event.instance[event.sender].security.GetPacketToRecv() || [];

    for (const packet of receive) {
      console.log(`[${event.sender}] > (${packet.opcode}) > [${target}] [${event.config.packets[packet.opcode]}]`);
      
      await event.instance[target].security.Send(packet.opcode, packet.data, packet.encrypted, packet.massive);
    }

    const send = await event.instance[target].security.GetPacketToSend() || [];

    for (const packet of send) {
      await event.instance[target].socket.write(Buffer.from(packet));
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

      // Listen for events from both sides:
      this.listen(instance, id, 'client');
      this.listen(instance, id, 'remote');

      // Add to the pool:
      Object.assign(this.instances, {
        [id]: instance
      });

    });

    this.events.on('event', this.handleEvent);
    this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);
    console.log(`READY: ${JSON.stringify(this.config.LOCAL)}`);
  }

}

export default Proxy;