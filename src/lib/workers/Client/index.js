import { SilkroadSecurityJS as Security, stream } from 'silkroad-security';
import api from '@lib/DataAPI';
import NodeCache from 'node-cache';
import { Socket } from 'net';
import * as ctrl from '@control';
import * as hook from './hooks';

const { config, info } = JSON.parse(process.argv[2]);
const socket = new Socket();
const security = {
    client: new Security(),
    remote: new Security()
};

const memory = new NodeCache();

const disconnect = async () => {
    const get_session = memory.get('session') || false;

    if (config.hooks && config.hooks.exit) await hook[config.hooks.exit](api, get_session);

    process.send({ type: 'disconnect' });
};

const middlewares = Object.keys(config.middlewares).reduce((endpoints, mw) => ({
    ...endpoints,
    [mw]: Object.keys(config.middlewares[mw]).reduce((handles, opcode) => ({
        ...handles,
        [opcode]: ctrl[config.middlewares[mw][opcode]]
    }), {})
}), {});

async function handlePacket(sender, packet) {
    security[sender].Recv(Buffer.from(packet).toJSON().data);

    let target = sender == 'client' ? 'remote' : 'client';
    const incomingStream = await security[sender].GetPacketToRecv() || [];

    for (const packet of incomingStream) {
        if ((target === 'remote' && config.whitelist[packet.opcode]) || target == 'client') {
            const middleware = middlewares[sender] ? middlewares[sender][packet.opcode] || false : false;

            const result = middleware ? await middleware({ stream, config, api, memory, info }, packet, target) : { packet };

            if (result) {
                target = result.target ? result.target : target;

                if (result.packet) await security[target].Send(
                    result.packet.opcode,
                    result.packet.data,
                    result.packet.encrypted,
                    result.packet.massive
                )

                if (result.exit) await disconnect();
            }
        }
    }

    const outgoingStream = await security[target].GetPacketToSend() || [];

    for (const packet of outgoingStream) {
        switch (target) {
            case 'remote': socket.write(Buffer.from(packet));
                break;
            default:
                process.send({
                    type: 'buffer',
                    data: packet
                });
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
        buffer: Buffer.alloc(8192)
    }
});

// Errors
socket.on('error', async () => await disconnect());
socket.on('close', async () => await disconnect());

// Server -> Client
socket.on('data', data => handlePacket('remote', data));

// Client -> Server
process.on('message', async message => {
    switch (message.code) {
        case 1:
            await handlePacket('client', message.data);
        break;
        case 0: // disconnect
            await disconnect();
        break;
    }
});

// Graceful exit
process.on('SIGTERM', async () => await disconnect());