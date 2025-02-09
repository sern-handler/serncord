import { GuildMember } from "./guild.js";
import { User } from "./user.js";

export interface Channel {
  id: string;
  type: ChannelType;
  guild_id?: string;
  position?: number;
  permission_overwrites?: Array<Overwrite>;
  name?: string;
  topic?: string;
  nsfw?: boolean;
  last_message_id?: string;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: Array<User>;
  icon?: string;
  owner_id?: string;
  application_id?: string;
  managed?: boolean;
  parent_id?: string;
  last_pin_timestamp?: string;
  rtc_region?: string;
  video_quality_mode?: VideoQualityMode;
  message_count?: number;
  member_count?: number;
  thread_metadata?: ThreadMetadata;
  member?: ThreadMember;
  default_auto_archive_duration?: number;
  permissions?: string;
  flags?: number;
  total_message_sent?: number;
  available_tags?: Array<string>;
  default_reaction_emoji?: DefaultReaction;
  default_thread_rate_limit_per_user?: number;
  default_sort_order?: ThreadSortOrder;
  default_forum_layout?: ForumLayout;
}

export enum ChannelType {
  GuildText = 0,
  Dm = 1,
  GuildVoice = 2,
  GroupDm = 3,
  GuildCategory = 4,
  GuildAnnouncement = 5,
  AnnouncementThread = 10,
  PublicThread = 11,
  PrivateThread = 12,
  GuildStageVoice = 13,
  GuildDirectory = 14,
  GuildForum = 15,
  GuildMedia = 16,
}

export interface Overwrite {
  id: string;
  type: OverwriteType;
  allow: string;
  deny: string;
}

export enum OverwriteType {
  Role = 0,
  Member = 1,
}

export enum VideoQualityMode {
  Auto = 1,
  Full = 2,
}

export enum ChannelFlags {
  Pinned = 1 << 1,
  RequireTag = 1 << 4,
  HideMediaDownloadOptions = 1 << 15,
}

export enum ThreadSortOrder {
  LatestActivity = 0,
  CreationDate = 1,
}

export enum ForumLayout {
  NotSet = 0,
  ListView = 1,
  GalleryView = 2,
}

export interface ThreadMetadata {
  archived: boolean;
  auto_archive_duration: number;
  archive_timestamp: string;
  locked: boolean;
  invitable?: boolean;
  create_timestamp?: string;
}

export interface ThreadMember {
  id?: string;
  user_id?: string;
  join_timestamp: string;
  flags: number;
  member?: GuildMember;
}

export interface DefaultReaction {
  emoji_id?: string;
  emoji_name?: string;
}

export interface ForumTag {
  id: string;
  name: string;
  moderated: boolean;
  emoji_id?: string;
  emoji_name?: string;
}
