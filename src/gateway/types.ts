import { Channel } from "diagnostics_channel";
import {
  Application,
  ApplicationCommandPermissions,
} from "../types/application.js";
import {
  AutoModerationAction,
  AutoModerationRule,
  AutoModerationTriggerType,
} from "../types/auto_moderation.js";
import { ThreadMember } from "../types/channel.js";
import { Entitlement } from "../types/entitlement.js";
import { Guild, GuildMember, Integration } from "../types/guild.js";
import { AvatarDecorationData, User } from "../types/user.js";
import { AuditLog } from "../types/audit_log.js";
import { Emoji } from "../types/emoji.js";
import { Sticker } from "../types/sticker.js";
import { Role } from "../types/role.js";
import { GuildScheduledEvent } from "../types/guild_scheduled_event.js";
import { SoundboardSound } from "../types/soundboard.js";
import { Message, ReactionType } from "../types/message.js";
import { VoiceState } from "../types/voice.js";
import { Interaction } from "../types/interaction.js";
import { StageInstance } from "../types/stage_instance.js";
import { Subscription } from "../types/subscription.js";
import { InviteTargetType } from "../types/invite.js";

export interface RawPayload<T extends OpCode> {
  op: T;
  d: DataForOpCode[T];
  s?: number;
  t?: string;
}

export enum OpCode {
  Dispatch,
  Heartbeat,
  Identify,
  PresenceUpdate,
  VoiceStateUpdate,
  Resume = 6,
  Reconnect,
  RequestGuildMembers,
  InvalidSession,
  Hello,
  HeartbeatAck,
  RequestSoundboardSounds,
}

export interface DataForOpCode extends Record<OpCode, any> {
  [OpCode.Hello]: RawPayloadData.Hello;
  [OpCode.Identify]: RawPayloadData.Identify;
  [OpCode.Heartbeat]: RawPayloadData.Heartbeat;
  [OpCode.HeartbeatAck]: RawPayloadData.HeartbeatAck;
  [OpCode.Dispatch]: any;
}

export namespace RawPayloadData {
  export interface Hello {
    heartbeat_interval: number;
  }

  export interface Identify {
    token: string;
    properties: IdentifyConnectionProperties;
    compress?: boolean;
    large_threshold?: number;
    shard?: [number, number];
    presence?: Presence;
    intents: number;
  }

  export interface Resume {
    token: string;
    session_id: string;
    seq: number;
  }

  export type Heartbeat = number | null;
  export type HeartbeatAck = never;

  export interface RequestGuildMembers {
    guild_id: string;
    query?: string;
    limit: number;
    presences?: boolean;
    user_ids?: Array<string>;
    nonce?: string;
  }

  export interface RequestSoundboardSounds {
    guild_ids: Array<string>;
  }

  export interface UpdateVoiceState {
    guild_id: string;
    channel_id?: string;
    self_mute: boolean;
    self_deaf: boolean;
  }

  export interface Presence {
    since?: number;
    activities: Array<Activity>;
    status: Status;
    afk: boolean;
  }

  export type Reconnect = null;
  export type InvalidSession = boolean;

  // dispatch
  export interface Ready {
    v: number;
    user: User;
    guilds: Array<UnavailableGuild>;
    session_id: string;
    resume_gateway_url: string;
    shard?: [number, number];
    application: Partial<Application>;
  }

  export type Resumed = never;
  export interface ApplicationCommandPermissionsUpdate
    extends ApplicationCommandPermissions {}
  export interface AutoModerationRuleCreate extends AutoModerationRule {}
  export interface AutoModerationRuleUpdate extends AutoModerationRule {}
  export interface AutoModerationRuleDelete extends AutoModerationRule {}
  export interface AutoModerationActionExecution {
    guild_id: string;
    action: AutoModerationAction;
    rule_id: string;
    rule_trigger_type: AutoModerationTriggerType;
    user_id: string;
    channel_id?: string;
    message_id?: string;
    alert_system_message_id?: string;
    content: string;
    matched_keyword?: string;
    matched_content?: string;
  }
  export interface ChannelCreate extends Channel {}
  export interface ChannelUpdate extends Channel {}
  export interface ChannelDelete extends Channel {}
  export interface ChannelPinsUpdate {
    guild_id?: string;
    channel_id: string;
    last_pin_timestamp?: string;
  }
  export interface ThreadCreate extends Channel {}
  export interface ThreadUpdate extends Channel {}
  export interface ThreadDelete extends Partial<Channel> {}
  export interface ThreadListSync {
    guild_id: string;
    channel_ids?: Array<string>;
    threads: Array<Channel>;
    members: Array<ThreadMember>;
  }
  export interface ThreadMembersUpdate {
    id: string;
    guild_id: string;
    member_count: number;
    added_members?: Array<ThreadMember>;
    removed_member_ids?: Array<string>;
  }
  export interface ThreadMemberUpdate extends ThreadMember {
    guild_id: string;
  }

  export interface EntitlementCreate extends Entitlement {}
  export interface EntitlementUpdate extends Entitlement {}
  export interface EntitlementDelete extends Entitlement {}
  export interface GuildCreate extends Guild {}
  export interface GuildUpdate extends Guild {}
  export interface GuildDelete extends UnavailableGuild {}
  export interface GuildAuditLogEntryCreate extends AuditLog {}
  export interface GuildBanAdd {
    guild_id: string;
    user: User;
  }
  export interface GuildBanRemove {
    guild_id: string;
    user: User;
  }
  export interface GuildEmojisUpdate {
    guild_id: string;
    emojis: Array<Emoji>;
  }
  export interface GuildStickersUpdate {
    guild_id: string;
    stickers: Array<Sticker>;
  }
  export interface GuildIntegrationsUpdate {
    guild_id: string;
  }
  export interface GuildMemberAdd extends GuildMember {
    guild_id: string;
  }
  export interface GuildMemberRemove extends GuildMember {
    guild_id: string;
  }
  export interface GuildMemberUpdate {
    guild_id: string;
    roles: Array<string>;
    user: User;
    nick?: string;
    avatar?: string;
    banner?: string;
    joined_at?: string;
    premium_since?: string;
    deaf?: boolean;
    mute?: boolean;
    pending?: boolean;
    communication_disabled_until?: string;
    flags?: number;
    avatar_decoration_data?: AvatarDecorationData;
  }
  export interface GuildMembersChunk {
    guild_id: string;
    members: Array<GuildMember>;
    chunk_index: number;
    chunk_count: number;
    not_found?: Array<string>;
    presences?: Array<Presence>;
    nonce?: string;
  }
  export interface GuildRoleCreate {
    guild_id: string;
    role: Role;
  }
  export interface GuildRoleUpdate {
    guild_id: string;
    role: Role;
  }
  export interface GuildRoleDelete {
    guild_id: string;
    role: Role;
  }
  export interface GuildScheduledEventCreate extends GuildScheduledEvent {}
  export interface GuildScheduledEventUpdate extends GuildScheduledEvent {}
  export interface GuildScheduledEventDelete extends GuildScheduledEvent {}
  export interface GuildScheduledEventUserAdd {
    guild_scheduled_event_id: string;
    user_id: string;
    guild_id: string;
  }
  export interface GuildScheduledEventUserRemove {
    guild_scheduled_event_id: string;
    user_id: string;
    guild_id: string;
  }
  export interface GuildSoundboardSoundCreate extends SoundboardSound {}
  export interface GuildSoundboardSoundUpdate extends SoundboardSound {}
  export interface GuildSoundboardSoundDelete extends SoundboardSound {
    guild_id: string;
  }
  export interface SoundboardSounds {
    soundboard_sounds: Array<SoundboardSound>;
    guild_id: string;
  }
  export interface IntegrationCreate extends Omit<Integration, "user"> {
    guild_id: string;
  }
  export interface IntegrationUpdate extends Omit<Integration, "user"> {
    guild_id: string;
  }
  export interface IntegrationDelete {
    id: string;
    guild_id: string;
    application_id?: string;
  }
  export interface InteractionCreate extends Interaction {}
  export interface InviteCreate {
    channel_id: string;
    code: string;
    created_at: string;
    guild_id?: string;
    inviter?: User;
    max_age: number;
    max_uses: number;
    target_type?: InviteTargetType;
    target_user?: User;
    target_application?: Partial<Application>;
    temporary: boolean;
    uses: number;
  }
  export interface InviteDelete {
    channel_id: string;
    guild_id?: string;
    code: string;
  }
  export interface MessageCreate extends Message {
    guild_id?: string;
    member?: Partial<GuildMember>;
    mentions: Array<User>;
  }
  export interface MessageUpdate extends MessageCreate {}
  export interface MessageDelete {
    id: string;
    channel_id: string;
    guild_id?: string;
  }
  export interface MessageDeleteBulk {
    ids: Array<string>;
    channel_id: string;
    guild_id?: string;
  }
  export interface MessageReactionAdd {
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    member?: GuildMember;
    emoji: Partial<Emoji>;
    message_author_id?: string;
    burst: boolean;
    burst_colors?: Array<string>;
    type: ReactionType;
  }
  export interface MessageReactionRemove {
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    emoji: Partial<Emoji>;
    burst: boolean;
    type: ReactionType;
  }
  export interface MessageReactionRemoveAll {
    channel_id: string;
    message_id: string;
    guild_id?: string;
  }
  export interface MessageReactionRemoveEmoji extends MessageReactionRemoveAll {
    emoji: Partial<Emoji>;
  }
  export interface PresenceUpdate extends Presence {}
  export interface StageInstanceCreate extends StageInstance {}
  export interface StageInstanceUpdate extends StageInstance {}
  export interface StageInstanceDelete extends StageInstance {}
  export interface SubscriptionCreate extends Subscription {}
  export interface SubscriptionUpdate extends Subscription {}
  export interface SubscriptionDelete extends Subscription {}
  export interface TypingStart {
    channel_id: string;
    guild_id?: string;
    user_id: string;
    timestamp: string;
    member?: GuildMember;
  }
  export interface UserUpdate extends User {}
  export interface VoiceChannelEffectSend {
    channel_id: string;
    guild_id: string;
    user_id: string;
    emoji?: Emoji;
    animation_type?: VoiceChannelEffectAnimationType;
    animation_id?: number;
    sound_id?: string | number;
    sound_volume?: number;
  }
  export interface UpdateVoiceState extends VoiceState {}
  export interface VoiceServerUpdate {
    token: string;
    guild_id: string;
    endpoint?: string;
  }
  export interface WebhooksUpdate {
    guild_id: string;
    channel_id: string;
  }
  export interface MessagePollVoteAdd {
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    answer_id: number;
  }
  export interface MessagePollVoteRemove {
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    answer_id: number;
  }
}

export interface UnavailableGuild {
  id: string;
  unavailable: true;
}

export enum GatewayIntents {
  Guilds = 1 << 0,
  GuildMembers = 1 << 1,
  GuildModeration = 1 << 2,
  GuildExpressions = 1 << 3,
  GuildIntegrations = 1 << 4,
  GuildWebhooks = 1 << 5,
  GuildInvites = 1 << 6,
  GuildVoiceStates = 1 << 7,
  GuildPresences = 1 << 8,
  GuildMessages = 1 << 9,
  GuildMessageReactions = 1 << 10,
  GuildMessageTyping = 1 << 11,
  DirectMessages = 1 << 12,
  DirectMessageReactions = 1 << 13,
  DirectMessageTyping = 1 << 14,
  MessageContent = 1 << 15,
  GuildScheduledEvents = 1 << 16,
  AutoModerationConfiguration = 1 << 20,
  AutoModerationExecution = 1 << 21,
  GuildMessagePolls = 1 << 24,
  DirectMessagePolls = 1 << 25,
}

export interface IdentifyConnectionProperties {
  os: string;
  browser: string;
  device: string;
}

export enum Status {
  Online = "online",
  DoNotDisturb = "dnd",
  Idle = "idle",
  Invisible = "invisible",
  Offline = "offline",
}

export interface Activity {
  name: string;
  type: ActivityType;
  url?: string;
  created_at: number;
  timestamps: ActivityTimestamps;
  application_id?: string;
  details?: string;
  state?: string;
  emoji?: ActivityEmoji;
  party?: ActivityParty;
  assets?: ActivityAssets;
  secrets?: ActivitySecrets;
  instance?: boolean;
  flags?: number;
  buttons?: Array<ActivityButton>;
}

export enum ActivityType {
  Playing,
  Streaming,
  Listening,
  Watching,
  Custom,
  Competing,
}

export interface ActivityTimestamps {
  start?: number;
  end?: number;
}

export interface ActivityEmoji {
  name: string;
  id?: string;
  animated?: boolean;
}

export interface ActivityParty {
  id?: string;
  size?: [number, number];
}

export interface ActivityAssets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface ActivitySecrets {
  join?: string;
  spectate?: string;
  match?: string;
}

export enum ActivityFlags {
  Instance = 1 << 0,
  Join = 1 << 1,
  Spectate = 1 << 2,
  JoinRequest = 1 << 3,
  Sync = 1 << 4,
  Play = 1 << 5,
  PartyPrivacyFriends = 1 << 6,
  PartyPrivacyVoiceChannel = 1 << 7,
  Embedded = 1 << 8,
}

export interface ActivityButton {
  label: string;
  url: string;
}

export enum VoiceChannelEffectAnimationType {
  Premium = 0,
  Basic = 1,
}
