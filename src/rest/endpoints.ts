// auto-generated file from discord's OpenAPI spec. do not modify.
export enum Endpoint {
	GetMyOauth2Application = 'GET /oauth2/applications/@me',
	ListMyConnections = 'GET /users/@me/connections',
	CreateDm = 'POST /users/@me/channels',
	ListMyGuilds = 'GET /users/@me/guilds',
	GetMyApplication = 'GET /applications/@me',
	UpdateMyApplication = 'PATCH /applications/@me',
	GetBotGateway = 'GET /gateway/bot',
	GetOpenidConnectUserinfo = 'GET /oauth2/userinfo',
	GetPublicKeys = 'GET /oauth2/keys',
	GetMyOauth2Authorization = 'GET /oauth2/@me',
	ListVoiceRegions = 'GET /voice/regions',
	GetMyUser = 'GET /users/@me',
	UpdateMyUser = 'PATCH /users/@me',
	GetSoundboardDefaultSounds = 'GET /soundboard-default-sounds',
	CreateStageInstance = 'POST /stage-instances',
	ListStickerPacks = 'GET /sticker-packs',
	GetGateway = 'GET /gateway',
	CreateGuild = 'POST /guilds',
	ListMyPrivateArchivedThreads = 'GET /channels/{channel_id}/users/@me/threads/archived/private',
	ListGuildApplicationCommandPermissions = 'GET /applications/{application_id}/guilds/{guild_id}/commands/permissions',
	GetGuildApplicationCommandPermissions = 'GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions',
	SetGuildApplicationCommandPermissions = 'PUT /applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions',
	AddMyMessageReaction = 'PUT /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me',
	DeleteMyMessageReaction = 'DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me',
	ListPrivateArchivedThreads = 'GET /channels/{channel_id}/threads/archived/private',
	ListPublicArchivedThreads = 'GET /channels/{channel_id}/threads/archived/public',
	GetApplicationUserRoleConnection = 'GET /users/@me/applications/{application_id}/role-connection',
	UpdateApplicationUserRoleConnection = 'PUT /users/@me/applications/{application_id}/role-connection',
	DeleteApplicationUserRoleConnection = 'DELETE /users/@me/applications/{application_id}/role-connection',
	GetMyGuildMember = 'GET /users/@me/guilds/{guild_id}/member',
	GetApplicationRoleConnectionsMetadata = 'GET /applications/{application_id}/role-connections/metadata',
	UpdateApplicationRoleConnectionsMetadata = 'PUT /applications/{application_id}/role-connections/metadata',
	ConsumeEntitlement = 'POST /applications/{application_id}/entitlements/{entitlement_id}/consume',
	GetGuildApplicationCommand = 'GET /applications/{application_id}/guilds/{guild_id}/commands/{command_id}',
	DeleteGuildApplicationCommand = 'DELETE /applications/{application_id}/guilds/{guild_id}/commands/{command_id}',
	UpdateGuildApplicationCommand = 'PATCH /applications/{application_id}/guilds/{guild_id}/commands/{command_id}',
	ListGuildApplicationCommands = 'GET /applications/{application_id}/guilds/{guild_id}/commands',
	BulkSetGuildApplicationCommands = 'PUT /applications/{application_id}/guilds/{guild_id}/commands',
	CreateGuildApplicationCommand = 'POST /applications/{application_id}/guilds/{guild_id}/commands',
	JoinThread = 'PUT /channels/{channel_id}/thread-members/@me',
	LeaveThread = 'DELETE /channels/{channel_id}/thread-members/@me',
	BulkDeleteMessages = 'POST /channels/{channel_id}/messages/bulk-delete',
	DeleteUserMessageReaction = 'DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/{user_id}',
	ListMessageReactionsByEmoji = 'GET /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}',
	DeleteAllMessageReactionsByEmoji = 'DELETE /channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}',
	DeleteAllMessageReactions = 'DELETE /channels/{channel_id}/messages/{message_id}/reactions',
	CrosspostMessage = 'POST /channels/{channel_id}/messages/{message_id}/crosspost',
	CreateThreadFromMessage = 'POST /channels/{channel_id}/messages/{message_id}/threads',
	GetAnswerVoters = 'GET /channels/{channel_id}/polls/{message_id}/answers/{answer_id}',
	PollExpire = 'POST /channels/{channel_id}/polls/{message_id}/expire',
	GetOriginalWebhookMessage = 'GET /webhooks/{webhook_id}/{webhook_token}/messages/@original',
	DeleteOriginalWebhookMessage = 'DELETE /webhooks/{webhook_id}/{webhook_token}/messages/@original',
	UpdateOriginalWebhookMessage = 'PATCH /webhooks/{webhook_id}/{webhook_token}/messages/@original',
	ListGuildScheduledEventUsers = 'GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users',
	GetAutoModerationRule = 'GET /guilds/{guild_id}/auto-moderation/rules/{rule_id}',
	DeleteAutoModerationRule = 'DELETE /guilds/{guild_id}/auto-moderation/rules/{rule_id}',
	UpdateAutoModerationRule = 'PATCH /guilds/{guild_id}/auto-moderation/rules/{rule_id}',
	ListAutoModerationRules = 'GET /guilds/{guild_id}/auto-moderation/rules',
	CreateAutoModerationRule = 'POST /guilds/{guild_id}/auto-moderation/rules',
	GetSelfVoiceState = 'GET /guilds/{guild_id}/voice-states/@me',
	UpdateSelfVoiceState = 'PATCH /guilds/{guild_id}/voice-states/@me',
	SearchGuildMembers = 'GET /guilds/{guild_id}/members/search',
	GetActiveGuildThreads = 'GET /guilds/{guild_id}/threads/active',
	UpdateMyGuildMember = 'PATCH /guilds/{guild_id}/members/@me',
	AddGuildMemberRole = 'PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}',
	DeleteGuildMemberRole = 'DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}',
	LeaveGuild = 'DELETE /users/@me/guilds/{guild_id}',
	ApplicationsGetActivityInstance = 'GET /applications/{application_id}/activity-instances/{instance_id}',
	GetEntitlement = 'GET /applications/{application_id}/entitlements/{entitlement_id}',
	DeleteEntitlement = 'DELETE /applications/{application_id}/entitlements/{entitlement_id}',
	GetEntitlements = 'GET /applications/{application_id}/entitlements',
	CreateEntitlement = 'POST /applications/{application_id}/entitlements',
	UploadApplicationAttachment = 'POST /applications/{application_id}/attachment',
	GetApplicationCommand = 'GET /applications/{application_id}/commands/{command_id}',
	DeleteApplicationCommand = 'DELETE /applications/{application_id}/commands/{command_id}',
	UpdateApplicationCommand = 'PATCH /applications/{application_id}/commands/{command_id}',
	ListApplicationCommands = 'GET /applications/{application_id}/commands',
	BulkSetApplicationCommands = 'PUT /applications/{application_id}/commands',
	CreateApplicationCommand = 'POST /applications/{application_id}/commands',
	GetApplicationEmoji = 'GET /applications/{application_id}/emojis/{emoji_id}',
	DeleteApplicationEmoji = 'DELETE /applications/{application_id}/emojis/{emoji_id}',
	UpdateApplicationEmoji = 'PATCH /applications/{application_id}/emojis/{emoji_id}',
	ListApplicationEmojis = 'GET /applications/{application_id}/emojis',
	CreateApplicationEmoji = 'POST /applications/{application_id}/emojis',
	CreateInteractionResponse = 'POST /interactions/{interaction_id}/{interaction_token}/callback',
	SendSoundboardSound = 'POST /channels/{channel_id}/send-soundboard-sound',
	GetThreadMember = 'GET /channels/{channel_id}/thread-members/{user_id}',
	AddThreadMember = 'PUT /channels/{channel_id}/thread-members/{user_id}',
	DeleteThreadMember = 'DELETE /channels/{channel_id}/thread-members/{user_id}',
	ListThreadMembers = 'GET /channels/{channel_id}/thread-members',
	SetChannelPermissionOverwrite = 'PUT /channels/{channel_id}/permissions/{overwrite_id}',
	DeleteChannelPermissionOverwrite = 'DELETE /channels/{channel_id}/permissions/{overwrite_id}',
	AddGroupDmUser = 'PUT /channels/{channel_id}/recipients/{user_id}',
	DeleteGroupDmUser = 'DELETE /channels/{channel_id}/recipients/{user_id}',
	FollowChannel = 'POST /channels/{channel_id}/followers',
	GetMessage = 'GET /channels/{channel_id}/messages/{message_id}',
	DeleteMessage = 'DELETE /channels/{channel_id}/messages/{message_id}',
	UpdateMessage = 'PATCH /channels/{channel_id}/messages/{message_id}',
	ListMessages = 'GET /channels/{channel_id}/messages',
	CreateMessage = 'POST /channels/{channel_id}/messages',
	ListChannelWebhooks = 'GET /channels/{channel_id}/webhooks',
	CreateWebhook = 'POST /channels/{channel_id}/webhooks',
	ListChannelInvites = 'GET /channels/{channel_id}/invites',
	CreateChannelInvite = 'POST /channels/{channel_id}/invites',
	CreateThread = 'POST /channels/{channel_id}/threads',
	TriggerTypingIndicator = 'POST /channels/{channel_id}/typing',
	PinMessage = 'PUT /channels/{channel_id}/pins/{message_id}',
	UnpinMessage = 'DELETE /channels/{channel_id}/pins/{message_id}',
	ListPinnedMessages = 'GET /channels/{channel_id}/pins',
	GetWebhookMessage = 'GET /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}',
	DeleteWebhookMessage = 'DELETE /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}',
	UpdateWebhookMessage = 'PATCH /webhooks/{webhook_id}/{webhook_token}/messages/{message_id}',
	ExecuteGithubCompatibleWebhook = 'POST /webhooks/{webhook_id}/{webhook_token}/github',
	ExecuteSlackCompatibleWebhook = 'POST /webhooks/{webhook_id}/{webhook_token}/slack',
	GetGuildTemplate = 'GET /guilds/templates/{code}',
	CreateGuildFromTemplate = 'POST /guilds/templates/{code}',
	GetGuildNewMemberWelcome = 'GET /guilds/{guild_id}/new-member-welcome',
	GetGuildSoundboardSound = 'GET /guilds/{guild_id}/soundboard-sounds/{sound_id}',
	DeleteGuildSoundboardSound = 'DELETE /guilds/{guild_id}/soundboard-sounds/{sound_id}',
	UpdateGuildSoundboardSound = 'PATCH /guilds/{guild_id}/soundboard-sounds/{sound_id}',
	ListGuildSoundboardSounds = 'GET /guilds/{guild_id}/soundboard-sounds',
	CreateGuildSoundboardSound = 'POST /guilds/{guild_id}/soundboard-sounds',
	GetGuildScheduledEvent = 'GET /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}',
	DeleteGuildScheduledEvent = 'DELETE /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}',
	UpdateGuildScheduledEvent = 'PATCH /guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}',
	ListGuildScheduledEvents = 'GET /guilds/{guild_id}/scheduled-events',
	CreateGuildScheduledEvent = 'POST /guilds/{guild_id}/scheduled-events',
	GetGuildWelcomeScreen = 'GET /guilds/{guild_id}/welcome-screen',
	UpdateGuildWelcomeScreen = 'PATCH /guilds/{guild_id}/welcome-screen',
	GetVoiceState = 'GET /guilds/{guild_id}/voice-states/{user_id}',
	UpdateVoiceState = 'PATCH /guilds/{guild_id}/voice-states/{user_id}',
	DeleteGuildIntegration = 'DELETE /guilds/{guild_id}/integrations/{integration_id}',
	ListGuildIntegrations = 'GET /guilds/{guild_id}/integrations',
	GetGuildWidget = 'GET /guilds/{guild_id}/widget.json',
	GetGuildsOnboarding = 'GET /guilds/{guild_id}/onboarding',
	PutGuildsOnboarding = 'PUT /guilds/{guild_id}/onboarding',
	GetGuildVanityUrl = 'GET /guilds/{guild_id}/vanity-url',
	ListGuildAuditLogEntries = 'GET /guilds/{guild_id}/audit-logs',
	GetGuildWidgetPng = 'GET /guilds/{guild_id}/widget.png',
	SyncGuildTemplate = 'PUT /guilds/{guild_id}/templates/{code}',
	DeleteGuildTemplate = 'DELETE /guilds/{guild_id}/templates/{code}',
	UpdateGuildTemplate = 'PATCH /guilds/{guild_id}/templates/{code}',
	ListGuildTemplates = 'GET /guilds/{guild_id}/templates',
	CreateGuildTemplate = 'POST /guilds/{guild_id}/templates',
	GetGuildSticker = 'GET /guilds/{guild_id}/stickers/{sticker_id}',
	DeleteGuildSticker = 'DELETE /guilds/{guild_id}/stickers/{sticker_id}',
	UpdateGuildSticker = 'PATCH /guilds/{guild_id}/stickers/{sticker_id}',
	BulkBanUsersFromGuild = 'POST /guilds/{guild_id}/bulk-ban',
	ListGuildStickers = 'GET /guilds/{guild_id}/stickers',
	CreateGuildSticker = 'POST /guilds/{guild_id}/stickers',
	GetGuildWebhooks = 'GET /guilds/{guild_id}/webhooks',
	ListGuildChannels = 'GET /guilds/{guild_id}/channels',
	CreateGuildChannel = 'POST /guilds/{guild_id}/channels',
	BulkUpdateGuildChannels = 'PATCH /guilds/{guild_id}/channels',
	GetGuildMember = 'GET /guilds/{guild_id}/members/{user_id}',
	AddGuildMember = 'PUT /guilds/{guild_id}/members/{user_id}',
	DeleteGuildMember = 'DELETE /guilds/{guild_id}/members/{user_id}',
	UpdateGuildMember = 'PATCH /guilds/{guild_id}/members/{user_id}',
	ListGuildMembers = 'GET /guilds/{guild_id}/members',
	GetGuildPreview = 'GET /guilds/{guild_id}/preview',
	ListGuildInvites = 'GET /guilds/{guild_id}/invites',
	ListGuildVoiceRegions = 'GET /guilds/{guild_id}/regions',
	GetGuildEmoji = 'GET /guilds/{guild_id}/emojis/{emoji_id}',
	DeleteGuildEmoji = 'DELETE /guilds/{guild_id}/emojis/{emoji_id}',
	UpdateGuildEmoji = 'PATCH /guilds/{guild_id}/emojis/{emoji_id}',
	ListGuildEmojis = 'GET /guilds/{guild_id}/emojis',
	CreateGuildEmoji = 'POST /guilds/{guild_id}/emojis',
	GetGuildWidgetSettings = 'GET /guilds/{guild_id}/widget',
	UpdateGuildWidgetSettings = 'PATCH /guilds/{guild_id}/widget',
	GetGuildRole = 'GET /guilds/{guild_id}/roles/{role_id}',
	DeleteGuildRole = 'DELETE /guilds/{guild_id}/roles/{role_id}',
	UpdateGuildRole = 'PATCH /guilds/{guild_id}/roles/{role_id}',
	ListGuildRoles = 'GET /guilds/{guild_id}/roles',
	CreateGuildRole = 'POST /guilds/{guild_id}/roles',
	BulkUpdateGuildRoles = 'PATCH /guilds/{guild_id}/roles',
	PreviewPruneGuild = 'GET /guilds/{guild_id}/prune',
	PruneGuild = 'POST /guilds/{guild_id}/prune',
	GetGuildBan = 'GET /guilds/{guild_id}/bans/{user_id}',
	BanUserFromGuild = 'PUT /guilds/{guild_id}/bans/{user_id}',
	UnbanUserFromGuild = 'DELETE /guilds/{guild_id}/bans/{user_id}',
	ListGuildBans = 'GET /guilds/{guild_id}/bans',
	SetGuildMfaLevel = 'POST /guilds/{guild_id}/mfa',
	GetStageInstance = 'GET /stage-instances/{channel_id}',
	DeleteStageInstance = 'DELETE /stage-instances/{channel_id}',
	UpdateStageInstance = 'PATCH /stage-instances/{channel_id}',
	GetStickerPack = 'GET /sticker-packs/{pack_id}',
	GetApplication = 'GET /applications/{application_id}',
	UpdateApplication = 'PATCH /applications/{application_id}',
	GetWebhookByToken = 'GET /webhooks/{webhook_id}/{webhook_token}',
	ExecuteWebhook = 'POST /webhooks/{webhook_id}/{webhook_token}',
	DeleteWebhookByToken = 'DELETE /webhooks/{webhook_id}/{webhook_token}',
	UpdateWebhookByToken = 'PATCH /webhooks/{webhook_id}/{webhook_token}',
	GetSticker = 'GET /stickers/{sticker_id}',
	GetWebhook = 'GET /webhooks/{webhook_id}',
	DeleteWebhook = 'DELETE /webhooks/{webhook_id}',
	UpdateWebhook = 'PATCH /webhooks/{webhook_id}',
	GetChannel = 'GET /channels/{channel_id}',
	DeleteChannel = 'DELETE /channels/{channel_id}',
	UpdateChannel = 'PATCH /channels/{channel_id}',
	InviteResolve = 'GET /invites/{code}',
	InviteRevoke = 'DELETE /invites/{code}',
	GetGuild = 'GET /guilds/{guild_id}',
	DeleteGuild = 'DELETE /guilds/{guild_id}',
	UpdateGuild = 'PATCH /guilds/{guild_id}',
	GetUser = 'GET /users/{user_id}',
}