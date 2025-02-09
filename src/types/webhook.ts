import { Channel } from "diagnostics_channel";
import { Guild } from "./guild.js";
import { User } from "./user.js";

export interface Webhook {
  id: string;
  type: WebhookType;
  guild_id?: string;
  channel_id?: string;
  user?: User;
  name?: string;
  avatar?: string;
  token?: string;
  application_id?: string;
  source_guild?: Partial<Guild>;
  source_channel?: Partial<Channel>;
  url?: string;
}

export enum WebhookType {
  Incoming = 1,
  ChannelFollower = 2,
  Application = 3,
}
