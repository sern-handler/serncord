import * as util from "node:util";
import { Gateway, GatewayEvents } from "./gateway/index.js";
import { GatewayIntents, OpCode } from "./gateway/types.js";
import { Intents, wait } from "./tools.js";

import "dotenv/config.js";
await generate();
import { generate } from "./generate/core.js";
import { RestClient } from "./rest/client.js";
import { Client } from "./core/client.js";

const client = new Client({
  token: process.env.TOKEN!,
  cacheOptions: {},
  intents: new Intents().add("GuildMessages"),
});

client.gw.on(GatewayEvents.Ready, (x) => {
  console.log("ready");
});

client.gw.on(GatewayEvents.MessageCreate, (x) => {
  console.log(x);
});

await client.login();
