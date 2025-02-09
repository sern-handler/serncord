import { Channel } from "diagnostics_channel";
import {
  AutoModerationRule,
  AutoModerationTriggerType,
} from "./auto_moderation.js";
import { Integration } from "./guild.js";
import { User } from "./user.js";
import { GuildScheduledEvent } from "./guild_scheduled_event.js";
import { ApplicationCommand } from "./application_command.js";
import { Webhook } from "./webhook.js";

export interface AuditLog {
  application_commands: Array<ApplicationCommand>;
  audit_log_entries: Array<AuditLogEntry>;
  auto_moderation_rules: Array<AutoModerationRule>;
  guild_scheduled_events: Array<GuildScheduledEvent>;
  integrations: Array<Partial<Integration>>;
  threads: Array<Channel>;
  users: Array<User>;
  webhooks: Array<Webhook>;
}

export interface AuditLogEntry {
  target_id?: string;
  changes?: Array<AuditLogChange>;
  user_id?: string;
  id: string;
  action_type: AuditLogEvent;
  options?: AuditLogEntryInfo;
  reason?: string;
}

export enum AuditLogEvent {
  GuildUpdate = 1,
  ChannelCreate = 10,
  ChannelUpdate = 11,
  ChannelDelete = 12,
  ChannelOverwriteCreate = 13,
  ChannelOverwriteUpdate = 14,
  ChannelOverwriteDelete = 15,
  MemberKick = 20,
  MemberPrune = 21,
  MemberBanAdd = 22,
  MemberBanRemove = 23,
  MemberUpdate = 24,
  MemberRoleUpdate = 25,
  MemberMove = 26,
  MemberDisconnect = 27,
  BotAdd = 28,
  RoleCreate = 30,
  RoleUpdate = 31,
  RoleDelete = 32,
  InviteCreate = 40,
  InviteUpdate = 41,
  InviteDelete = 42,
  WebhookCreate = 50,
  WebhookUpdate = 51,
  WebhookDelete = 52,
  EmojiCreate = 60,
  EmojiUpdate = 61,
  EmojiDelete = 62,
  MessageDelete = 72,
  MessageBulkDelete = 73,
  MessagePin = 74,
  MessageUnpin = 75,
  IntegrationCreate = 80,
  IntegrationUpdate = 81,
  IntegrationDelete = 82,
  StageInstanceCreate = 83,
  StageInstanceUpdate = 84,
  StageInstanceDelete = 85,
  StickerCreate = 90,
  StickerUpdate = 91,
  StickerDelete = 92,
  GuildScheduledEventCreate = 100,
  GuildScheduledEventUpdate = 101,
  GuildScheduledEventDelete = 102,
  ThreadCreate = 110,
  ThreadUpdate = 111,
  ThreadDelete = 112,
  ApplicationCommandPermissionUpdate = 121,
  SoundboardSoundCreate = 130,
  SoundboardSoundUpdate = 131,
  SoundboardSoundDelete = 132,
  AutoModerationRuleCreate = 140,
  AutoModerationRuleUpdate = 141,
  AutoModerationRuleDelete = 142,
  AutoModerationBlockMessage = 143,
  AutoModerationFlagToChannel = 144,
  AutoModerationUserCommunicationDisabled = 145,
  CreatorMonetizationRequestCreated = 150,
  CreatorMonetizationTermsAccepted = 151,
  OnboardingPromptCreate = 163,
  OnboardingPromptUpdate = 164,
  OnboardingPromptDelete = 165,
  OnboardingCreate = 166,
  OnboardingUpdate = 167,
  HomeSettingsCreate = 190,
  HomeSettingsUpdate = 191,
}

export interface AuditLogEntryInfo {
  application_id?: string;
  auto_moderation_rule_name?: string;
  auto_moderation_rule_trigger_type?: AutoModerationTriggerType;
  channel_id?: string;
  count?: number;
  delete_member_days?: string;
  id?: string;
  members_removed?: string;
  message_id?: string;
  role_name?: string;
  type?: string;
  integration_type?: string;
}

export interface AuditLogChange {
  key: string;
  new_value?: unknown;
  old_value?: unknown;
}