export interface AutoModerationRule {
  id: string;
  guild_id: string;
  name: string;
  creator_id: string;
  event_type: AutoModerationEventType;
  trigger_type: AutoModerationTriggerType;
  trigger_metadata: AutoModerationTriggerMetadata;
  actions: Array<AutoModerationAction>;
  enabled: boolean;
  exempt_roles: Array<string>;
  exempt_channels: Array<string>;
}

export enum AutoModerationEventType {
  MessageSend = 1,
  MemberUpdate = 2,
}

export enum AutoModerationTriggerType {
  Keyword = 1,
  Spam = 3,
  KeywordPreset = 4,
  MentionSpam = 5,
  MemberProfile = 6,
}

export interface AutoModerationTriggerMetadata {
  keyword_filter: Array<string>;
  regex_patterns: Array<string>;
  presets: Array<AutoModerationKeywordPresetType>;
  allow_list: Array<string>;
  mention_total_limit: number;
  mention_raid_protection_enabled: boolean;
}

export enum AutoModerationKeywordPresetType {
  Profanity = 1,
  SexualContent = 2,
  Slurs = 3,
}

export interface AutoModerationAction {
  type: AutoModerationActionType;
  metadata: AutoModerationActionMetadata;
}

export enum AutoModerationActionType {
  BlockMessage = 1,
  SendAlertMessage = 2,
  Timeout = 3,
  BlockMemberInteraction = 4,
}

export interface AutoModerationActionMetadata {
  channel_id: string;
  duration_seconds: number;
  custom_message?: string;
}
