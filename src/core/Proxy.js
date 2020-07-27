import { createServer } from 'net';
import Client from '@core/Client';
import Remote from '@core/Remote';

class Proxy {
  constructor(config) {
    this.config = config;
  }

  setup() {
    this.server = createServer(socket => {

      console.log(`new conn`, socket.address())

      let local = new Client(socket).setup();
      let remote = new Remote(this.config).setup();

      remote.socket.connect({
        host: this.config.REMOTE.HOST,
        port: this.config.REMOTE.PORT,
        onread: {
          buffer: Buffer.alloc(8 * 1024)
        }
      });

      local.socket.on('data', data => local.security.Recv(data.toJSON().data));
      remote.socket.on('data', data => remote.security.Recv(data.toJSON().data));


      this.tick = setInterval(function () {
        // RECEIVE
        const localReceive = local.security.GetPacketToRecv() || [];
        for (let index in localReceive) {
          const packet = localReceive[index];
          //console.log(`local`, packet);
          remote.security.Send(packet.opcode, packet.data, packet.encrypted, packet.massive);
        }

        // SEND
        const localSend = local.security.GetPacketToSend() || [];
        for (let index in localSend) {
          const packet = Buffer.from(localSend[index]);
          local.socket.write(packet);
        }


        const remoteReceive = remote.security.GetPacketToRecv() || [];
        for (let index in remoteReceive) {
          const packet = remoteReceive[index];
          local.security.Send(packet.opcode, packet.data, packet.encrypted, packet.massive);
        }


        const remoteSend = remote.security.GetPacketToSend() || [];
        for (let index in remoteSend) {
          const packet = Buffer.from(remoteSend[index]);
          remote.socket.write(packet);
        }

      }, 1);

      
    });



    this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);
    console.log(`[${this.config.module}]${JSON.stringify(this.config.LOCAL)}`);
  }

}

export default Proxy;