import { AvatarDecorationData, User } from "./user.js";
import { Channel } from "./channel.js";
import { Emoji } from "./emoji.js";
import { Role } from "./role.js";
import { Sticker } from "./sticker.js";
import { OAuth2Scope } from "./oauth2.js";

export interface Guild {
  id: string;
  name: string;
  icon?: string;
  icon_hash?: string;
  splash?: string;
  discovery_splash?: string;
  owner?: boolean;
  owner_id: string;
  permissions?: string;
  region?: string;
  afk_channel_id?: string;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: string;
  verification_level: VerificationLevel;
  default_message_notifications: DefaultMessageNotifications;
  explicit_content_filter: ExplicitContentFilter;
  roles: Array<Role>;
  emojis: Array<Emoji>;
  features: Array<GuildFeature>;
  mfa_level: MFALevel;
  application_id?: string;
  system_channel_id?: string;
  system_channel_flags: number;
  rules_channel_id?: string;
  max_presences?: number;
  max_members?: number;
  vanity_url_code?: string;
  description?: string;
  banner?: string;
  premium_tier: PremiumTier;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id?: string;
  max_video_channel_users?: number;
  max_stage_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
  welcome_screen?: WelcomeScreen;
  nsfw_level: NSFWLevel;
  stickers?: Array<Sticker>;
  premium_progress_bar_enabled: boolean;
  safety_alerts_channel_id?: string;
  incidents_data?: IncidentsData;
}

export enum DefaultMessageNotifications {
  AllMessages = 0,
  OnlyMentions = 1,
}

export enum ExplicitContentFilter {
  Disabled = 0,
  MembersWithoutRoles = 1,
  AllMembers = 2,
}

export enum MFALevel {
  None = 0,
  Elevated = 1,
}

export enum VerificationLevel {
  None = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  VeryHigh = 4,
}

export enum NSFWLevel {
  Default = 0,
  Explicit = 1,
  Safe = 2,
  AgeRestricted = 3,
}

export enum PremiumTier {
  None = 0,
  Tier1 = 1,
  Tier2 = 2,
  Tier3 = 3,
}

export enum SystemChannelFlags {
  SuppressJoinNotifications = 1 << 0,
  SuppressPremiumSubscriptions = 1 << 1,
  SuppressGuildReminderNotifications = 1 << 2,
  SuppressJoinNotificationReplies = 1 << 3,
  SuppressRoleSubscriptionPurchaseNotifications = 1 << 4,
  SuppressRoleSubscriptionPurchaseNotificationReplies = 1 << 5,
}

export enum GuildFeature {
  AnimatedBanner = "ANIMATED_BANNER",
  AnimatedIcon = "ANIMATED_ICON",
  ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
  AutoModeration = "AUTO_MODERATION",
  Banner = "BANNER",
  Community = "COMMUNITY",
  CreatorMonetizableProvisional = "CREATOR_MONETIZABLE_PROVISIONAL",
  CreatorStorePage = "CREATOR_STORE_PAGE",
  DeveloperSupportServer = "DEVELOPER_SUPPORT_SERVER",
  Discoverable = "DISCOVERABLE",
  Featurable = "FEATURABLE",
  InvitesDisabled = "INVITES_DISABLED",
  InviteSplash = "INVITE_SPLASH",
  MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
  MoreSoundboard = "MORE_SOUNDBOARD",
  MoreStickers = "MORE_STICKERS",
  News = "NEWS",
  Partnered = "PARTNERED",
  PreviewEnabled = "PREVIEW_ENABLED",
  RaidAlertsDisabled = "RAID_ALERTS_DISABLED",
  RoleIcons = "ROLE_ICONS",
  RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
  RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",
  Soundboard = "SOUNDBOARD",
  TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
  VanityUrl = "VANITY_URL",
  Verified = "VERIFIED",
  VipRegions = "VIP_REGIONS",
  WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

export interface WelcomeScreen {
  description?: string;
  welcome_channels: Array<WelcomeScreenChannel>;
}

export interface WelcomeScreenChannel {
  channel_id: string;
  description: string;
  emoji_id?: string;
  emoji_name?: string;
}

export interface IncidentsData {
  invites_dsiabled_until?: string;
  dms_disabled_until?: string;
  dm_spam_detected_at?: string;
  raid_detected_at?: string;
}

export interface GuildPreview {
  id: string;
  name: string;
  icon?: string;
  splash?: string;
  discovery_splash?: string;
  emojis: Array<Emoji>;
  features: Array<GuildFeature>;
  approximate_member_count: number;
  approximate_presence_count: number;
  description?: string;
  stickers: Array<Sticker>;
}

export interface GuildWidgetSettings {
  enabled: boolean;
  channel_id?: string;
}

export interface GuildWidget {
  id: string;
  name: string;
  instant_invite?: string;
  channels: Array<Partial<Channel>>;
  members: Array<Partial<User>>;
  presence_count: number;
}

export interface GuildMember {
  user?: User;
  nick?: string;
  avatar?: string;
  banner?: string;
  roles: Array<string>;
  joined_at: string;
  premium_since?: string;
  deaf: boolean;
  mute: boolean;
  flags: number;
  pending?: boolean;
  permissions?: string;
  communication_disabled_until?: string;
  avatar_decoration_data?: AvatarDecorationData;
}

export enum GuildMemberFlags {
  DidRejoin = 1 << 0,
  CompletedOnboarding = 1 << 1,
  BypassesVerification = 1 << 2,
  StartedOnboarding = 1 << 3,
  IsGuest = 1 << 4,
  StartedHomeActions = 1 << 5,
  CompletedHomeActions = 1 << 6,
  AutomodQuarantinedUsername = 1 << 7,
  DmSettingsUpsellAcknowledged = 1 << 9,
}

export interface Integration {
  id: string;
  name: string;
  type: string;
  enabled: boolean;
  syncing: boolean;
  role_id: string;
  enable_emoticons?: boolean;
  expire_behavior: IntegrationExpireBehavior;
  expire_grace_period: number;
  user: User;
  account: IntegrationAccount;
  synced_at: string;
  subscriber_count?: number;
  revoked: boolean;
  application: IntegrationApplication;
  scopes: Array<OAuth2Scope>;
}

export enum IntegrationExpireBehavior {
  RemoveRole = 0,
  Kick = 1,
}

export interface IntegrationAccount {
  id: string;
  name: string;
}

export interface IntegrationApplication {
  id: string;
  name: string;
  icon?: string;
  description: string;
  bot?: User;
}

export interface Ban {
  reason?: string;
  user: User;
}

export interface WelcomeScreen {
  description?: string;
  welcome_channels: Array<WelcomeScreenChannel>;
}

export interface Onboarding {
  guild_id: string;
  prompts: Array<OnboardingPrompt>;
  default_channel_ids: Array<string>;
  enabled: boolean;
  mode: OnboardingMode;
}

export interface OnboardingPrompt {
  id: string;
  type: OnboardingPromptType;
  options: Array<OnboardingPromptOption>;
  title: string;
  single_select: boolean;
  required: boolean;
  in_onboarding: boolean;
}

export enum OnboardingPromptType {
  MultipleChoice = 0,
  Dropdown = 1,
}

export enum OnboardingMode {
  OnboardingDefault = 0,
  OnboardingAdvanced = 1,
}

export interface OnboardingPromptOption {
  id: string;
  channel_ids: Array<string>;
  role_ids: Array<string>;
  emoji?: Emoji;
  emoji_id?: string;
  emoji_name?: string;
  emoji_animated?: boolean;
  title: string;
  description?: string;
}




