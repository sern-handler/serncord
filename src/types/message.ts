import { Channel } from "diagnostics_channel";
import { Application, ApplicationIntegrationType } from "./application.js";
import {
  Component,
  Interaction,
  InteractionType,
  MessageInteraction,
  ResolvedData,
} from "./interaction.js";
import { User } from "./user.js";
import { Sticker, StickerItem } from "./sticker.js";
import { Emoji } from "./emoji.js";
import { ChannelType } from "./channel.js";
import { Poll } from "./poll.js";

export interface Message {
  id: string;
  channel_id: string;
  author: User;
  content: string;
  timestamp: string;
  edited_timestamp?: string;
  tts: boolean;
  mention_everyone: boolean;
  mentions: Array<User>;
  mention_roles: Array<string>;
  mention_channels?: Array<ChannelMention>;
  attachments: Array<Attachment>;
  embeds: Array<Embed>;
  reactions?: Array<Reaction>;
  nonce: number | string;
  pinned: boolean;
  webhook_id?: string;
  type: MessageType;
  activity?: MessageActivity;
  application?: Partial<Application>;
  application_id?: string;
  flags?: number;
  message_reference?: MessageReference;
  message_snapshots?: Array<MessageSnapshot>;
  referenced_message?: Message;
  interaction_metadata?: MessageInteractionMetadata;
  interaction?: MessageInteraction;
  thread?: Channel;
  components?: Array<Component>;
  sticker_items?: Array<StickerItem>;
  stickers?: Array<Sticker>;
  position?: number;
  role_subscription_data?: RoleSubscriptionData;
  resolved?: ResolvedData;
  poll?: Poll;
  call?: Call;
}

export enum MessageType {
  Default = 0,
  RecipientAdd = 1,
  RecipientRemove = 2,
  Call = 3,
  ChannelNameChange = 4,
  ChannelIconChange = 5,
  ChannelPinnedMessage = 6,
  UserJoin = 7,
  GuildBoost = 8,
  GuildBoostTier1 = 9,
  GuildBoostTier2 = 9,
  GuildBoostTier3 = 9,
  ChannelFollowAdd = 12,
  GuildDiscoveryDisqualified = 14,
  GuildDiscoveryRequalified = 15,
  GuildDiscoveryGracePeriodInitialWarning = 16,
  GuildDiscoveryGracePeriodFinalWarning = 17,
  ThreadCreated = 18,
  Reply = 19,
  ChatInputCommand = 20,
  ThreadStarterMessage = 21,
  GuildInviteReminder = 22,
  ContextMenuCommand = 23,
  AutoModerationAction = 24,
  RoleSubscriptionPurchase = 25,
  InteractionPremiumUpsell = 26,
  StageStart = 27,
  StageEnd = 28,
  StageSpeaker = 29,
  StageTopic = 31,
  GuildApplicationPremiumSubscription = 32,
  GuildIncidentAlertModeEnabled = 36,
  GuildIncidentAlertModeDisabled = 37,
  GuildIncidentReportRaid = 38,
  GuildIncidentReportFalseAlarm = 39,
  PurchaseNotification = 44,
  PollResult = 46,
}

export interface MessageActivity {
  type: MessageActivityType;
  party_id?: string;
}

export enum MessageActivityType {
  Join = 1,
  Spectate = 2,
  Listen = 3,
  JoinRequest = 5,
}

export enum MessageFlags {
  Crossposted = 1 << 0,
  IsCrosspost = 1 << 1,
  SuppressEmbeds = 1 << 2,
  SourceMessageDeleted = 1 << 3,
  Urgent = 1 << 4,
  HasThread = 1 << 5,
  Ephemeral = 1 << 6,
  Loading = 1 << 7,
  FailedToMentionSomeRolesInThread = 1 << 8,
  SuppressNotifications = 1 << 12,
  IsVoiceMessage = 1 << 13,
  HasSnapshot = 1 << 14,
}

export interface MessageInteractionMetadata {
  id: string;
  type: InteractionType;
  user: User;
  authorizing_integration_owners: Record<ApplicationIntegrationType, string>;
  original_response_message_id?: string;
  target_user?: User;
  target_message_id?: string;
}

export interface MessageComponentInteractionMetadata {
  id: string;
  type: InteractionType;
  user: User;
  authorizing_integration_owners: Record<ApplicationIntegrationType, string>;
  original_response_message_id?: string;
  interactied_message_id: string;
}

export interface ModalSubmitInteractionMetadata {
  id: string;
  type: InteractionType;
  user: User;
  authorizing_integration_owners: Record<ApplicationIntegrationType, string>;
  original_response_message_id?: string;
  triggering_interaction_metadata: MessageInteractionMetadata;
}

export interface Call {
  participants: Array<string>;
  ended_timestamp?: string;
}

export interface MessageReference {
  type?: MessageReferenceType;
  message_id?: string;
  channel_id?: string;
  guild_id?: string;
  fail_if_not_exists?: boolean;
}

export enum MessageReferenceType {
  Default,
  Forward,
}

export interface MessageSnapshot {
  message: Partial<Message>;
}

export interface Reaction {
  count: number;
  count_details: ReactionCountDetails;
  me: boolean;
  me_burst: boolean;
  emoji: Partial<Emoji>;
  burst_colors: Array<number>;
}

export interface ReactionCountDetails {
  burst: number;
  normal: number;
}

export enum ReactionType {
  Normal,
  Burst,
}

export interface Embed {
  title?: string;
  type?: EmbedType;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: Array<EmbedField>;
}

export enum EmbedType {
  Rich = "rich",
  Image = "image",
  Video = "video",
  GifV = "gifv",
  Article = "article",
  Link = "link",
  PollResult = "poll_result",
}

export interface EmbedThumbnail {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedImage {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedVideo {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface EmbedProvider {
  name?: string;
  url?: string;
}

export interface EmbedAuthor {
  name: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface EmbedFooter {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface Attachment {
  id: string;
  filename: string;
  title?: string;
  description?: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  ephemeral?: boolean;
  duration_secs?: number;
  waveform?: string;
  flags?: number;
}

export enum AttachmentFlags {
  IsRemix = 1 << 2,
}

export interface ChannelMention {
  id: string;
  guild_id: string;
  type: ChannelType;
  name: string;
}

export interface AllowMentions {
  parse: Array<AllowedMentionType>;
  roles: Array<string>;
  users: Array<string>;
  replied_user: boolean;
}

export enum AllowedMentionType {
  Roles = "roles",
  Users = "users",
  Everyone = "everyone",
}

export interface RoleSubscriptionData {}
