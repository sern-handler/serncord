import { Guild } from "./guild.js";
import { Team } from "./team.js";
import { User } from "./user.js";

export interface Application {
  id: string;
  name: string;
  icon?: string;
  description: string;
  rpc_origins?: Array<string>;
  bot_public: boolean;
  bot_require_code_grant: boolean;
  bot?: Partial<User>;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  owner?: Partial<User>;
  verify_key: string;
  team?: Partial<Team>;
  guild_id?: string;
  guild?: Partial<Guild>;
  primary_sku_id?: string;
  slug?: string;
  cover_image?: string;
  flags?: number;
  approximate_guild_count?: number;
  approximate_user_install_count?: number;
  redirect_uris?: Array<string>;
  interactions_endpoint_url?: string;
  role_connections_verification_url?: string;
  event_webhooks_url?: string;
  event_webhooks_status?: ApplicationEventWebhookStatus;
  event_webhooks_types?: Array<string>;
  tags?: Array<string>;
  install_params?: InstallParams;
  integration_types_config?: Record<
    ApplicationCommandPermissionType,
    ApplicationIntegrationTypeConfig
  >;
  custom_install_url?: string;
}

export enum ApplicationIntegrationType {
  GuildInstall,
  UserInstall,
}

export interface ApplicationIntegrationTypeConfig {
  oauth2_install_params?: InstallParams;
}

export enum ApplicationEventWebhookStatus {
  Disabled = 1,
  Enabled = 2,
  DisabledByDiscord = 3,
}

export enum ApplicationFlags {
  ApplicationAutoModerationRuleCreateBadge = 1 << 6,
  GatewayPresence = 1 << 12,
  GatewayPresenceLimited = 1 << 13,
  GatewayGuildMembers = 1 << 14,
  GatewayGuildMembersLimited = 1 << 15,
  VerificationPendingGuildLimit = 1 << 16,
  Embedded = 1 << 17,
  GatewayMessageContent = 1 << 18,
  GatewayMessageContentLimited = 1 << 19,
  ApplicationCommandBadge = 1 << 23,
}

export interface InstallParams {
  scopes: Array<string>;
  permissions: string;
}

export interface ApplicationCommandPermissions {
  id: string;
  application_id: string;
  guild_id: string;
  permissions: Array<ApplicationCommandPermission>;
}
export interface ApplicationCommandPermission {
  id: string;
  type: ApplicationCommandPermissionType;
  permission: boolean;
}

export enum ApplicationCommandPermissionType {
  Role = 1,
  User = 2,
  Channel = 3,
}
