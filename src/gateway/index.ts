import EventEmitter from "node:events";
import { DataForOpCode, OpCode, RawPayload, RawPayloadData } from "./types.js";

export interface RawGatewayOptions {
  url: string;
}

export interface GatewayCache {
  last_seq?: number;
  heartbeat_interval: number;
}

export class Gateway extends EventEmitter<GatewayEventMethods> {
  private ws: WebSocket;
  public cache: GatewayCache;
  public constructor(private options: RawGatewayOptions) {
    super();
    this.cache = { heartbeat_interval: 0 };
    this.ws = new WebSocket(this.options.url);
  }

  public on<K extends GatewayEvents>(
    eventName: K,
    listener: Listener<K>
  ): this {
    super.on(eventName, listener as never);
    return this;
  }

  public once<K extends GatewayEvents>(
    eventName: K,
    listener: Listener<K>
  ): this {
    super.once(eventName, listener as never);
    return this;
  }

  public off<K extends GatewayEvents>(
    eventName: K,
    listener: Listener<K>
  ): this {
    super.off(eventName, listener as never);
    return this;
  }

  public start() {
    this.ws.addEventListener("open", (x) =>
      this.emit(GatewayEvents.RawOpen, x)
    );
    this.ws.addEventListener("close", (x) =>
      this.emit(GatewayEvents.RawClosed, x)
    );
    this.ws.addEventListener("error", (x) =>
      this.emit(GatewayEvents.RawError, x)
    );
    this.ws.addEventListener("message", (x) => {
      this.emit(GatewayEvents.RawMessage, x);

      const packet: RawPayload<OpCode> = JSON.parse(x.data, (k, v) => v === null ? undefined : v);
      this.emit(GatewayEvents.Message, packet);

      this.cache.last_seq = packet.s;

      switch (packet.op) {
        case OpCode.Hello: {
          this.cache.heartbeat_interval = packet.d.heartbeat_interval;
          this.emit(GatewayEvents.Hello, packet as never);
        }

        case OpCode.Identify: {
          this.emit(GatewayEvents.Identify, packet.d);
        }

        case OpCode.Heartbeat: {
          this.emit(GatewayEvents.Heartbeat, packet.d);
        }

        case OpCode.HeartbeatAck: {
          this.emit(GatewayEvents.HeartbeatAck);
        }

        case OpCode.Dispatch: {
          this.emit(GatewayEvents.Dispatch, packet.d);

          this.emit(packet.t as GatewayEvents, packet.d);
        }
      }
    });
  }

  public send<K extends OpCode>(op: K, data: DataForOpCode[K]) {
    this.emit(GatewayEvents.OutgoingMessage, { op, data });
    this.ws.send(JSON.stringify({ op, d: data }));
  }
}

export enum GatewayEvents {
  RawOpen,
  RawMessage,
  RawClosed,
  RawError,
  Message,
  OutgoingMessage,

  // opcode specific
  Hello,
  Identify,
  Heartbeat,
  HeartbeatAck,
  Dispatch,

  // dispatch

  Ready = "READY",
  ApplicationCommandPermissionsUpdate = "APPLICATION_COMMAND_PERMISSIONS_UPDATE",
  AutoModerationRuleCreate = "AUTO_MODERATION_RULE_CREATE",
  AutoModerationRuleUpdate = "AUTO_MODERATION_RULE_UPDATE",
  AutoModerationRuleDelete = "AUTO_MODERATION_RULE_DELETE",
  AutoModerationActionExecution = "AUTO_MODERATION_ACTION_EXECUTION",
  ChannelCreate = "CHANNEL_CREATE",
  ChannelUpdate = "CHANNEL_UPDATE",
  ChannelDelete = "CHANNEL_DELETE",
  ChannelPinsUpdate = "CHANNEL_PINS_UPDATE",
  ThreadCreate = "THREAD_CREATE",
  ThreadUpdate = "THREAD_UPDATE",
  ThreadDelete = "THREAD_DELETE",
  ThreadListSync = "THREAD_LIST_SYNC",
  ThreadMemberUpdate = "THREAD_MEMBER_UPDATE",
  ThreadMembersUpdate = "THREAD_MEMBERS_UPDATE",
  EntitlementCreate = "ENTITLEMENT_CREATE",
  EntitlementUpdate = "ENTITLEMENT_UPDATE",
  EntitlementDelete = "ENTITLEMENT_DELETE",
  GuildCreate = "GUILD_CREATE",
  GuildUpdate = "GUILD_UPDATE",
  GuildDelete = "GUILD_DELETE",
  GuildAuditLogEntryCreate = "GUILD_AUDIT_LOG_ENTRY_CREATE",
  GuildBanAdd = "GUILD_BAN_ADD",
  GuildBanRemove = "GUILD_BAN_REMOVE",
  GuildEmojisUpdate = "GUILD_EMOJIS_UPDATE",
  GuildStickersUpdate = "GUILD_STICKERS_UPDATE",
  GuildIntegrationsUpdate = "GUILD_INTEGRATIONS_UPDATE",
  GuildMemberAdd = "GUILD_MEMBER_ADD",
  GuildMemberRemove = "GUILD_MEMBER_REMOVE",
  GuildMemberUpdate = "GUILD_MEMBER_UPDATE",
  GuildMembersChunk = "GUILD_MEMBERS_CHUNK",
  GuildRoleCreate = "GUILD_ROLE_CREATE",
  GuildRoleUpdate = "GUILD_ROLE_UPDATE",
  GuildRoleDelete = "GUILD_ROLE_DELETE",
  GuildScheduledEventCreate = "GUILD_SCHEDULED_EVENT_CREATE",
  GuildScheduledEventUpdate = "GUILD_SCHEDULED_EVENT_UPDATE",
  GuildScheduledEventDelete = "GUILD_SCHEDULED_EVENT_DELETE",
  GuildScheduledEventUserAdd = "GUILD_SCHEDULED_EVENT_USER_ADD",
  GuildScheduledEventUserRemove = "GUILD_SCHEDULED_EVENT_USER_REMOVE",
  GuildSoundboardSoundCreate = "GUILD_SOUNDBOARD_SOUND_CREATE",
  GuildSoundboardSoundUpdate = "GUILD_SOUNDBOARD_SOUND_UPDATE",
  GuildSoundboardSoundDelete = "GUILD_SOUNDBOARD_SOUND_DELETE",
  SoundboardSounds = "SOUNDBOARD_SOUNDS",
  IntegrationCreate = "INTEGRATION_CREATE",
  IntegrationUpdate = "INTEGRATION_UPDATE",
  IntegrationDelete = "INTEGRATION_DELETE",
  InteractionCreate = "INTERACTION_CREATE",
  InviteCreate = "INVITE_CREATE",
  InviteDelete = "INVITE_DELETE",
  MessageCreate = "MESSAGE_CREATE",
  MessageUpdate = "MESSAGE_UPDATE",
  MessageDelete = "MESSAGE_DELETE",
  MessageDeleteBulk = "MESSAGE_DELETE_BULK",
  MessageReactionAdd = "MESSAGE_REACTION_ADD",
  MessageReactionRemove = "MESSAGE_REACTION_REMOVE",
  MessageReactionRemoveAll = "MESSAGE_REACTION_REMOVE_ALL",
  MessageReactionRemoveEmoji = "MESSAGE_REACTION_REMOVE_EMOJI",
  PresenceUpdate = "PRESENCE_UPDATE",
  StageInstanceCreate = "STAGE_INSTANCE_CREATE",
  StageInstanceUpdate = "STAGE_INSTANCE_UPDATE",
  StageInstanceDelete = "STAGE_INSTANCE_DELETE",
  SubscriptionCreate = "SUBSCRIPTION_CREATE",
  SubscriptionUpdate = "SUBSCRIPTION_UPDATE",
  SubscriptionDelete = "SUBSCRIPTION_DELETE",
  TypingStart = "TYPING_START",
  UserUpdate = "USER_UPDATE",
  VoiceChannelEffectSend = "VOICE_CHANNEL_EFFECT_SEND",
  VoiceStateUpdate = "VOICE_STATE_UPDATE",
  VoiceServerUpdate = "VOICE_SERVER_UPDATE",
  WebhooksUpdate = "WEBHOOKS_UPDATE",
  MessagePollVoteAdd = "MESSAGE_POLL_VOTE_ADD",
  MessagePollVoteRemove = "MESSAGE_POLL_VOTE_REMOVE",
}

export interface GatewayEventMethods extends Record<GatewayEvents, any[]> {
  [GatewayEvents.RawOpen]: [Event];
  [GatewayEvents.RawMessage]: [MessageEvent];
  [GatewayEvents.Message]: [RawPayload<OpCode>];
  [GatewayEvents.Hello]: [RawPayload<OpCode.Hello>];
  [GatewayEvents.Identify]: [RawPayloadData.Identify];
  [GatewayEvents.Heartbeat]: [RawPayloadData.Heartbeat];
  [GatewayEvents.HeartbeatAck]: [];
  [GatewayEvents.OutgoingMessage]: [
    { op: OpCode; data: DataForOpCode[OpCode] }
  ];
  [GatewayEvents.Dispatch]: [any];
  [GatewayEvents.Ready]: [RawPayloadData.Ready];

  [GatewayEvents.ApplicationCommandPermissionsUpdate]: [
    RawPayloadData.ApplicationCommandPermissionsUpdate
  ];
  [GatewayEvents.AutoModerationRuleCreate]: [
    RawPayloadData.AutoModerationRuleCreate
  ];
  [GatewayEvents.AutoModerationRuleUpdate]: [
    RawPayloadData.AutoModerationRuleUpdate
  ];
  [GatewayEvents.AutoModerationRuleDelete]: [
    RawPayloadData.AutoModerationRuleDelete
  ];
  [GatewayEvents.AutoModerationActionExecution]: [
    RawPayloadData.AutoModerationActionExecution
  ];
  [GatewayEvents.ChannelCreate]: [RawPayloadData.ChannelCreate];
  [GatewayEvents.ChannelUpdate]: [RawPayloadData.ChannelUpdate];
  [GatewayEvents.ChannelDelete]: [RawPayloadData.ChannelDelete];
  [GatewayEvents.ChannelPinsUpdate]: [RawPayloadData.ChannelPinsUpdate];
  [GatewayEvents.ThreadCreate]: [RawPayloadData.ThreadCreate];
  [GatewayEvents.ThreadUpdate]: [RawPayloadData.ThreadUpdate];
  [GatewayEvents.ThreadDelete]: [RawPayloadData.ThreadDelete];
  [GatewayEvents.ThreadListSync]: [RawPayloadData.ThreadListSync];
  [GatewayEvents.ThreadMemberUpdate]: [RawPayloadData.ThreadMemberUpdate];
  [GatewayEvents.ThreadMembersUpdate]: [RawPayloadData.ThreadMembersUpdate];
  [GatewayEvents.EntitlementCreate]: [RawPayloadData.EntitlementCreate];
  [GatewayEvents.EntitlementUpdate]: [RawPayloadData.EntitlementUpdate];
  [GatewayEvents.EntitlementDelete]: [RawPayloadData.EntitlementDelete];
  [GatewayEvents.GuildCreate]: [RawPayloadData.GuildCreate];
  [GatewayEvents.GuildUpdate]: [RawPayloadData.GuildUpdate];
  [GatewayEvents.GuildDelete]: [RawPayloadData.GuildDelete];
  [GatewayEvents.GuildAuditLogEntryCreate]: [
    RawPayloadData.GuildAuditLogEntryCreate
  ];
  [GatewayEvents.GuildBanAdd]: [RawPayloadData.GuildBanAdd];
  [GatewayEvents.GuildBanRemove]: [RawPayloadData.GuildBanRemove];
  [GatewayEvents.GuildEmojisUpdate]: [RawPayloadData.GuildEmojisUpdate];
  [GatewayEvents.GuildStickersUpdate]: [RawPayloadData.GuildStickersUpdate];
  [GatewayEvents.GuildIntegrationsUpdate]: [
    RawPayloadData.GuildIntegrationsUpdate
  ];
  [GatewayEvents.GuildMemberAdd]: [RawPayloadData.GuildMemberAdd];
  [GatewayEvents.GuildMemberRemove]: [RawPayloadData.GuildMemberRemove];
  [GatewayEvents.GuildMemberUpdate]: [RawPayloadData.GuildMemberUpdate];
  [GatewayEvents.GuildMembersChunk]: [RawPayloadData.GuildMembersChunk];
  [GatewayEvents.GuildRoleCreate]: [RawPayloadData.GuildRoleCreate];
  [GatewayEvents.GuildRoleUpdate]: [RawPayloadData.GuildRoleUpdate];
  [GatewayEvents.GuildRoleDelete]: [RawPayloadData.GuildRoleDelete];
  [GatewayEvents.GuildScheduledEventCreate]: [
    RawPayloadData.GuildScheduledEventCreate
  ];
  [GatewayEvents.GuildScheduledEventUpdate]: [
    RawPayloadData.GuildScheduledEventUpdate
  ];
  [GatewayEvents.GuildScheduledEventDelete]: [
    RawPayloadData.GuildScheduledEventDelete
  ];
  [GatewayEvents.GuildScheduledEventUserAdd]: [
    RawPayloadData.GuildScheduledEventUserAdd
  ];
  [GatewayEvents.GuildScheduledEventUserRemove]: [
    RawPayloadData.GuildScheduledEventUserRemove
  ];
  [GatewayEvents.GuildSoundboardSoundCreate]: [
    RawPayloadData.GuildSoundboardSoundCreate
  ];
  [GatewayEvents.GuildSoundboardSoundUpdate]: [
    RawPayloadData.GuildSoundboardSoundUpdate
  ];
  [GatewayEvents.GuildSoundboardSoundDelete]: [
    RawPayloadData.GuildSoundboardSoundDelete
  ];
  [GatewayEvents.SoundboardSounds]: [RawPayloadData.SoundboardSounds];
  [GatewayEvents.IntegrationCreate]: [RawPayloadData.IntegrationCreate];
  [GatewayEvents.IntegrationUpdate]: [RawPayloadData.IntegrationUpdate];
  [GatewayEvents.IntegrationDelete]: [RawPayloadData.IntegrationDelete];
  [GatewayEvents.InteractionCreate]: [RawPayloadData.InteractionCreate];
  [GatewayEvents.InviteCreate]: [RawPayloadData.InviteCreate];
  [GatewayEvents.InviteDelete]: [RawPayloadData.InviteDelete];
  [GatewayEvents.MessageCreate]: [RawPayloadData.MessageCreate];
  [GatewayEvents.MessageUpdate]: [RawPayloadData.MessageUpdate];
  [GatewayEvents.MessageDelete]: [RawPayloadData.MessageDelete];
  [GatewayEvents.MessageDeleteBulk]: [RawPayloadData.MessageDeleteBulk];
  [GatewayEvents.MessageReactionAdd]: [RawPayloadData.MessageReactionAdd];
  [GatewayEvents.MessageReactionRemove]: [RawPayloadData.MessageReactionRemove];
  [GatewayEvents.MessageReactionRemoveAll]: [
    RawPayloadData.MessageReactionRemoveAll
  ];
  [GatewayEvents.MessageReactionRemoveEmoji]: [
    RawPayloadData.MessageReactionRemoveEmoji
  ];
  [GatewayEvents.PresenceUpdate]: [RawPayloadData.PresenceUpdate];
  [GatewayEvents.StageInstanceCreate]: [RawPayloadData.StageInstanceCreate];
  [GatewayEvents.StageInstanceUpdate]: [RawPayloadData.StageInstanceUpdate];
  [GatewayEvents.StageInstanceDelete]: [RawPayloadData.StageInstanceDelete];
  [GatewayEvents.SubscriptionCreate]: [RawPayloadData.SubscriptionCreate];
  [GatewayEvents.SubscriptionUpdate]: [RawPayloadData.SubscriptionUpdate];
  [GatewayEvents.SubscriptionDelete]: [RawPayloadData.SubscriptionDelete];
  [GatewayEvents.TypingStart]: [RawPayloadData.TypingStart];
  [GatewayEvents.UserUpdate]: [RawPayloadData.UserUpdate];
  [GatewayEvents.VoiceChannelEffectSend]: [
    RawPayloadData.VoiceChannelEffectSend
  ];
  [GatewayEvents.VoiceStateUpdate]: [RawPayloadData.UpdateVoiceState];
  [GatewayEvents.VoiceServerUpdate]: [RawPayloadData.VoiceServerUpdate];
  [GatewayEvents.WebhooksUpdate]: [RawPayloadData.WebhooksUpdate];
  [GatewayEvents.MessagePollVoteAdd]: [RawPayloadData.MessagePollVoteAdd];
  [GatewayEvents.MessagePollVoteRemove]: [RawPayloadData.MessagePollVoteRemove];
}

export type Listener<T extends GatewayEvents> = (
  ...a: GatewayEventMethods[T]
) => unknown;
