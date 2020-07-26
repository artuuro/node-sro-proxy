import { createServer } from 'net';
import Client from '@core/Client';
import Remote from '@core/Remote';

class Proxy {
  constructor(config) {
    this.config = config;
  }

  setup() {
    this.server = createServer(socket => {
      let client = new Client(socket).setup();
      let remote = new Remote(this.config).setup();

      client.socket.on('data', data => client.security.Recv(data.toJSON().data));
      remote.socket.on('data', data => remote.security.Recv(data.toJSON().data));
  
      // TODO: make it normal
      this.stream = setInterval(() => {
  
        // RECEIVE
        const clientReceive = client.security.GetPacketToRecv() || [];
        for (let index in clientReceive) {
          const packet = clientReceive[index];
          //console.log(`local`, packet);
          remote.security.Send(packet.opcode, packet.data, packet.encrypted, packet.massive);
        }
  
        const remoteReceive = remote.security.GetPacketToRecv() || [];
        for (let index in remoteReceive) {
          const packet = remoteReceive[index];
          //console.log(`remote`, packet);
          client.security.Send(packet.opcode, packet.data, packet.encrypted, packet.massive);
        }
  
        // SEND
        const clientSend = client.security.GetPacketToSend() || [];
        for (let index in clientSend) {
          const data = Buffer.from(clientSend[index]);
          console.log(`send client`)
          if (client) client.socket.write(data);
        }
  
        const remoteSend = remote.security.GetPacketToSend() || [];
        for (let index in remoteSend) {
          const data = Buffer.from(remoteSend[index]);
          console.log(`send remote`)
          if (client) remote.socket.write(data);
        }
  
      }, 1);
    });

    this.server.on('connection', socket => {
      console.log(`Connected`, socket.address());
    });

    this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);
    console.log(`[${this.config.module}]${JSON.stringify(this.config.LOCAL)}`);
  }

}

export default Proxy;