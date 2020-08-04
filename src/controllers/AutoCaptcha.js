import { stream } from 'silkroad-security';

async function AutoCaptcha(Event, packet, sender) {
  const { remote } = Event.instance;

  const reply = new stream.writer();
  reply.string(Event.config.CAPTCHA);

  await remote.security.Send(25379, reply, false, false);

  const send = await remote.security.GetPacketToSend() || [];
  for (const packet of send) {
    await remote.socket.write(Buffer.from(packet));
  }
}

export default AutoCaptcha;