import { Channel } from "diagnostics_channel";
import { Guild, GuildMember } from "./guild.js";
import { Application } from "./application.js";
import { GuildScheduledEvent } from "./guild_scheduled_event.js";
import { User } from "./user.js";

export interface Invite {
  type: InviteType;
  code: string;
  guild?: Partial<Guild>;
  channel?: Partial<Channel>;
  inviter?: User;
  target_type: InviteTargetType;
  target_user?: User;
  target_application?: Partial<Application>;
  approximate_presence_count?: number;
  approximate_member_count?: number;
  expires_at?: string;
  stage_instance?: InviteStageInstance;
  guild_scheduled_event?: GuildScheduledEvent;
}

export enum InviteType {
  Guild,
  GroupDm,
  Friend,
}

export enum InviteTargetType {
  Stream = 1,
  EmbeddedApplication = 2,
}

export interface InviteMetadata {
  uses: number;
  max_uses: number;
  max_age: number;
  temporary: boolean;
  created_at: string;
}

export interface InviteStageInstance {
  members: Array<Partial<GuildMember>>;
  participant_count: number;
  speaker_count: number;
  topic: string;
}
