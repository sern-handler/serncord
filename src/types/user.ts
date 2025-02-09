import { Integration } from "./guild.js";

export interface User {
  id: string;
  username: string;
  discriminator: string;
  global_name?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premium_type?: PremiumType;
  public_flags?: number;
  avatar_decoration_data?: AvatarDecorationData;
}

export enum PremiumType {
  None = 0,
  NitroClassic = 1,
  Nitro = 2,
  NitroBasic = 3,
}

export interface AvatarDecorationData {
  asset: string;
  sku_id: string;
}

export enum UserFlags {
  Staff = 1 << 0,
  Partner = 1 << 1,
  Hypesquad = 1 << 2,
  BugHunter = 1 << 3,
  HypesqualOnlineHouse1 = 1 << 6,
  HypesqualOnlineHouse2 = 1 << 7,
  HypesqualOnlineHouse3 = 1 << 8,
  PremiumEarlySupporter = 1 << 9,
  TeamPsuedoUser = 1 << 10,
  BugHunterLevel2 = 1 << 14,
  VerifiedBot = 1 << 16,
  VerifiedBotDeveloper = 1 << 17,
  CertifiedModerator = 1 << 18,
  BotHttpInteractions = 1 << 19,
  ActiveDeveloper = 1 << 22,
}

export interface Connection {
  id: string;
  name: string;
  type: ConnectionService;
  revoked?: boolean;
  integrations: Array<Integration>;
  verified: boolean;
  friend_sync: boolean;
  show_activity: boolean;
  two_way_link: boolean;
  visibility: ConnectionVisibility;
}

export enum ConnectionService {
  AmazonMusic = "amazon-music",
  BattleNet = "battlenet",
  Bungie = "bungie",
  Bluesky = "bluesky",
  Crunchyroll = "crunchyroll",
  Domain = "domain",
  EBay = "ebay",
  EpicGames = "epicgames",
  Facebook = "facebook",
  Github = "github",
  Instagram = "instagram",
  LeagueOfLegends = "leagueoflegends",
  Mastodon = "mastodon",
  PayPal = "paypal",
  PlayStation = "playstation",
  Reddit = "reddit",
  RiotGames = "riotgames",
  Roblox = "roblox",
  Spotify = "spotify",
  Skype = "skype",
  Steam = "steam",
  TikTok = "tiktok",
  Twitch = "twitch",
  Twitter = "twitter",
  Xbox = "xbox",
  YouTube = "youtube",
}

export enum ConnectionVisibility {
  None = 0,
  Everyone = 1,
}

export interface ApplicationRoleConnectionObject {
  platform_name?: string;
  platform_username?: string;
  metadata: Record<string, string>;
}
