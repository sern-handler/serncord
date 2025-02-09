import * as util from "node:util";
import { Gateway, GatewayEvents } from "./gateway/index.js";
import { Intents, OpCode } from "./gateway/types.js";
import { wait } from "./tools.js";

import "dotenv/config.js";
const gw = new Gateway({ url: "wss://gateway.discord.gg" });

const INCOMING = `\x1b[1;34mRECV\x1b[0m`;
const OUTGOING = `\x1b[1;32mSEND\x1b[0m`;

gw.start();
gw.on(GatewayEvents.RawOpen, () => {
  console.log(`${INCOMING} (opened)`);
  const token: string = process.env.TOKEN!; // to all commit history viewers, the value of this has since changed.
  gw.send(OpCode.Identify, {
    intents: Intents.GuildMessages,
    properties: { browser: "serncord", device: "serncord", os: "win10" },
    token: token,
  });
});

gw.on(GatewayEvents.RawClosed, () => {
  console.log(`\x1b[1;31STOP\x1b[0m`);
});

gw.on(GatewayEvents.RawError, () => {
  console.log(`\x1b[1;33 ERR\x1b[0m`);
});

gw.on(GatewayEvents.OutgoingMessage, (x) => {
  console.log(
    OUTGOING,
    Object.entries(OpCode).find((y) => y[1] === x.op)![0],
    util.inspect(x, { depth: 1, colors: true })
  );
});
gw.on(GatewayEvents.Message, (x) => {
  console.log(
    INCOMING,
    Object.entries(OpCode).find((y) => y[1] === x.op)![0],
    util.inspect(x, { depth: 1, colors: true })
  );
});

gw.on(GatewayEvents.Hello, async (x) => {
  // await wait(gw.cache.heartbeat_interval);
  gw.send(OpCode.Heartbeat, null);
});

gw.on(GatewayEvents.HeartbeatAck, async () => {
  await wait(gw.cache.heartbeat_interval);
  gw.send(OpCode.Heartbeat, null);
});

gw.on(GatewayEvents.Heartbeat, async (x) => {
  gw.send(OpCode.Heartbeat, null);
});

gw.on(GatewayEvents.Ready, (x) => {
  console.log(INCOMING, "Ready");
});

gw.on(GatewayEvents.MessageCreate, (x) => {
  console.log(
    INCOMING,
    "MessageCreate",
    util.inspect(x, { depth: 1, colors: true })
  );

  console.log(INCOMING, { content: x.content });
});
