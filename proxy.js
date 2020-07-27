// jshint ignore: start
const net = require("net"),
    { SilkroadSecurityJS, stream } = require('silkroad-security')

process.on('uncaughtException', function (err) {
    console.error(err.stack);
    console.log("Node NOT Exiting...");
});

var localport = 7001
var remotehost = '138.201.58.79'
var remoteport = 15779

var clients = {}

var server = net.createServer((localsocket) => {

    let id = localsocket.remoteAddress + ':' + localsocket.remotePort;

    clients[id] = {
        local: {
            security: new SilkroadSecurityJS(),
            socket: localsocket
        },
        remote: {
            security: new SilkroadSecurityJS(),
            socket: new net.Socket()
        }
    }

    clients[id].local.security.GenerateHandshake(true, false, true)

    clients[id].remote.socket.connect({
        host: remotehost,
        port: remoteport,
        onread: {
            buffer: Buffer.alloc(8 * 1024)
        }
    })

    clients[id].local.socket.on('data', (data) => {
        if (clients[id]) {
            clients[id].local.security.Recv(data.toJSON().data)
        }
    });

    clients[id].remote.socket.on('data', (data) => {
        if (clients[id]) {
            clients[id].remote.security.Recv(data.toJSON().data)
        }
    });



    clients[id].interval = setInterval(() => {

        let packetToRecv = (clients[id].local.security.GetPacketToRecv() || [])

        for (let index in packetToRecv) {
            let packet = packetToRecv[index]

            handleOutgoingPacket(packet, clients[id], (spacket) => {
                if (clients[id]) {
                    clients[id].remote.security.Send(spacket['opcode'], spacket['data'], spacket['encrypted'], spacket['massive'])
                }
            })

        }

        let packetToRecv2 = (clients[id].remote.security.GetPacketToRecv() || [])

        for (let index in packetToRecv2) {
            let packet = packetToRecv2[index]

            handleIncomingPacket(packet, clients[id], (spacket) => {
                if (clients[id]) {
                    clients[id].local.security.Send(spacket['opcode'], spacket['data'], spacket['encrypted'], spacket['massive'])
                }
            })
        }

        let packToSend = (clients[id].local.security.GetPacketToSend() || [])

        for (let index in packToSend) {
            let dataB = Buffer.from(packToSend[index])
            if (clients[id]) {
                clients[id].local.socket.write(dataB)
            }
        }

        let packToSend2 = (clients[id].remote.security.GetPacketToSend() || [])

        for (let index2 in packToSend2) {
            let dataB2 = Buffer.from(packToSend2[index2])
            if (clients[id]) {
                clients[id].remote.socket.write(dataB2)
            }
        }

    }, 1)


})

server.listen(localport);


function handleIncomingPacket(packet, client, forward) {
    forward(packet)
}

function handleOutgoingPacket(packet, client, forward) {
    if (packet['opcode'] == 0x2001) {

    } else {
        forward(packet);
    }
}
