import NodeCache from 'node-cache';
import { workerData, parentPort } from 'worker_threads';
import { SilkroadSecurityJS as Security, stream } from 'silkroad-security';
import { Socket } from 'net';
import * as ctrl from '@control/index';

const cache = new NodeCache();
const { config, info } = workerData;
const socket = new Socket();
const security = {
    client: new Security(),
    remote: new Security()
};

const middlewares = Object.keys(config.middlewares).reduce((endpoints, m) => {
    endpoints[m] = Object.keys(config.middlewares[m]).reduce((handles, opcode) => {
        handles[opcode] = ctrl[config.middlewares[m][opcode]];
        return handles;
    }, {});
    return endpoints;
}, {});

async function handlePacket(sender, packet) {
    security[sender].Recv(Buffer.from(packet).toJSON().data);

    const target = sender == 'client' ? 'remote' : 'client';
    const incomingStream = await security[sender].GetPacketToRecv() || [];

    for (const packet of incomingStream) {
        if ((target === 'remote' && config.whitelist[packet.opcode]) || target == 'client') {
            const middleware = middlewares[sender] ? middlewares[sender][packet.opcode] || false : false;

            const _packet = middleware ? await middleware({
                cache,
                stream,
                config,
                instance: {
                    info,
                    remote: {
                        security: security.remote,
                        socket: socket
                    }
                }
            }, packet, target) : packet;

            if (_packet) await security[target].Send(
                _packet.opcode,
                _packet.data,
                _packet.encrypted,
                _packet.massive
            );
        }// else if (config.debug && target === 'remote') console.log(`[${sender}]->(${packet.opcode})->${target}: NOT WHITELISTED`);
    }

    const outgoingStream = await security[target].GetPacketToSend() || [];

    for (const packet of outgoingStream) {
        switch (target) {
            case 'remote': socket.write(Buffer.from(packet));
                break;
            default: parentPort.postMessage(packet);
                break;
        }
    }
};

security.client.GenerateHandshake(true, true, true);

// Connect to the remote server:
socket.connect({
    host: config.REMOTE.HOST,
    port: config.REMOTE.PORT,
    onread: {
        buffer: Buffer.alloc(8 * 1024)
    }
});

// Errors
socket.on('error', () => process.exit(0));
socket.on('close', () => process.exit(0));

// Server -> Client
socket.on('data', data => handlePacket('remote', data));
// Client -> Server
parentPort.on('message', data => handlePacket('client', data));