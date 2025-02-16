// auto-generated file from discord's OpenAPI spec. do not modify.
export interface AccountResponse {
	id: string;
	name: string | null;
}


export interface ActionRowComponentForMessageRequest {
	type: number;
	components: Array<ButtonComponentForMessageRequest | ChannelSelectComponentForMessageRequest | MentionableSelectComponentForMessageRequest | RoleSelectComponentForMessageRequest | StringSelectComponentForMessageRequest | UserSelectComponentForMessageRequest>;
}


export interface ActionRowComponentForModalRequest {
	type: number;
	components: Array<TextInputComponentForModalRequest>;
}


export interface ActionRowComponentResponse {
	type: number;
	id: number;
	components: Array<ButtonComponentResponse | ChannelSelectComponentResponse | MentionableSelectComponentResponse | RoleSelectComponentResponse | StringSelectComponentResponse | TextInputComponentResponse | UserSelectComponentResponse> | null;
}


export interface ActivitiesAttachmentResponse {
	attachment: AttachmentResponse;
}


export enum ActivityLocationKinds {
	GuildChannel = "gc",
	PrivateChannel = "pc",
}

export type AfkTimeouts = number;

export enum AllowedMentionTypes {
	Users = "users",
	Roles = "roles",
	Everyone = "everyone",
}

export interface ApplicationCommandAttachmentOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandAttachmentOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandAutocompleteCallbackRequest {
	type: number;
	data: InteractionApplicationCommandAutocompleteCallbackIntegerData | InteractionApplicationCommandAutocompleteCallbackNumberData | InteractionApplicationCommandAutocompleteCallbackStringData;
}


export interface ApplicationCommandBooleanOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandBooleanOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandChannelOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	channel_types: Array<ChannelTypes> | null;
}


export interface ApplicationCommandChannelOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	channel_types: Array<ChannelTypes> | null;
}


export interface ApplicationCommandCreateRequest {
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	options: Array<ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption> | null;
	default_member_permissions: number | null;
	dm_permission: boolean | null;
	contexts: Array<InteractionContextType> | null;
	integration_types: Array<ApplicationIntegrationType> | null;
	handler: null | ApplicationCommandHandler;
	type: null | ApplicationCommandType;
}


export type ApplicationCommandHandler = number;

export interface ApplicationCommandIntegerOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	autocomplete: boolean | null;
	choices: Array<ApplicationCommandOptionIntegerChoice> | null;
	min_value: null | Int53Type;
	max_value: null | Int53Type;
}


export interface ApplicationCommandIntegerOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	autocomplete: boolean | null;
	choices: Array<ApplicationCommandOptionIntegerChoiceResponse> | null;
	min_value: null | Int53Type;
	max_value: null | Int53Type;
}


export interface ApplicationCommandInteractionMetadataResponse {
	id: SnowflakeType;
	type: number;
	user: null | UserResponse;
	authorizing_integration_owners: {
			[key: string]: SnowflakeType;
		};
	original_response_message_id: null | SnowflakeType;
	target_user: null | UserResponse;
	target_message_id: null | SnowflakeType;
}


export interface ApplicationCommandMentionableOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandMentionableOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandNumberOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	autocomplete: boolean | null;
	choices: Array<ApplicationCommandOptionNumberChoice> | null;
	min_value: number | null;
	max_value: number | null;
}


export interface ApplicationCommandNumberOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	autocomplete: boolean | null;
	choices: Array<ApplicationCommandOptionNumberChoiceResponse> | null;
	min_value: number | null;
	max_value: number | null;
}


export interface ApplicationCommandOptionIntegerChoice {
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	value: Int53Type;
}


export interface ApplicationCommandOptionIntegerChoiceResponse {
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	value: Int53Type;
}


export interface ApplicationCommandOptionNumberChoice {
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	value: number;
}


export interface ApplicationCommandOptionNumberChoiceResponse {
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	value: number;
}


export interface ApplicationCommandOptionStringChoice {
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	value: string;
}


export interface ApplicationCommandOptionStringChoiceResponse {
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	value: string;
}


export type ApplicationCommandOptionType = number;

export interface ApplicationCommandPatchRequestPartial {
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	options: Array<ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption> | null;
	default_member_permissions: number | null;
	dm_permission: boolean | null;
	contexts: Array<InteractionContextType> | null;
	integration_types: Array<ApplicationIntegrationType> | null;
	handler: null | ApplicationCommandHandler;
}


export interface ApplicationCommandPermission {
	id: SnowflakeType;
	type: ApplicationCommandPermissionType;
	permission: boolean;
}


export type ApplicationCommandPermissionType = number;

export interface ApplicationCommandResponse {
	id: SnowflakeType;
	application_id: SnowflakeType;
	version: SnowflakeType;
	default_member_permissions: string | null;
	type: ApplicationCommandType;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	guild_id: null | SnowflakeType;
	dm_permission: boolean | null;
	contexts: Array<InteractionContextType> | null;
	integration_types: Array<ApplicationIntegrationType> | null;
	options: Array<ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandSubcommandGroupOptionResponse | ApplicationCommandSubcommandOptionResponse | ApplicationCommandUserOptionResponse> | null;
	nsfw: boolean | null;
}


export interface ApplicationCommandRoleOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandRoleOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandStringOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	autocomplete: boolean | null;
	min_length: number | null;
	max_length: number | null;
	choices: Array<ApplicationCommandOptionStringChoice> | null;
}


export interface ApplicationCommandStringOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	autocomplete: boolean | null;
	choices: Array<ApplicationCommandOptionStringChoiceResponse> | null;
	min_length: number | null;
	max_length: number | null;
}


export interface ApplicationCommandSubcommandGroupOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	options: Array<ApplicationCommandSubcommandOption> | null;
}


export interface ApplicationCommandSubcommandGroupOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	options: Array<ApplicationCommandSubcommandOptionResponse> | null;
}


export interface ApplicationCommandSubcommandOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	options: Array<ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandUserOption> | null;
}


export interface ApplicationCommandSubcommandOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
	options: Array<ApplicationCommandAttachmentOptionResponse | ApplicationCommandBooleanOptionResponse | ApplicationCommandChannelOptionResponse | ApplicationCommandIntegerOptionResponse | ApplicationCommandMentionableOptionResponse | ApplicationCommandNumberOptionResponse | ApplicationCommandRoleOptionResponse | ApplicationCommandStringOptionResponse | ApplicationCommandUserOptionResponse> | null;
}


export type ApplicationCommandType = number;

export interface ApplicationCommandUpdateRequest {
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	options: Array<ApplicationCommandAttachmentOption | ApplicationCommandBooleanOption | ApplicationCommandChannelOption | ApplicationCommandIntegerOption | ApplicationCommandMentionableOption | ApplicationCommandNumberOption | ApplicationCommandRoleOption | ApplicationCommandStringOption | ApplicationCommandSubcommandGroupOption | ApplicationCommandSubcommandOption | ApplicationCommandUserOption> | null;
	default_member_permissions: number | null;
	dm_permission: boolean | null;
	contexts: Array<InteractionContextType> | null;
	integration_types: Array<ApplicationIntegrationType> | null;
	handler: null | ApplicationCommandHandler;
	type: null | ApplicationCommandType;
	id: null | SnowflakeType;
}


export interface ApplicationCommandUserOption {
	type: number;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export interface ApplicationCommandUserOptionResponse {
	type: number;
	name: string;
	name_localized: string | null;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localized: string | null;
	description_localizations: {
		[key: string]: string;
	} | null;
	required: boolean | null;
}


export type ApplicationExplicitContentFilterTypes = number;

export interface ApplicationFormPartial {
	description: {
	default: string;
	localizations: {
		[key: string]: string;
	} | null;
	} | null;
	icon: string | null;
	cover_image: string | null;
	team_id: null | SnowflakeType;
	flags: number | null;
	interactions_endpoint_url: string | null;
	explicit_content_filter: null | ApplicationExplicitContentFilterTypes;
	max_participants: number | null;
	type: null | ApplicationTypes;
	tags: Array<string> | null;
	custom_install_url: string | null;
	install_params: null | ApplicationOAuth2InstallParams;
	role_connections_verification_url: string | null;
	integration_types_config: {
		[key: string]: null | ApplicationIntegrationTypeConfiguration;
	} | null;
}


export interface ApplicationIncomingWebhookResponse {
	application_id: null | SnowflakeType;
	avatar: string | null;
	channel_id: null | SnowflakeType;
	guild_id: null | SnowflakeType;
	id: SnowflakeType;
	name: string;
	type: number;
	user: null | UserResponse;
}


export type ApplicationIntegrationType = number;

export interface ApplicationIntegrationTypeConfiguration {
	oauth2_install_params: null | ApplicationOAuth2InstallParams;
}


export interface ApplicationIntegrationTypeConfigurationResponse {
	oauth2_install_params: null | ApplicationOAuth2InstallParamsResponse;
}


export interface ApplicationOAuth2InstallParams {
	scopes: Array<string> | null;
	permissions: number | null;
}


export interface ApplicationOAuth2InstallParamsResponse {
	scopes: Array<string>;
	permissions: string;
}


export interface ApplicationResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	description: string;
	type: null | ApplicationTypes;
	cover_image: string | null;
	primary_sku_id: null | SnowflakeType;
	bot: null | UserResponse;
	slug: string | null;
	guild_id: null | SnowflakeType;
	rpc_origins: Array<string | null> | null;
	bot_public: boolean | null;
	bot_require_code_grant: boolean | null;
	terms_of_service_url: string | null;
	privacy_policy_url: string | null;
	custom_install_url: string | null;
	install_params: null | ApplicationOAuth2InstallParamsResponse;
	integration_types_config: {
		[key: string]: ApplicationIntegrationTypeConfigurationResponse;
	} | null;
	verify_key: string;
	flags: number;
	max_participants: number | null;
	tags: Array<string> | null;
}


export interface ApplicationRoleConnectionsMetadataItemRequest {
	type: MetadataItemTypes;
	key: string;
	name: string;
	name_localizations: {
		[key: string]: string | null;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string | null;
	} | null;
}


export interface ApplicationRoleConnectionsMetadataItemResponse {
	type: MetadataItemTypes;
	key: string;
	name: string;
	name_localizations: {
		[key: string]: string;
	} | null;
	description: string;
	description_localizations: {
		[key: string]: string;
	} | null;
}


export type ApplicationTypes = number;

export interface ApplicationUserRoleConnectionResponse {
	platform_name: string | null;
	platform_username: string | null;
	metadata: {
		[key: string]: string;
	} | null;
}


export interface AttachmentResponse {
	id: SnowflakeType;
	filename: string;
	size: number;
	url: string;
	proxy_url: string;
	width: number | null;
	height: number | null;
	duration_secs: number | null;
	waveform: string | null;
	description: string | null;
	content_type: string | null;
	ephemeral: boolean | null;
	title: string | null;
	application: null | ApplicationResponse;
	clip_created_at: string | null;
	clip_participants: Array<UserResponse> | null;
}


export type AuditLogActionTypes = number;

export interface AuditLogEntryResponse {
	id: SnowflakeType;
	action_type: AuditLogActionTypes;
	user_id: null | SnowflakeType;
	target_id: null | SnowflakeType;
	changes: Array<AuditLogObjectChangeResponse> | null;
	options: {
		[key: string]: string;
	} | null;
	reason: string | null;
}


export interface AuditLogObjectChangeResponse {
	key: string | null;
	new_value: unknown;
	old_value: unknown;
}


export type AutomodActionType = number;

export type AutomodEventType = number;

export type AutomodKeywordPresetType = number;

export type AutomodTriggerType = number;

export enum AvailableLocalesEnum {
	Ar = "ar",
	Bg = "bg",
	Cs = "cs",
	Da = "da",
	De = "de",
	El = "el",
	EnGb = "en-GB",
	EnUs = "en-US",
	Es419 = "es-419",
	EsEs = "es-ES",
	Fi = "fi",
	Fr = "fr",
	He = "he",
	Hi = "hi",
	Hr = "hr",
	Hu = "hu",
	Id = "id",
	It = "it",
	Ja = "ja",
	Ko = "ko",
	Lt = "lt",
	Nl = "nl",
	No = "no",
	Pl = "pl",
	PtBr = "pt-BR",
	Ro = "ro",
	Ru = "ru",
	SvSe = "sv-SE",
	Th = "th",
	Tr = "tr",
	Uk = "uk",
	Vi = "vi",
	ZhCn = "zh-CN",
	ZhTw = "zh-TW",
}

export interface BaseCreateMessageCreateRequest {
	content: string | null;
	embeds: Array<RichEmbed> | null;
	allowed_mentions: null | MessageAllowedMentionsRequest;
	sticker_ids: Array<SnowflakeType> | null;
	components: Array<ActionRowComponentForMessageRequest> | null;
	flags: number | null;
	attachments: Array<MessageAttachmentRequest> | null;
	poll: null | PollCreateRequest;
	confetti_potion: null | ConfettiPotionCreateRequest;
}


export interface BasicApplicationResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	description: string;
	type: null | ApplicationTypes;
	cover_image: string | null;
	primary_sku_id: null | SnowflakeType;
	bot: null | UserResponse;
}


export interface BasicMessageResponse {
	type: MessageType;
	content: string;
	mentions: Array<UserResponse>;
	mention_roles: Array<SnowflakeType>;
	attachments: Array<MessageAttachmentResponse>;
	embeds: Array<MessageEmbedResponse>;
	timestamp: string;
	edited_timestamp: string | null;
	flags: number;
	components: Array<ActionRowComponentResponse | ButtonComponentResponse | ChannelSelectComponentResponse | MentionableSelectComponentResponse | RoleSelectComponentResponse | StringSelectComponentResponse | TextInputComponentResponse | UserSelectComponentResponse>;
	resolved: null | ResolvedObjectsResponse;
	stickers: Array<GuildStickerResponse | StandardStickerResponse> | null;
	sticker_items: Array<MessageStickerItemResponse> | null;
	id: SnowflakeType;
	channel_id: SnowflakeType;
	author: UserResponse;
	pinned: boolean;
	mention_everyone: boolean;
	tts: boolean;
	call: null | MessageCallResponse;
	activity: null | MessageActivityResponse;
	application: null | BasicApplicationResponse;
	application_id: null | SnowflakeType;
	interaction: null | MessageInteractionResponse;
	nonce: bigint | string | null;
	webhook_id: null | SnowflakeType;
	message_reference: null | MessageReferenceResponse;
	thread: null | ThreadResponse;
	mention_channels: Array<null | MessageMentionChannelResponse> | null;
	role_subscription_data: null | MessageRoleSubscriptionDataResponse;
	purchase_notification: null | PurchaseNotificationResponse;
	position: number | null;
	poll: null | PollResponse;
	interaction_metadata: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse | null;
	message_snapshots: Array<MessageSnapshotResponse> | null;
}


export interface BlockMessageAction {
	type: number;
	metadata: null | BlockMessageActionMetadata;
}


export interface BlockMessageActionMetadata {
	custom_message: string | null;
}


export interface BlockMessageActionMetadataResponse {
	custom_message: string | null;
}


export interface BlockMessageActionResponse {
	type: number;
	metadata: BlockMessageActionMetadataResponse;
}


export interface BotAccountPatchRequest {
	username: string;
	avatar: string | null;
	banner: string | null;
}


export interface BulkBanUsersResponse {
	banned_users: Array<SnowflakeType>;
	failed_users: Array<SnowflakeType>;
}


export interface ButtonComponentForMessageRequest {
	type: number;
	custom_id: string | null;
	style: ButtonStyleTypes;
	label: string | null;
	disabled: boolean | null;
	url: string | null;
	sku_id: null | SnowflakeType;
	emoji: null | ComponentEmojiForMessageRequest;
}


export interface ButtonComponentResponse {
	type: number;
	id: number;
	custom_id: string | null;
	style: ButtonStyleTypes;
	label: string | null;
	disabled: boolean | null;
	emoji: null | ComponentEmojiResponse;
	url: string | null;
	sku_id: null | SnowflakeType;
}


export type ButtonStyleTypes = number;

export interface ChannelFollowerResponse {
	channel_id: SnowflakeType;
	webhook_id: SnowflakeType;
}


export interface ChannelFollowerWebhookResponse {
	application_id: null | SnowflakeType;
	avatar: string | null;
	channel_id: null | SnowflakeType;
	guild_id: null | SnowflakeType;
	id: SnowflakeType;
	name: string;
	type: number;
	user: null | UserResponse;
	source_guild: null | WebhookSourceGuildResponse;
	source_channel: null | WebhookSourceChannelResponse;
}


export interface ChannelPermissionOverwriteRequest {
	id: SnowflakeType;
	type: null | ChannelPermissionOverwrites;
	allow: number | null;
	deny: number | null;
}


export interface ChannelPermissionOverwriteResponse {
	id: SnowflakeType;
	type: ChannelPermissionOverwrites;
	allow: string;
	deny: string;
}


export type ChannelPermissionOverwrites = number;

export interface ChannelSelectComponentForMessageRequest {
	type: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	default_values: Array<ChannelSelectDefaultValue> | null;
	channel_types: Array<ChannelTypes> | null;
}


export interface ChannelSelectComponentResponse {
	type: number;
	id: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	channel_types: Array<ChannelTypes> | null;
	default_values: Array<ChannelSelectDefaultValueResponse> | null;
}


export interface ChannelSelectDefaultValue {
	type: string;
	id: SnowflakeType;
}


export interface ChannelSelectDefaultValueResponse {
	type: string;
	id: SnowflakeType;
}


export type ChannelTypes = number;

export interface CommandPermissionResponse {
	id: SnowflakeType;
	type: ApplicationCommandPermissionType;
	permission: boolean;
}


export interface CommandPermissionsResponse {
	id: SnowflakeType;
	application_id: SnowflakeType;
	guild_id: SnowflakeType;
	permissions: Array<CommandPermissionResponse>;
}


export interface ComponentEmojiForMessageRequest {
	id: null | SnowflakeType;
	name: string;
}


export interface ComponentEmojiResponse {
	id: null | SnowflakeType;
	name: string;
	animated: boolean | null;
}


export interface ConfettiPotionCreateRequest {
}


export interface ConnectedAccountGuildResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
}


export interface ConnectedAccountIntegrationResponse {
	id: string;
	type: IntegrationTypes;
	account: AccountResponse;
	guild: ConnectedAccountGuildResponse;
}


export enum ConnectedAccountProviders {
	Battlenet = "battlenet",
	Bluesky = "bluesky",
	Bungie = "bungie",
	Ebay = "ebay",
	EpicGames = "epicgames",
	Facebook = "facebook",
	Github = "github",
	Instagram = "instagram",
	Mastodon = "mastodon",
	LeagueOfLegends = "leagueoflegends",
	Paypal = "paypal",
	Playstation = "playstation",
	Reddit = "reddit",
	RiotGames = "riotgames",
	Roblox = "roblox",
	Skype = "skype",
	Spotify = "spotify",
	Steam = "steam",
	Tiktok = "tiktok",
	Twitch = "twitch",
	Twitter = "twitter",
	Xbox = "xbox",
	Youtube = "youtube",
	Domain = "domain",
}

export interface ConnectedAccountResponse {
	id: string;
	name: string | null;
	type: ConnectedAccountProviders;
	friend_sync: boolean;
	integrations: Array<ConnectedAccountIntegrationResponse> | null;
	show_activity: boolean;
	two_way_link: boolean;
	verified: boolean;
	visibility: ConnectedAccountVisibility;
	revoked: boolean | null;
}


export type ConnectedAccountVisibility = number;

export interface CreateEntitlementRequestData {
	sku_id: SnowflakeType;
	owner_id: SnowflakeType;
	owner_type: EntitlementOwnerTypes;
}


export interface CreateForumThreadRequest {
	name: string;
	auto_archive_duration: null | ThreadAutoArchiveDuration;
	rate_limit_per_user: number | null;
	applied_tags: Array<SnowflakeType> | null;
	message: BaseCreateMessageCreateRequest;
}


export interface CreateGroupDMInviteRequest {
	max_age: number | null;
}


export interface CreateGuildChannelRequest {
	type: null | number;
	name: string;
	position: number | null;
	topic: string | null;
	bitrate: number | null;
	user_limit: number | null;
	nsfw: boolean | null;
	rate_limit_per_user: number | null;
	parent_id: null | SnowflakeType;
	permission_overwrites: Array<ChannelPermissionOverwriteRequest> | null;
	rtc_region: string | null;
	video_quality_mode: null | VideoQualityModes;
	default_auto_archive_duration: null | ThreadAutoArchiveDuration;
	default_reaction_emoji: null | UpdateDefaultReactionEmojiRequest;
	default_thread_rate_limit_per_user: number | null;
	default_sort_order: null | ThreadSortOrder;
	default_forum_layout: null | ForumLayout;
	available_tags: Array<null | CreateOrUpdateThreadTagRequest> | null;
}


export interface CreateGuildInviteRequest {
	max_age: number | null;
	temporary: boolean | null;
	max_uses: number | null;
	unique: boolean | null;
	target_user_id: null | SnowflakeType;
	target_application_id: null | SnowflakeType;
	target_type: null | number;
}


export interface CreateGuildRequestChannelItem {
	type: null | number;
	name: string;
	position: number | null;
	topic: string | null;
	bitrate: number | null;
	user_limit: number | null;
	nsfw: boolean | null;
	rate_limit_per_user: number | null;
	parent_id: null | SnowflakeType;
	permission_overwrites: Array<ChannelPermissionOverwriteRequest> | null;
	rtc_region: string | null;
	video_quality_mode: null | VideoQualityModes;
	default_auto_archive_duration: null | ThreadAutoArchiveDuration;
	default_reaction_emoji: null | UpdateDefaultReactionEmojiRequest;
	default_thread_rate_limit_per_user: number | null;
	default_sort_order: null | ThreadSortOrder;
	default_forum_layout: null | ForumLayout;
	id: null | SnowflakeType;
	available_tags: Array<CreateOrUpdateThreadTagRequest> | null;
}


export interface CreateGuildRequestRoleItem {
	id: number;
	name: string | null;
	permissions: number | null;
	color: number | null;
	hoist: boolean | null;
	mentionable: boolean | null;
	unicode_emoji: string | null;
}


export interface CreateMessageInteractionCallbackRequest {
	type: number;
	data: null | IncomingWebhookInteractionRequest;
}


export interface CreateMessageInteractionCallbackResponse {
	type: number;
	message: MessageResponse;
}


export interface CreateOrUpdateThreadTagRequest {
	name: string;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
	moderated: boolean | null;
}


export interface CreatePrivateChannelRequest {
	recipient_id: null | SnowflakeType;
	access_tokens: Array<string> | null;
	nicks: {
		[key: string]: string | null;
	} | null;
}


export interface CreateTextThreadWithMessageRequest {
	name: string;
	auto_archive_duration: null | ThreadAutoArchiveDuration;
	rate_limit_per_user: number | null;
}


export interface CreateTextThreadWithoutMessageRequest {
	name: string;
	auto_archive_duration: null | ThreadAutoArchiveDuration;
	rate_limit_per_user: number | null;
	type: null | number;
	invitable: boolean | null;
}


export interface CreatedThreadResponse {
	id: SnowflakeType;
	type: number;
	last_message_id: null | SnowflakeType;
	flags: number;
	last_pin_timestamp: string | null;
	guild_id: SnowflakeType;
	name: string;
	parent_id: null | SnowflakeType;
	rate_limit_per_user: number | null;
	bitrate: number | null;
	user_limit: number | null;
	rtc_region: string | null;
	video_quality_mode: null | VideoQualityModes;
	permissions: string | null;
	owner_id: SnowflakeType;
	thread_metadata: null | ThreadMetadataResponse;
	message_count: number;
	member_count: number;
	total_message_sent: number;
	applied_tags: Array<SnowflakeType> | null;
	member: null | ThreadMemberResponse;
}


export interface DefaultKeywordListTriggerMetadata {
	allow_list: Array<string> | null;
	presets: Array<AutomodKeywordPresetType> | null;
}


export interface DefaultKeywordListTriggerMetadataResponse {
	allow_list: Array<string>;
	presets: Array<AutomodKeywordPresetType>;
}


export interface DefaultKeywordListUpsertRequest {
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction> | null;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_type: number;
	trigger_metadata: DefaultKeywordListTriggerMetadata;
}


export interface DefaultKeywordListUpsertRequestPartial {
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction> | null;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_type: number;
	trigger_metadata: DefaultKeywordListTriggerMetadata;
}


export interface DefaultKeywordRuleResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	creator_id: SnowflakeType;
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse>;
	trigger_type: number;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_metadata: DefaultKeywordListTriggerMetadataResponse;
}


export interface DefaultReactionEmojiResponse {
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
}


export interface DiscordIntegrationResponse {
	type: string;
	name: string | null;
	account: null | AccountResponse;
	enabled: boolean | null;
	id: SnowflakeType;
	application: IntegrationApplicationResponse;
	scopes: Array<string>;
	user: null | UserResponse;
}


export interface EmbeddedActivityInstance {
	application_id: SnowflakeType;
	instance_id: string;
	launch_id: string;
	location: GuildChannelLocation | PrivateChannelLocation | null;
	users: Array<SnowflakeType>;
}


export interface EmojiResponse {
	id: SnowflakeType;
	name: string;
	user: null | UserResponse;
	roles: Array<SnowflakeType>;
	require_colons: boolean;
	managed: boolean;
	animated: boolean;
	available: boolean;
}


export type EntitlementOwnerTypes = number;

export interface EntitlementResponse {
	id: SnowflakeType;
	sku_id: SnowflakeType;
	application_id: SnowflakeType;
	user_id: SnowflakeType;
	guild_id: null | SnowflakeType;
	deleted: boolean;
	starts_at: string | null;
	ends_at: string | null;
	type: EntitlementTypes;
	fulfilled_at: string | null;
	fulfillment_status: null | EntitlementTenantFulfillmentStatusResponse;
	consumed: boolean | null;
}


export type EntitlementTenantFulfillmentStatusResponse = number;

export type EntitlementTypes = number;

export interface EntityMetadataExternal {
	location: string;
}


export interface EntityMetadataExternalResponse {
	location: string;
}


export interface EntityMetadataStageInstance {
}


export interface EntityMetadataStageInstanceResponse {
}


export interface EntityMetadataVoice {
}


export interface EntityMetadataVoiceResponse {
}


export interface ExternalConnectionIntegrationResponse {
	type: string;
	name: string | null;
	account: null | AccountResponse;
	enabled: boolean | null;
	id: string;
	user: UserResponse;
	revoked: boolean | null;
	expire_behavior: null | IntegrationExpireBehaviorTypes;
	expire_grace_period: null | IntegrationExpireGracePeriodTypes;
	subscriber_count: number | null;
	synced_at: string | null;
	role_id: null | SnowflakeType;
	syncing: boolean | null;
	enable_emoticons: boolean | null;
}


export interface ExternalScheduledEventCreateRequest {
	name: string;
	description: string | null;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	privacy_level: GuildScheduledEventPrivacyLevels;
	entity_type: number;
	channel_id: null | SnowflakeType;
	entity_metadata: EntityMetadataExternal;
}


export interface ExternalScheduledEventPatchRequestPartial {
	status: null | GuildScheduledEventStatuses;
	name: string;
	description: string | null;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	entity_type: null | number;
	privacy_level: GuildScheduledEventPrivacyLevels;
	channel_id: null | SnowflakeType;
	entity_metadata: EntityMetadataExternal;
}


export interface ExternalScheduledEventResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	name: string;
	description: string | null;
	channel_id: null | SnowflakeType;
	creator_id: null | SnowflakeType;
	creator: null | UserResponse;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	status: GuildScheduledEventStatuses;
	entity_type: number;
	entity_id: null | SnowflakeType;
	user_count: number | null;
	privacy_level: GuildScheduledEventPrivacyLevels;
	user_rsvp: null | ScheduledEventUserResponse;
	entity_metadata: EntityMetadataExternalResponse;
}


export interface FlagToChannelAction {
	type: number;
	metadata: FlagToChannelActionMetadata;
}


export interface FlagToChannelActionMetadata {
	channel_id: SnowflakeType;
}


export interface FlagToChannelActionMetadataResponse {
	channel_id: SnowflakeType;
}


export interface FlagToChannelActionResponse {
	type: number;
	metadata: FlagToChannelActionMetadataResponse;
}


export type ForumLayout = number;

export interface ForumTagResponse {
	id: SnowflakeType;
	name: string;
	moderated: boolean;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
}


export interface FriendInviteResponse {
	type: null | number;
	code: string;
	inviter: null | UserResponse;
	max_age: number | null;
	created_at: string | null;
	expires_at: string | null;
	friends_count: number | null;
	channel: null | InviteChannelResponse;
	is_contact: boolean | null;
	uses: number | null;
	max_uses: number | null;
	flags: number | null;
}


export interface GatewayBotResponse {
	url: string;
	session_start_limit: GatewayBotSessionStartLimitResponse;
	shards: number;
}


export interface GatewayBotSessionStartLimitResponse {
	max_concurrency: number;
	remaining: number;
	reset_after: number;
	total: number;
}


export interface GatewayResponse {
	url: string;
}


export interface GithubAuthor {
	username: string | null;
	name: string;
}


export interface GithubCheckApp {
	name: string;
}


export interface GithubCheckPullRequest {
	number: number;
}


export interface GithubCheckRun {
	conclusion: string | null;
	name: string;
	html_url: string;
	check_suite: GithubCheckSuite;
	details_url: string | null;
	output: null | GithubCheckRunOutput;
	pull_requests: Array<GithubCheckPullRequest> | null;
}


export interface GithubCheckRunOutput {
	title: string | null;
	summary: string | null;
}


export interface GithubCheckSuite {
	conclusion: string | null;
	head_branch: string | null;
	head_sha: string;
	pull_requests: Array<GithubCheckPullRequest> | null;
	app: GithubCheckApp;
}


export interface GithubComment {
	id: number;
	html_url: string;
	user: GithubUser;
	commit_id: string | null;
	body: string;
}


export interface GithubCommit {
	id: string;
	url: string;
	message: string;
	author: GithubAuthor;
}


export interface GithubDiscussion {
	title: string;
	number: number;
	html_url: string;
	answer_html_url: string | null;
	body: string | null;
	user: GithubUser;
}


export interface GithubIssue {
	id: number;
	number: number;
	html_url: string;
	user: GithubUser;
	title: string;
	body: string | null;
	pull_request: unknown;
}


export interface GithubRelease {
	id: number;
	tag_name: string;
	html_url: string;
	author: GithubUser;
}


export interface GithubRepository {
	id: number;
	html_url: string;
	name: string;
	full_name: string;
}


export interface GithubReview {
	user: GithubUser;
	body: string | null;
	html_url: string;
	state: string;
}


export interface GithubUser {
	id: number;
	login: string;
	html_url: string;
	avatar_url: string;
}


export interface GithubWebhook {
	action: string | null;
	ref: string | null;
	ref_type: string | null;
	comment: null | GithubComment;
	issue: null | GithubIssue;
	pull_request: null | GithubIssue;
	repository: null | GithubRepository;
	forkee: null | GithubRepository;
	sender: GithubUser;
	member: null | GithubUser;
	release: null | GithubRelease;
	head_commit: null | GithubCommit;
	commits: Array<GithubCommit> | null;
	forced: boolean | null;
	compare: string | null;
	review: null | GithubReview;
	check_run: null | GithubCheckRun;
	check_suite: null | GithubCheckSuite;
	discussion: null | GithubDiscussion;
	answer: null | GithubComment;
}


export interface GroupDMInviteResponse {
	type: null | number;
	code: string;
	inviter: null | UserResponse;
	max_age: number | null;
	created_at: string | null;
	expires_at: string | null;
	channel: null | InviteChannelResponse;
	approximate_member_count: number | null;
}


export interface GuildAuditLogResponse {
	audit_log_entries: Array<AuditLogEntryResponse>;
	users: Array<UserResponse>;
	integrations: Array<PartialDiscordIntegrationResponse | PartialExternalConnectionIntegrationResponse | PartialGuildSubscriptionIntegrationResponse>;
	webhooks: Array<ApplicationIncomingWebhookResponse | ChannelFollowerWebhookResponse | GuildIncomingWebhookResponse>;
	guild_scheduled_events: Array<ExternalScheduledEventResponse | StageScheduledEventResponse | VoiceScheduledEventResponse>;
	threads: Array<ThreadResponse>;
	application_commands: Array<ApplicationCommandResponse>;
	auto_moderation_rules: Array<DefaultKeywordRuleResponse | KeywordRuleResponse | MLSpamRuleResponse | MentionSpamRuleResponse | SpamLinkRuleResponse | null>;
}


export interface GuildBanResponse {
	user: UserResponse;
	reason: string | null;
}


export interface GuildChannelLocation {
	id: string;
	kind: string;
	channel_id: SnowflakeType;
	guild_id: SnowflakeType;
}


export interface GuildChannelResponse {
	id: SnowflakeType;
	type: number;
	last_message_id: null | SnowflakeType;
	flags: number;
	last_pin_timestamp: string | null;
	guild_id: SnowflakeType;
	name: string;
	parent_id: null | SnowflakeType;
	rate_limit_per_user: number | null;
	bitrate: number | null;
	user_limit: number | null;
	rtc_region: string | null;
	video_quality_mode: null | VideoQualityModes;
	permissions: string | null;
	topic: string | null;
	default_auto_archive_duration: null | ThreadAutoArchiveDuration;
	default_thread_rate_limit_per_user: number | null;
	position: number;
	permission_overwrites: Array<ChannelPermissionOverwriteResponse> | null;
	nsfw: boolean | null;
	available_tags: Array<ForumTagResponse> | null;
	default_reaction_emoji: null | DefaultReactionEmojiResponse;
	default_sort_order: null | ThreadSortOrder;
	default_forum_layout: null | ForumLayout;
	hd_streaming_until: string | null;
	hd_streaming_buyer_id: null | SnowflakeType;
}


export interface GuildCreateRequest {
	description: string | null;
	name: string;
	region: string | null;
	icon: string | null;
	verification_level: null | VerificationLevels;
	default_message_notifications: null | UserNotificationSettings;
	explicit_content_filter: null | GuildExplicitContentFilterTypes;
	preferred_locale: null | AvailableLocalesEnum;
	afk_timeout: null | AfkTimeouts;
	roles: Array<CreateGuildRequestRoleItem> | null;
	channels: Array<CreateGuildRequestChannelItem> | null;
	afk_channel_id: null | SnowflakeType;
	system_channel_id: null | SnowflakeType;
	system_channel_flags: number | null;
}


export type GuildExplicitContentFilterTypes = number;

export enum GuildFeatures {
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
	MoreStickers = "MORE_STICKERS",
	News = "NEWS",
	Partnered = "PARTNERED",
	PreviewEnabled = "PREVIEW_ENABLED",
	RaidAlertsDisabled = "RAID_ALERTS_DISABLED",
	RoleIcons = "ROLE_ICONS",
	RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
	RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",
	TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
	VanityUrl = "VANITY_URL",
	Verified = "VERIFIED",
	VipRegions = "VIP_REGIONS",
	WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

export interface GuildHomeSettingsResponse {
	guild_id: SnowflakeType;
	enabled: boolean;
	welcome_message: null | WelcomeMessageResponse;
	new_member_actions: Array<null | NewMemberActionResponse> | null;
	resource_channels: Array<null | ResourceChannelResponse> | null;
}


export interface GuildIncomingWebhookResponse {
	application_id: null | SnowflakeType;
	avatar: string | null;
	channel_id: null | SnowflakeType;
	guild_id: null | SnowflakeType;
	id: SnowflakeType;
	name: string;
	type: number;
	user: null | UserResponse;
	token: string | null;
	url: string | null;
}


export interface GuildInviteResponse {
	type: null | number;
	code: string;
	inviter: null | UserResponse;
	max_age: number | null;
	created_at: string | null;
	expires_at: string | null;
	is_contact: boolean | null;
	flags: number | null;
	guild: null | InviteGuildResponse;
	guild_id: null | SnowflakeType;
	channel: null | InviteChannelResponse;
	stage_instance: null | InviteStageInstanceResponse;
	target_type: null | InviteTargetTypes;
	target_user: null | UserResponse;
	target_application: null | InviteApplicationResponse;
	guild_scheduled_event: null | ScheduledEventResponse;
	uses: number | null;
	max_uses: number | null;
	temporary: boolean | null;
	approximate_member_count: number | null;
	approximate_presence_count: number | null;
	is_nickname_changeable: boolean | null;
}


export type GuildMFALevel = number;

export interface GuildMFALevelResponse {
	level: GuildMFALevel;
}


export interface GuildMemberResponse {
	avatar: string | null;
	avatar_decoration_data: null | UserAvatarDecorationResponse;
	banner: string | null;
	communication_disabled_until: string | null;
	flags: number;
	joined_at: string;
	nick: string | null;
	pending: boolean;
	premium_since: string | null;
	roles: Array<SnowflakeType>;
	user: UserResponse;
	mute: boolean;
	deaf: boolean;
}


export type GuildNSFWContentLevel = number;

export type GuildOnboardingMode = number;

export interface GuildOnboardingResponse {
	guild_id: SnowflakeType;
	prompts: Array<OnboardingPromptResponse>;
	default_channel_ids: Array<SnowflakeType>;
	enabled: boolean;
}


export interface GuildPatchRequestPartial {
	name: string;
	description: string | null;
	region: string | null;
	icon: string | null;
	verification_level: null | VerificationLevels;
	default_message_notifications: null | UserNotificationSettings;
	explicit_content_filter: null | GuildExplicitContentFilterTypes;
	preferred_locale: null | AvailableLocalesEnum;
	afk_timeout: null | AfkTimeouts;
	afk_channel_id: null | SnowflakeType;
	system_channel_id: null | SnowflakeType;
	owner_id: SnowflakeType;
	splash: string | null;
	banner: string | null;
	system_channel_flags: number | null;
	features: Array<string | null> | null;
	discovery_splash: string | null;
	home_header: string | null;
	rules_channel_id: null | SnowflakeType;
	safety_alerts_channel_id: null | SnowflakeType;
	public_updates_channel_id: null | SnowflakeType;
	premium_progress_bar_enabled: boolean | null;
}


export interface GuildPreviewResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	description: string | null;
	home_header: string | null;
	splash: string | null;
	discovery_splash: string | null;
	features: Array<GuildFeatures>;
	approximate_member_count: number;
	approximate_presence_count: number;
	emojis: Array<EmojiResponse>;
	stickers: Array<GuildStickerResponse>;
}


export interface GuildProductPurchaseResponse {
	listing_id: SnowflakeType;
	product_name: string;
}


export interface GuildPruneResponse {
	pruned: number | null;
}


export interface GuildResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	description: string | null;
	home_header: string | null;
	splash: string | null;
	discovery_splash: string | null;
	features: Array<GuildFeatures>;
	banner: string | null;
	owner_id: SnowflakeType;
	application_id: null | SnowflakeType;
	region: string;
	afk_channel_id: null | SnowflakeType;
	afk_timeout: AfkTimeouts;
	system_channel_id: null | SnowflakeType;
	system_channel_flags: number;
	widget_enabled: boolean;
	widget_channel_id: null | SnowflakeType;
	verification_level: VerificationLevels;
	roles: Array<GuildRoleResponse>;
	default_message_notifications: UserNotificationSettings;
	mfa_level: GuildMFALevel;
	explicit_content_filter: GuildExplicitContentFilterTypes;
	max_presences: number | null;
	max_members: number | null;
	max_stage_video_channel_users: number | null;
	max_video_channel_users: number | null;
	vanity_url_code: string | null;
	premium_tier: PremiumGuildTiers;
	premium_subscription_count: number;
	preferred_locale: AvailableLocalesEnum;
	rules_channel_id: null | SnowflakeType;
	safety_alerts_channel_id: null | SnowflakeType;
	public_updates_channel_id: null | SnowflakeType;
	premium_progress_bar_enabled: boolean;
	nsfw: boolean;
	nsfw_level: GuildNSFWContentLevel;
	emojis: Array<EmojiResponse>;
	stickers: Array<GuildStickerResponse>;
}


export interface GuildRoleResponse {
	id: SnowflakeType;
	name: string;
	description: string | null;
	permissions: string;
	position: number;
	color: number;
	hoist: boolean;
	managed: boolean;
	mentionable: boolean;
	icon: string | null;
	unicode_emoji: string | null;
	tags: null | GuildRoleTagsResponse;
}


export interface GuildRoleTagsResponse {
	premium_subscriber: null;
	bot_id: null | SnowflakeType;
	integration_id: null | SnowflakeType;
	subscription_listing_id: null | SnowflakeType;
	available_for_purchase: null;
	guild_connections: null;
}


export type GuildScheduledEventEntityTypes = number;

export type GuildScheduledEventPrivacyLevels = number;

export type GuildScheduledEventStatuses = number;

export interface GuildStickerResponse {
	id: SnowflakeType;
	name: string;
	tags: string;
	type: number;
	format_type: null | StickerFormatTypes;
	description: string | null;
	available: boolean;
	guild_id: SnowflakeType;
	user: null | UserResponse;
}


export interface GuildSubscriptionIntegrationResponse {
	type: string;
	name: string | null;
	account: null | AccountResponse;
	enabled: boolean | null;
	id: SnowflakeType;
}


export interface GuildTemplateChannelResponse {
	id: number | null;
	type: number;
	name: string | null;
	position: number | null;
	topic: string | null;
	bitrate: number;
	user_limit: number;
	nsfw: boolean;
	rate_limit_per_user: number;
	parent_id: null | SnowflakeType;
	default_auto_archive_duration: null | ThreadAutoArchiveDuration;
	permission_overwrites: Array<null | ChannelPermissionOverwriteResponse>;
	available_tags: Array<GuildTemplateChannelTags> | null;
	template: string;
	default_reaction_emoji: null | DefaultReactionEmojiResponse;
	default_thread_rate_limit_per_user: number | null;
	default_sort_order: null | ThreadSortOrder;
	default_forum_layout: null | ForumLayout;
	icon_emoji: null | IconEmojiResponse;
	theme_color: number | null;
}


export interface GuildTemplateChannelTags {
	name: string;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
	moderated: boolean | null;
}


export interface GuildTemplateResponse {
	code: string;
	name: string;
	description: string | null;
	usage_count: number;
	creator_id: SnowflakeType;
	creator: null | UserResponse;
	created_at: string;
	updated_at: string;
	source_guild_id: SnowflakeType;
	serialized_source_guild: GuildTemplateSnapshotResponse;
	is_dirty: boolean | null;
}


export interface GuildTemplateRoleResponse {
	id: number;
	name: string;
	permissions: string;
	color: number;
	hoist: boolean;
	mentionable: boolean;
	icon: string | null;
	unicode_emoji: string | null;
}


export interface GuildTemplateSnapshotResponse {
	name: string;
	description: string | null;
	region: string | null;
	verification_level: VerificationLevels;
	default_message_notifications: UserNotificationSettings;
	explicit_content_filter: GuildExplicitContentFilterTypes;
	preferred_locale: AvailableLocalesEnum;
	afk_channel_id: null | SnowflakeType;
	afk_timeout: AfkTimeouts;
	system_channel_id: null | SnowflakeType;
	system_channel_flags: number;
	roles: Array<GuildTemplateRoleResponse>;
	channels: Array<GuildTemplateChannelResponse>;
}


export interface GuildWelcomeChannel {
	channel_id: SnowflakeType;
	description: string;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
}


export interface GuildWelcomeScreenChannelResponse {
	channel_id: SnowflakeType;
	description: string;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
}


export interface GuildWelcomeScreenResponse {
	description: string | null;
	welcome_channels: Array<GuildWelcomeScreenChannelResponse>;
}


export interface GuildWithCountsResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	description: string | null;
	home_header: string | null;
	splash: string | null;
	discovery_splash: string | null;
	features: Array<GuildFeatures>;
	banner: string | null;
	owner_id: SnowflakeType;
	application_id: null | SnowflakeType;
	region: string;
	afk_channel_id: null | SnowflakeType;
	afk_timeout: AfkTimeouts;
	system_channel_id: null | SnowflakeType;
	system_channel_flags: number;
	widget_enabled: boolean;
	widget_channel_id: null | SnowflakeType;
	verification_level: VerificationLevels;
	roles: Array<GuildRoleResponse>;
	default_message_notifications: UserNotificationSettings;
	mfa_level: GuildMFALevel;
	explicit_content_filter: GuildExplicitContentFilterTypes;
	max_presences: number | null;
	max_members: number | null;
	max_stage_video_channel_users: number | null;
	max_video_channel_users: number | null;
	vanity_url_code: string | null;
	premium_tier: PremiumGuildTiers;
	premium_subscription_count: number;
	preferred_locale: AvailableLocalesEnum;
	rules_channel_id: null | SnowflakeType;
	safety_alerts_channel_id: null | SnowflakeType;
	public_updates_channel_id: null | SnowflakeType;
	premium_progress_bar_enabled: boolean;
	nsfw: boolean;
	nsfw_level: GuildNSFWContentLevel;
	emojis: Array<EmojiResponse>;
	stickers: Array<GuildStickerResponse>;
	approximate_member_count: number | null;
	approximate_presence_count: number | null;
}


export interface IconEmojiResponse {
}


export interface IncomingWebhookInteractionRequest {
	content: string | null;
	embeds: Array<RichEmbed> | null;
	allowed_mentions: null | MessageAllowedMentionsRequest;
	components: Array<ActionRowComponentForMessageRequest> | null;
	attachments: Array<MessageAttachmentRequest> | null;
	poll: null | PollCreateRequest;
	tts: boolean | null;
	flags: number | null;
}


export interface IncomingWebhookRequestPartial {
	content: string | null;
	embeds: Array<RichEmbed> | null;
	allowed_mentions: null | MessageAllowedMentionsRequest;
	components: Array<ActionRowComponentForMessageRequest> | null;
	attachments: Array<MessageAttachmentRequest> | null;
	poll: null | PollCreateRequest;
	tts: boolean | null;
	flags: number | null;
	username: string | null;
	avatar_url: string | null;
	thread_name: string | null;
	applied_tags: Array<SnowflakeType> | null;
}


export interface IncomingWebhookUpdateForInteractionCallbackRequestPartial {
	content: string | null;
	embeds: Array<RichEmbed> | null;
	allowed_mentions: null | MessageAllowedMentionsRequest;
	components: Array<ActionRowComponentForMessageRequest> | null;
	attachments: Array<MessageAttachmentRequest> | null;
	flags: number | null;
}


export interface IncomingWebhookUpdateRequestPartial {
	content: string | null;
	embeds: Array<RichEmbed> | null;
	allowed_mentions: null | MessageAllowedMentionsRequest;
	components: Array<ActionRowComponentForMessageRequest> | null;
	attachments: Array<MessageAttachmentRequest> | null;
	poll: null | PollCreateRequest;
	flags: number | null;
}


export type Int53Type = bigint;

export interface IntegrationApplicationResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	description: string;
	type: null | ApplicationTypes;
	cover_image: string | null;
	primary_sku_id: null | SnowflakeType;
	bot: null | UserResponse;
}


export type IntegrationExpireBehaviorTypes = number;

export type IntegrationExpireGracePeriodTypes = number;

export enum IntegrationTypes {
	Discord = "discord",
	Twitch = "twitch",
	Youtube = "youtube",
	GuildSubscription = "guild_subscription",
}

export interface InteractionApplicationCommandAutocompleteCallbackIntegerData {
	choices: Array<null | ApplicationCommandOptionIntegerChoice> | null;
}


export interface InteractionApplicationCommandAutocompleteCallbackNumberData {
	choices: Array<null | ApplicationCommandOptionNumberChoice> | null;
}


export interface InteractionApplicationCommandAutocompleteCallbackStringData {
	choices: Array<null | ApplicationCommandOptionStringChoice> | null;
}


export interface InteractionCallbackResponse {
	interaction: InteractionResponse;
	resource: CreateMessageInteractionCallbackResponse | LaunchActivityInteractionCallbackResponse | UpdateMessageInteractionCallbackResponse | null;
}


export type InteractionCallbackTypes = number;

export type InteractionContextType = number;

export interface InteractionResponse {
	id: SnowflakeType;
	type: InteractionTypes;
	response_message_id: null | SnowflakeType;
	response_message_loading: boolean | null;
	response_message_ephemeral: boolean | null;
	channel_id: null | SnowflakeType;
	guild_id: null | SnowflakeType;
}


export type InteractionTypes = number;

export interface InviteApplicationResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	description: string;
	type: null | ApplicationTypes;
	cover_image: string | null;
	primary_sku_id: null | SnowflakeType;
	bot: null | UserResponse;
	slug: string | null;
	guild_id: null | SnowflakeType;
	rpc_origins: Array<string | null> | null;
	bot_public: boolean | null;
	bot_require_code_grant: boolean | null;
	terms_of_service_url: string | null;
	privacy_policy_url: string | null;
	custom_install_url: string | null;
	install_params: null | ApplicationOAuth2InstallParamsResponse;
	integration_types_config: {
		[key: string]: ApplicationIntegrationTypeConfigurationResponse;
	} | null;
	verify_key: string;
	flags: number;
	max_participants: number | null;
	tags: Array<string> | null;
}


export interface InviteChannelRecipientResponse {
	username: string;
}


export interface InviteChannelResponse {
	id: SnowflakeType;
	type: ChannelTypes;
	name: string | null;
	icon: string | null;
	recipients: Array<InviteChannelRecipientResponse> | null;
}


export interface InviteGuildResponse {
	id: SnowflakeType;
	name: string;
	splash: string | null;
	banner: string | null;
	description: string | null;
	icon: string | null;
	features: Array<GuildFeatures>;
	verification_level: null | VerificationLevels;
	vanity_url_code: string | null;
	nsfw_level: null | GuildNSFWContentLevel;
	nsfw: boolean | null;
	premium_subscription_count: number | null;
}


export interface InviteStageInstanceResponse {
	topic: string;
	participant_count: number | null;
	speaker_count: number | null;
	members: Array<GuildMemberResponse> | null;
}


export type InviteTargetTypes = number;

export type InviteTypes = number;

export interface KeywordRuleResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	creator_id: SnowflakeType;
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse>;
	trigger_type: number;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_metadata: KeywordTriggerMetadataResponse;
}


export interface KeywordTriggerMetadata {
	keyword_filter: Array<string> | null;
	regex_patterns: Array<string> | null;
	allow_list: Array<string> | null;
}


export interface KeywordTriggerMetadataResponse {
	keyword_filter: Array<string>;
	regex_patterns: Array<string>;
	allow_list: Array<string>;
}


export interface KeywordUpsertRequest {
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction> | null;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_type: number;
	trigger_metadata: null | KeywordTriggerMetadata;
}


export interface KeywordUpsertRequestPartial {
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction> | null;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_type: number;
	trigger_metadata: null | KeywordTriggerMetadata;
}


export interface LaunchActivityInteractionCallbackRequest {
	type: number;
}


export interface LaunchActivityInteractionCallbackResponse {
	type: number;
}


export interface ListApplicationEmojisResponse {
	items: Array<EmojiResponse>;
}


export interface ListGuildSoundboardSoundsResponse {
	items: Array<SoundboardSoundResponse>;
}


export interface MLSpamRuleResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	creator_id: SnowflakeType;
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse>;
	trigger_type: number;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_metadata: MLSpamTriggerMetadataResponse;
}


export interface MLSpamTriggerMetadata {
}


export interface MLSpamTriggerMetadataResponse {
}


export interface MLSpamUpsertRequest {
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction> | null;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_type: number;
	trigger_metadata: null | MLSpamTriggerMetadata;
}


export interface MLSpamUpsertRequestPartial {
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction> | null;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_type: number;
	trigger_metadata: null | MLSpamTriggerMetadata;
}


export interface MentionSpamRuleResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	creator_id: SnowflakeType;
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse>;
	trigger_type: number;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_metadata: MentionSpamTriggerMetadataResponse;
}


export interface MentionSpamTriggerMetadata {
	mention_total_limit: number;
	mention_raid_protection_enabled: boolean | null;
}


export interface MentionSpamTriggerMetadataResponse {
	mention_total_limit: number;
	mention_raid_protection_enabled: boolean | null;
}


export interface MentionSpamUpsertRequest {
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction> | null;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_type: number;
	trigger_metadata: null | MentionSpamTriggerMetadata;
}


export interface MentionSpamUpsertRequestPartial {
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageAction | FlagToChannelAction | QuarantineUserAction | UserCommunicationDisabledAction> | null;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_type: number;
	trigger_metadata: null | MentionSpamTriggerMetadata;
}


export interface MentionableSelectComponentForMessageRequest {
	type: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	default_values: Array<RoleSelectDefaultValue | UserSelectDefaultValue> | null;
}


export interface MentionableSelectComponentResponse {
	type: number;
	id: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	default_values: Array<RoleSelectDefaultValueResponse | UserSelectDefaultValueResponse> | null;
}


export interface MessageActivityResponse {
}


export interface MessageAllowedMentionsRequest {
	parse: Array<null | AllowedMentionTypes> | null;
	users: Array<null | SnowflakeType> | null;
	roles: Array<null | SnowflakeType> | null;
	replied_user: boolean | null;
}


export interface MessageAttachmentRequest {
	id: SnowflakeType;
	filename: string | null;
	description: string | null;
	duration_secs: number | null;
	waveform: string | null;
	title: string | null;
	is_remix: boolean | null;
}


export interface MessageAttachmentResponse {
	id: SnowflakeType;
	filename: string;
	size: number;
	url: string;
	proxy_url: string;
	width: number | null;
	height: number | null;
	duration_secs: number | null;
	waveform: string | null;
	description: string | null;
	content_type: string | null;
	ephemeral: boolean | null;
	title: string | null;
	application: null | ApplicationResponse;
	clip_created_at: string | null;
	clip_participants: Array<UserResponse> | null;
}


export interface MessageCallResponse {
	ended_timestamp: string | null;
	participants: Array<SnowflakeType>;
}


export interface MessageComponentInteractionMetadataResponse {
	id: SnowflakeType;
	type: number;
	user: null | UserResponse;
	authorizing_integration_owners: {
			[key: string]: SnowflakeType;
		};
	original_response_message_id: null | SnowflakeType;
	interacted_message_id: SnowflakeType;
}


export type MessageComponentTypes = number;

export interface MessageCreateRequest {
	content: string | null;
	embeds: Array<RichEmbed> | null;
	allowed_mentions: null | MessageAllowedMentionsRequest;
	sticker_ids: Array<SnowflakeType> | null;
	components: Array<ActionRowComponentForMessageRequest> | null;
	flags: number | null;
	attachments: Array<MessageAttachmentRequest> | null;
	poll: null | PollCreateRequest;
	confetti_potion: null | ConfettiPotionCreateRequest;
	message_reference: null | MessageReferenceRequest;
	nonce: bigint | string | null;
	enforce_nonce: boolean | null;
	tts: boolean | null;
}


export interface MessageEditRequestPartial {
	content: string | null;
	embeds: Array<RichEmbed> | null;
	flags: number | null;
	allowed_mentions: null | MessageAllowedMentionsRequest;
	sticker_ids: Array<SnowflakeType> | null;
	components: Array<ActionRowComponentForMessageRequest> | null;
	attachments: Array<MessageAttachmentRequest> | null;
}


export interface MessageEmbedAuthorResponse {
	name: string;
	url: string | null;
	icon_url: string | null;
	proxy_icon_url: string | null;
}


export interface MessageEmbedFieldResponse {
	name: string;
	value: string;
	inline: boolean;
}


export interface MessageEmbedFooterResponse {
	text: string;
	icon_url: string | null;
	proxy_icon_url: string | null;
}


export interface MessageEmbedImageResponse {
	url: string | null;
	proxy_url: string | null;
	width: null | UInt32Type;
	height: null | UInt32Type;
	placeholder: string | null;
	placeholder_version: null | UInt32Type;
	flags: null | UInt32Type;
}


export interface MessageEmbedProviderResponse {
	name: string;
	url: string | null;
}


export interface MessageEmbedResponse {
	type: string;
	url: string | null;
	title: string | null;
	description: string | null;
	color: number | null;
	timestamp: string | null;
	fields: Array<MessageEmbedFieldResponse> | null;
	author: null | MessageEmbedAuthorResponse;
	provider: null | MessageEmbedProviderResponse;
	image: null | MessageEmbedImageResponse;
	thumbnail: null | MessageEmbedImageResponse;
	video: null | MessageEmbedVideoResponse;
	footer: null | MessageEmbedFooterResponse;
}


export interface MessageEmbedVideoResponse {
	url: string | null;
	proxy_url: string | null;
	width: null | UInt32Type;
	height: null | UInt32Type;
	placeholder: string | null;
	placeholder_version: null | UInt32Type;
	flags: null | UInt32Type;
}


export interface MessageInteractionResponse {
	id: SnowflakeType;
	type: InteractionTypes;
	name: string;
	user: null | UserResponse;
	name_localized: string | null;
}


export interface MessageMentionChannelResponse {
	id: SnowflakeType;
	name: string;
	type: ChannelTypes;
	guild_id: SnowflakeType;
}


export interface MessageReactionCountDetailsResponse {
	burst: number;
	normal: number;
}


export interface MessageReactionEmojiResponse {
	id: null | SnowflakeType;
	name: string | null;
	animated: boolean | null;
}


export interface MessageReactionResponse {
	emoji: MessageReactionEmojiResponse;
	count: number;
	count_details: MessageReactionCountDetailsResponse;
	burst_colors: Array<string>;
	me_burst: boolean;
	me: boolean;
}


export interface MessageReferenceRequest {
	guild_id: null | SnowflakeType;
	channel_id: null | SnowflakeType;
	message_id: SnowflakeType;
	fail_if_not_exists: boolean | null;
	type: null | MessageReferenceType;
}


export interface MessageReferenceResponse {
	type: null | MessageReferenceType;
	channel_id: SnowflakeType;
	message_id: null | SnowflakeType;
	guild_id: null | SnowflakeType;
}


export type MessageReferenceType = number;

export interface MessageResponse {
	type: MessageType;
	content: string;
	mentions: Array<UserResponse>;
	mention_roles: Array<SnowflakeType>;
	attachments: Array<MessageAttachmentResponse>;
	embeds: Array<MessageEmbedResponse>;
	timestamp: string;
	edited_timestamp: string | null;
	flags: number;
	components: Array<ActionRowComponentResponse | ButtonComponentResponse | ChannelSelectComponentResponse | MentionableSelectComponentResponse | RoleSelectComponentResponse | StringSelectComponentResponse | TextInputComponentResponse | UserSelectComponentResponse>;
	resolved: null | ResolvedObjectsResponse;
	stickers: Array<GuildStickerResponse | StandardStickerResponse> | null;
	sticker_items: Array<MessageStickerItemResponse> | null;
	id: SnowflakeType;
	channel_id: SnowflakeType;
	author: UserResponse;
	pinned: boolean;
	mention_everyone: boolean;
	tts: boolean;
	call: null | MessageCallResponse;
	activity: null | MessageActivityResponse;
	application: null | BasicApplicationResponse;
	application_id: null | SnowflakeType;
	interaction: null | MessageInteractionResponse;
	nonce: bigint | string | null;
	webhook_id: null | SnowflakeType;
	message_reference: null | MessageReferenceResponse;
	thread: null | ThreadResponse;
	mention_channels: Array<null | MessageMentionChannelResponse> | null;
	role_subscription_data: null | MessageRoleSubscriptionDataResponse;
	purchase_notification: null | PurchaseNotificationResponse;
	position: number | null;
	poll: null | PollResponse;
	interaction_metadata: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse | ModalSubmitInteractionMetadataResponse | null;
	message_snapshots: Array<MessageSnapshotResponse> | null;
	reactions: Array<MessageReactionResponse> | null;
	referenced_message: null | BasicMessageResponse;
}


export interface MessageRoleSubscriptionDataResponse {
	role_subscription_listing_id: SnowflakeType;
	tier_name: string;
	total_months_subscribed: number;
	is_renewal: boolean;
}


export interface MessageSnapshotResponse {
	message: null | MinimalContentMessageResponse;
}


export interface MessageStickerItemResponse {
	id: SnowflakeType;
	name: string;
	format_type: StickerFormatTypes;
}


export type MessageType = number;

export type MetadataItemTypes = number;

export interface MinimalContentMessageResponse {
	type: MessageType;
	content: string;
	mentions: Array<UserResponse>;
	mention_roles: Array<SnowflakeType>;
	attachments: Array<MessageAttachmentResponse>;
	embeds: Array<MessageEmbedResponse>;
	timestamp: string;
	edited_timestamp: string | null;
	flags: number;
	components: Array<ActionRowComponentResponse | ButtonComponentResponse | ChannelSelectComponentResponse | MentionableSelectComponentResponse | RoleSelectComponentResponse | StringSelectComponentResponse | TextInputComponentResponse | UserSelectComponentResponse>;
	resolved: null | ResolvedObjectsResponse;
	stickers: Array<GuildStickerResponse | StandardStickerResponse> | null;
	sticker_items: Array<MessageStickerItemResponse> | null;
}


export interface ModalInteractionCallbackRequest {
	type: number;
	data: ModalInteractionCallbackRequestData;
}


export interface ModalInteractionCallbackRequestData {
	custom_id: string;
	title: string;
	components: Array<ActionRowComponentForModalRequest>;
}


export interface ModalSubmitInteractionMetadataResponse {
	id: SnowflakeType;
	type: number;
	user: null | UserResponse;
	authorizing_integration_owners: {
			[key: string]: SnowflakeType;
		};
	original_response_message_id: null | SnowflakeType;
	triggering_interaction_metadata: ApplicationCommandInteractionMetadataResponse | MessageComponentInteractionMetadataResponse;
}


export interface MyGuildResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	banner: string | null;
	owner: boolean;
	permissions: string;
	features: Array<GuildFeatures>;
	approximate_member_count: number | null;
	approximate_presence_count: number | null;
}


export interface NewMemberActionResponse {
	channel_id: SnowflakeType;
	action_type: NewMemberActionType;
	title: string;
	description: string;
	emoji: null | SettingsEmojiResponse;
	icon: string | null;
}


export type NewMemberActionType = number;

export interface OAuth2GetAuthorizationResponse {
	application: ApplicationResponse;
	expires: string;
	scopes: Array<OAuth2Scopes>;
	user: null | UserResponse;
}


export interface OAuth2GetKeys {
	keys: Array<OAuth2Key>;
}


export interface OAuth2GetOpenIDConnectUserInfoResponse {
	sub: string;
	email: string | null;
	email_verified: boolean | null;
	preferred_username: string | null;
	nickname: string | null;
	picture: string | null;
	locale: string | null;
}


export interface OAuth2Key {
	kty: string;
	use: string;
	kid: string;
	n: string;
	e: string;
	alg: string;
}


export enum OAuth2Scopes {
	Identify = "identify",
	Email = "email",
	Connections = "connections",
	Guilds = "guilds",
	GuildsJoin = "guilds.join",
	GuildsMembersRead = "guilds.members.read",
	GdmJoin = "gdm.join",
	Bot = "bot",
	Rpc = "rpc",
	RpcNotificationsRead = "rpc.notifications.read",
	RpcVoiceRead = "rpc.voice.read",
	RpcVoiceWrite = "rpc.voice.write",
	RpcVideoRead = "rpc.video.read",
	RpcVideoWrite = "rpc.video.write",
	RpcScreenshareRead = "rpc.screenshare.read",
	RpcScreenshareWrite = "rpc.screenshare.write",
	RpcActivitiesWrite = "rpc.activities.write",
	WebhookIncoming = "webhook.incoming",
	MessagesRead = "messages.read",
	ApplicationsBuildsUpload = "applications.builds.upload",
	ApplicationsBuildsRead = "applications.builds.read",
	ApplicationsCommands = "applications.commands",
	ApplicationsCommandsPermissionsUpdate = "applications.commands.permissions.update",
	ApplicationsCommandsUpdate = "applications.commands.update",
	ApplicationsStoreUpdate = "applications.store.update",
	ApplicationsEntitlements = "applications.entitlements",
	ActivitiesRead = "activities.read",
	ActivitiesWrite = "activities.write",
	ActivitiesInvitesWrite = "activities.invites.write",
	RelationshipsRead = "relationships.read",
	Voice = "voice",
	DmChannelsRead = "dm_channels.read",
	RoleConnectionsWrite = "role_connections.write",
	Openid = "openid",
}

export interface OnboardingPromptOptionRequest {
	id: null | SnowflakeType;
	title: string;
	description: string | null;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
	emoji_animated: boolean | null;
	role_ids: Array<SnowflakeType> | null;
	channel_ids: Array<SnowflakeType> | null;
}


export interface OnboardingPromptOptionResponse {
	id: SnowflakeType;
	title: string;
	description: string;
	emoji: SettingsEmojiResponse;
	role_ids: Array<SnowflakeType>;
	channel_ids: Array<SnowflakeType>;
}


export interface OnboardingPromptResponse {
	id: SnowflakeType;
	title: string;
	options: Array<OnboardingPromptOptionResponse>;
	single_select: boolean;
	required: boolean;
	in_onboarding: boolean;
	type: OnboardingPromptType;
}


export type OnboardingPromptType = number;

export interface PartialDiscordIntegrationResponse {
	id: SnowflakeType;
	type: string;
	name: string | null;
	account: null | AccountResponse;
	application_id: SnowflakeType;
}


export interface PartialExternalConnectionIntegrationResponse {
	id: SnowflakeType;
	type: string;
	name: string | null;
	account: null | AccountResponse;
}


export interface PartialGuildSubscriptionIntegrationResponse {
	id: SnowflakeType;
	type: string;
	name: string | null;
	account: null | AccountResponse;
}


export interface PollAnswerCreateRequest {
	poll_media: PollMediaCreateRequest;
}


export interface PollAnswerDetailsResponse {
	users: Array<UserResponse> | null;
}


export interface PollAnswerResponse {
	answer_id: number;
	poll_media: PollMediaResponse;
}


export interface PollCreateRequest {
	question: PollMedia;
	answers: Array<PollAnswerCreateRequest>;
	allow_multiselect: boolean | null;
	layout_type: null | PollLayoutTypes;
	duration: number | null;
}


export interface PollEmoji {
	id: null | SnowflakeType;
	name: string | null;
	animated: boolean | null;
}


export interface PollEmojiCreateRequest {
	id: null | SnowflakeType;
	name: string | null;
	animated: boolean | null;
}


export type PollLayoutTypes = number;

export interface PollMedia {
	text: string | null;
	emoji: null | PollEmoji;
}


export interface PollMediaCreateRequest {
	text: string | null;
	emoji: null | PollEmojiCreateRequest;
}


export interface PollMediaResponse {
	text: string | null;
	emoji: null | MessageReactionEmojiResponse;
}


export interface PollResponse {
	question: PollMediaResponse;
	answers: Array<PollAnswerResponse>;
	expiry: string;
	allow_multiselect: boolean;
	layout_type: PollLayoutTypes;
	results: PollResultsResponse;
}


export interface PollResultsEntryResponse {
	id: number;
	count: number;
	me_voted: boolean | null;
}


export interface PollResultsResponse {
	answer_counts: Array<PollResultsEntryResponse> | null;
	is_finalized: boolean;
}


export interface PongInteractionCallbackRequest {
	type: number;
}


export type PremiumGuildTiers = number;

export type PremiumTypes = number;

export interface PrivateApplicationResponse {
	id: SnowflakeType;
	name: string;
	icon: string | null;
	description: string;
	type: null | ApplicationTypes;
	cover_image: string | null;
	primary_sku_id: null | SnowflakeType;
	bot: null | UserResponse;
	slug: string | null;
	guild_id: null | SnowflakeType;
	rpc_origins: Array<string | null> | null;
	bot_public: boolean | null;
	bot_require_code_grant: boolean | null;
	terms_of_service_url: string | null;
	privacy_policy_url: string | null;
	custom_install_url: string | null;
	install_params: null | ApplicationOAuth2InstallParamsResponse;
	integration_types_config: {
		[key: string]: ApplicationIntegrationTypeConfigurationResponse;
	} | null;
	verify_key: string;
	flags: number;
	max_participants: number | null;
	tags: Array<string> | null;
	redirect_uris: Array<string | null>;
	interactions_endpoint_url: string | null;
	role_connections_verification_url: string | null;
	owner: UserResponse;
	approximate_guild_count: number | null;
	approximate_user_install_count: number;
	explicit_content_filter: ApplicationExplicitContentFilterTypes;
	team: null | TeamResponse;
}


export interface PrivateChannelLocation {
	id: string;
	kind: string;
	channel_id: SnowflakeType;
}


export interface PrivateChannelRequestPartial {
	name: string | null;
	icon: string | null;
}


export interface PrivateChannelResponse {
	id: SnowflakeType;
	type: number;
	last_message_id: null | SnowflakeType;
	flags: number;
	last_pin_timestamp: string | null;
	recipients: Array<UserResponse>;
}


export interface PrivateGroupChannelResponse {
	id: SnowflakeType;
	type: number;
	last_message_id: null | SnowflakeType;
	flags: number;
	last_pin_timestamp: string | null;
	recipients: Array<UserResponse>;
	name: string | null;
	icon: string | null;
	owner_id: null | SnowflakeType;
	managed: boolean | null;
	application_id: null | SnowflakeType;
}


export interface PrivateGuildMemberResponse {
	avatar: string | null;
	avatar_decoration_data: null | UserAvatarDecorationResponse;
	banner: string | null;
	communication_disabled_until: string | null;
	flags: number;
	joined_at: string;
	nick: string | null;
	pending: boolean;
	premium_since: string | null;
	roles: Array<SnowflakeType>;
	user: UserResponse;
	mute: boolean;
	deaf: boolean;
}


export interface PurchaseNotificationResponse {
	type: PurchaseType;
	guild_product_purchase: null | GuildProductPurchaseResponse;
}


export type PurchaseType = number;

export interface QuarantineUserAction {
	type: number;
	metadata: null | QuarantineUserActionMetadata;
}


export interface QuarantineUserActionMetadata {
}


export interface QuarantineUserActionMetadataResponse {
}


export interface QuarantineUserActionResponse {
	type: number;
	metadata: QuarantineUserActionMetadataResponse;
}


export type ReactionTypes = number;

export interface ResolvedObjectsResponse {
	users: {
			[key: string]: UserResponse;
		};
	members: {
			[key: string]: GuildMemberResponse;
		};
	channels: {
			[key: string]: GuildChannelResponse | PrivateChannelResponse | PrivateGroupChannelResponse | ThreadResponse;
		};
	roles: {
			[key: string]: GuildRoleResponse;
		};
}


export interface ResourceChannelResponse {
	channel_id: SnowflakeType;
	title: string;
	emoji: null | SettingsEmojiResponse;
	icon: string | null;
	description: string;
}


export interface RichEmbed {
	type: string | null;
	url: string | null;
	title: string | null;
	color: number | null;
	timestamp: string | null;
	description: string | null;
	author: null | RichEmbedAuthor;
	image: null | RichEmbedImage;
	thumbnail: null | RichEmbedThumbnail;
	footer: null | RichEmbedFooter;
	fields: Array<RichEmbedField> | null;
	provider: null | RichEmbedProvider;
	video: null | RichEmbedVideo;
}


export interface RichEmbedAuthor {
	name: string | null;
	url: string | null;
	icon_url: string | null;
}


export interface RichEmbedField {
	name: string;
	value: string;
	inline: boolean | null;
}


export interface RichEmbedFooter {
	text: string | null;
	icon_url: string | null;
}


export interface RichEmbedImage {
	url: string | null;
	width: number | null;
	height: number | null;
	placeholder: string | null;
	placeholder_version: number | null;
	is_animated: boolean | null;
}


export interface RichEmbedProvider {
	name: string | null;
	url: string | null;
}


export interface RichEmbedThumbnail {
	url: string | null;
	width: number | null;
	height: number | null;
	placeholder: string | null;
	placeholder_version: number | null;
	is_animated: boolean | null;
}


export interface RichEmbedVideo {
	url: string | null;
	width: number | null;
	height: number | null;
	placeholder: string | null;
	placeholder_version: number | null;
	is_animated: boolean | null;
}


export interface RoleSelectComponentForMessageRequest {
	type: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	default_values: Array<RoleSelectDefaultValue> | null;
}


export interface RoleSelectComponentResponse {
	type: number;
	id: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	default_values: Array<RoleSelectDefaultValueResponse> | null;
}


export interface RoleSelectDefaultValue {
	type: string;
	id: SnowflakeType;
}


export interface RoleSelectDefaultValueResponse {
	type: string;
	id: SnowflakeType;
}


export interface ScheduledEventResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	name: string;
	description: string | null;
	channel_id: null | SnowflakeType;
	creator_id: null | SnowflakeType;
	creator: null | UserResponse;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	status: GuildScheduledEventStatuses;
	entity_type: GuildScheduledEventEntityTypes;
	entity_id: null | SnowflakeType;
	user_count: number | null;
	privacy_level: GuildScheduledEventPrivacyLevels;
	user_rsvp: null | ScheduledEventUserResponse;
}


export interface ScheduledEventUserResponse {
	guild_scheduled_event_id: SnowflakeType;
	user_id: SnowflakeType;
	user: null | UserResponse;
	member: null | GuildMemberResponse;
}


export interface SettingsEmojiResponse {
	id: null | SnowflakeType;
	name: string | null;
	animated: boolean | null;
}


export interface SlackWebhook {
	text: string | null;
	username: string | null;
	icon_url: string | null;
	attachments: Array<WebhookSlackEmbed> | null;
}


export enum SnowflakeSelectDefaultValueTypes {
	User = "user",
	Role = "role",
	Channel = "channel",
}

export type SnowflakeType = string;

export interface SoundboardCreateRequest {
	name: string;
	volume: number | null;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
	sound: string;
}


export interface SoundboardPatchRequestPartial {
	name: string;
	volume: number | null;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
}


export interface SoundboardSoundResponse {
	name: string;
	sound_id: SnowflakeType;
	volume: number;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
	guild_id: null | SnowflakeType;
	available: boolean;
	user: null | UserResponse;
}


export interface SoundboardSoundSendRequest {
	sound_id: SnowflakeType;
	source_guild_id: null | SnowflakeType;
}


export interface SpamLinkRuleResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	creator_id: SnowflakeType;
	name: string;
	event_type: AutomodEventType;
	actions: Array<BlockMessageActionResponse | FlagToChannelActionResponse | QuarantineUserActionResponse | UserCommunicationDisabledActionResponse>;
	trigger_type: number;
	enabled: boolean | null;
	exempt_roles: Array<SnowflakeType> | null;
	exempt_channels: Array<SnowflakeType> | null;
	trigger_metadata: SpamLinkTriggerMetadataResponse;
}


export interface SpamLinkTriggerMetadataResponse {
}


export interface StageInstanceResponse {
	guild_id: SnowflakeType;
	channel_id: SnowflakeType;
	topic: string;
	privacy_level: StageInstancesPrivacyLevels;
	id: SnowflakeType;
	discoverable_disabled: boolean | null;
	guild_scheduled_event_id: null | SnowflakeType;
}


export type StageInstancesPrivacyLevels = number;

export interface StageScheduledEventCreateRequest {
	name: string;
	description: string | null;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	privacy_level: GuildScheduledEventPrivacyLevels;
	entity_type: number;
	channel_id: null | SnowflakeType;
	entity_metadata: null | EntityMetadataStageInstance;
}


export interface StageScheduledEventPatchRequestPartial {
	status: null | GuildScheduledEventStatuses;
	name: string;
	description: string | null;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	entity_type: null | number;
	privacy_level: GuildScheduledEventPrivacyLevels;
	channel_id: null | SnowflakeType;
	entity_metadata: null | EntityMetadataStageInstance;
}


export interface StageScheduledEventResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	name: string;
	description: string | null;
	channel_id: null | SnowflakeType;
	creator_id: null | SnowflakeType;
	creator: null | UserResponse;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	status: GuildScheduledEventStatuses;
	entity_type: number;
	entity_id: null | SnowflakeType;
	user_count: number | null;
	privacy_level: GuildScheduledEventPrivacyLevels;
	user_rsvp: null | ScheduledEventUserResponse;
	entity_metadata: null | EntityMetadataStageInstanceResponse;
}


export interface StandardStickerResponse {
	id: SnowflakeType;
	name: string;
	tags: string;
	type: number;
	format_type: null | StickerFormatTypes;
	description: string | null;
	pack_id: SnowflakeType;
	sort_value: number;
}


export type StickerFormatTypes = number;

export interface StickerPackCollectionResponse {
	sticker_packs: Array<StickerPackResponse>;
}


export interface StickerPackResponse {
	id: SnowflakeType;
	sku_id: SnowflakeType;
	name: string;
	description: string | null;
	stickers: Array<StandardStickerResponse>;
	cover_sticker_id: null | SnowflakeType;
	banner_asset_id: null | SnowflakeType;
}


export type StickerTypes = number;

export interface StringSelectComponentForMessageRequest {
	type: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	options: Array<StringSelectOptionForMessageRequest>;
}


export interface StringSelectComponentResponse {
	type: number;
	id: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	options: Array<StringSelectOptionResponse>;
}


export interface StringSelectOptionForMessageRequest {
	label: string;
	value: string;
	description: string | null;
	default: boolean | null;
	emoji: null | ComponentEmojiForMessageRequest;
}


export interface StringSelectOptionResponse {
	label: string;
	value: string;
	description: string | null;
	emoji: null | ComponentEmojiResponse;
	default: boolean | null;
}


export interface TeamMemberResponse {
	user: UserResponse;
	team_id: SnowflakeType;
	membership_state: TeamMembershipStates;
}


export type TeamMembershipStates = number;

export interface TeamResponse {
	id: SnowflakeType;
	icon: string | null;
	name: string;
	owner_user_id: SnowflakeType;
	members: Array<TeamMemberResponse>;
}


export interface TextInputComponentForModalRequest {
	type: number;
	custom_id: string;
	style: TextInputStyleTypes;
	label: string;
	value: string | null;
	placeholder: string | null;
	required: boolean | null;
	min_length: number | null;
	max_length: number | null;
}


export interface TextInputComponentResponse {
	type: number;
	id: number;
	custom_id: string;
	style: TextInputStyleTypes;
	label: string | null;
	value: string | null;
	placeholder: string | null;
	required: boolean | null;
	min_length: number | null;
	max_length: number | null;
}


export type TextInputStyleTypes = number;

export type ThreadAutoArchiveDuration = number;

export interface ThreadMemberResponse {
	id: SnowflakeType;
	user_id: SnowflakeType;
	join_timestamp: string;
	flags: number;
	member: null | GuildMemberResponse;
}


export interface ThreadMetadataResponse {
	archived: boolean;
	archive_timestamp: string | null;
	auto_archive_duration: ThreadAutoArchiveDuration;
	locked: boolean;
	create_timestamp: string | null;
	invitable: boolean | null;
}


export interface ThreadResponse {
	id: SnowflakeType;
	type: number;
	last_message_id: null | SnowflakeType;
	flags: number;
	last_pin_timestamp: string | null;
	guild_id: SnowflakeType;
	name: string;
	parent_id: null | SnowflakeType;
	rate_limit_per_user: number | null;
	bitrate: number | null;
	user_limit: number | null;
	rtc_region: string | null;
	video_quality_mode: null | VideoQualityModes;
	permissions: string | null;
	owner_id: SnowflakeType;
	thread_metadata: null | ThreadMetadataResponse;
	message_count: number;
	member_count: number;
	total_message_sent: number;
	applied_tags: Array<SnowflakeType> | null;
	member: null | ThreadMemberResponse;
}


export type ThreadSortOrder = number;

export interface ThreadsResponse {
	threads: Array<ThreadResponse>;
	members: Array<ThreadMemberResponse>;
	has_more: boolean | null;
}


export interface TypingIndicatorResponse {
}


export type UInt32Type = bigint;

export interface UpdateDefaultReactionEmojiRequest {
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
}


export interface UpdateGuildChannelRequestPartial {
	type: null | number;
	name: string;
	position: number | null;
	topic: string | null;
	bitrate: number | null;
	user_limit: number | null;
	nsfw: boolean | null;
	rate_limit_per_user: number | null;
	parent_id: null | SnowflakeType;
	permission_overwrites: Array<ChannelPermissionOverwriteRequest> | null;
	rtc_region: string | null;
	video_quality_mode: null | VideoQualityModes;
	default_auto_archive_duration: null | ThreadAutoArchiveDuration;
	default_reaction_emoji: null | UpdateDefaultReactionEmojiRequest;
	default_thread_rate_limit_per_user: number | null;
	default_sort_order: null | ThreadSortOrder;
	default_forum_layout: null | ForumLayout;
	flags: number | null;
	available_tags: Array<UpdateThreadTagRequest> | null;
}


export interface UpdateGuildOnboardingRequest {
	prompts: Array<UpdateOnboardingPromptRequest> | null;
	enabled: boolean | null;
	default_channel_ids: Array<SnowflakeType> | null;
	mode: null | GuildOnboardingMode;
}


export interface UpdateMessageInteractionCallbackRequest {
	type: number;
	data: null | IncomingWebhookUpdateForInteractionCallbackRequestPartial;
}


export interface UpdateMessageInteractionCallbackResponse {
	type: number;
	message: MessageResponse;
}


export interface UpdateOnboardingPromptRequest {
	title: string;
	options: Array<OnboardingPromptOptionRequest>;
	single_select: boolean | null;
	required: boolean | null;
	in_onboarding: boolean | null;
	type: null | OnboardingPromptType;
	id: SnowflakeType;
}


export interface UpdateThreadRequestPartial {
	name: string | null;
	archived: boolean | null;
	locked: boolean | null;
	invitable: boolean | null;
	auto_archive_duration: null | ThreadAutoArchiveDuration;
	rate_limit_per_user: number | null;
	flags: number | null;
	applied_tags: Array<SnowflakeType> | null;
	bitrate: number | null;
	user_limit: number | null;
	rtc_region: string | null;
	video_quality_mode: null | VideoQualityModes;
}


export interface UpdateThreadTagRequest {
	name: string;
	emoji_id: null | SnowflakeType;
	emoji_name: string | null;
	moderated: boolean | null;
	id: null | SnowflakeType;
}


export interface UserAvatarDecorationResponse {
	asset: string;
	sku_id: null | SnowflakeType;
}


export interface UserCommunicationDisabledAction {
	type: number;
	metadata: UserCommunicationDisabledActionMetadata;
}


export interface UserCommunicationDisabledActionMetadata {
	duration_seconds: number | null;
}


export interface UserCommunicationDisabledActionMetadataResponse {
	duration_seconds: number;
}


export interface UserCommunicationDisabledActionResponse {
	type: number;
	metadata: UserCommunicationDisabledActionMetadataResponse;
}


export interface UserGuildOnboardingResponse {
	guild_id: SnowflakeType;
	prompts: Array<OnboardingPromptResponse>;
	default_channel_ids: Array<SnowflakeType>;
	enabled: boolean;
}


export type UserNotificationSettings = number;

export interface UserPIIResponse {
	id: SnowflakeType;
	username: string;
	avatar: string | null;
	discriminator: string;
	public_flags: number;
	flags: Int53Type;
	bot: boolean | null;
	system: boolean | null;
	banner: string | null;
	accent_color: number | null;
	global_name: string | null;
	avatar_decoration_data: null | UserAvatarDecorationResponse;
	clan: null | UserPrimaryGuildResponse;
	mfa_enabled: boolean;
	locale: AvailableLocalesEnum;
	premium_type: null | PremiumTypes;
	email: string | null;
	verified: boolean | null;
}


export interface UserPrimaryGuildResponse {
}


export interface UserResponse {
	id: SnowflakeType;
	username: string;
	avatar: string | null;
	discriminator: string;
	public_flags: number;
	flags: Int53Type;
	bot: boolean | null;
	system: boolean | null;
	banner: string | null;
	accent_color: number | null;
	global_name: string | null;
	avatar_decoration_data: null | UserAvatarDecorationResponse;
	clan: null | UserPrimaryGuildResponse;
}


export interface UserSelectComponentForMessageRequest {
	type: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	default_values: Array<UserSelectDefaultValue> | null;
}


export interface UserSelectComponentResponse {
	type: number;
	id: number;
	custom_id: string;
	placeholder: string | null;
	min_values: number | null;
	max_values: number | null;
	disabled: boolean | null;
	default_values: Array<UserSelectDefaultValueResponse> | null;
}


export interface UserSelectDefaultValue {
	type: string;
	id: SnowflakeType;
}


export interface UserSelectDefaultValueResponse {
	type: string;
	id: SnowflakeType;
}


export interface VanityURLErrorResponse {
	message: string;
	code: number;
}


export interface VanityURLResponse {
	code: string | null;
	uses: number;
	error: null | VanityURLErrorResponse;
}


export type VerificationLevels = number;

export type VideoQualityModes = number;

export interface VoiceRegionResponse {
	id: string;
	name: string;
	custom: boolean;
	deprecated: boolean;
	optimal: boolean;
}


export interface VoiceScheduledEventCreateRequest {
	name: string;
	description: string | null;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	privacy_level: GuildScheduledEventPrivacyLevels;
	entity_type: number;
	channel_id: null | SnowflakeType;
	entity_metadata: null | EntityMetadataVoice;
}


export interface VoiceScheduledEventPatchRequestPartial {
	status: null | GuildScheduledEventStatuses;
	name: string;
	description: string | null;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	entity_type: null | number;
	privacy_level: GuildScheduledEventPrivacyLevels;
	channel_id: null | SnowflakeType;
	entity_metadata: null | EntityMetadataVoice;
}


export interface VoiceScheduledEventResponse {
	id: SnowflakeType;
	guild_id: SnowflakeType;
	name: string;
	description: string | null;
	channel_id: null | SnowflakeType;
	creator_id: null | SnowflakeType;
	creator: null | UserResponse;
	image: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	status: GuildScheduledEventStatuses;
	entity_type: number;
	entity_id: null | SnowflakeType;
	user_count: number | null;
	privacy_level: GuildScheduledEventPrivacyLevels;
	user_rsvp: null | ScheduledEventUserResponse;
	entity_metadata: null | EntityMetadataVoiceResponse;
}


export interface VoiceStateResponse {
	channel_id: null | SnowflakeType;
	deaf: boolean;
	guild_id: null | SnowflakeType;
	member: null | GuildMemberResponse;
	mute: boolean;
	request_to_speak_timestamp: string | null;
	suppress: boolean;
	self_stream: boolean | null;
	self_deaf: boolean;
	self_mute: boolean;
	self_video: boolean;
	session_id: string;
	user_id: SnowflakeType;
}


export interface WebhookSlackEmbed {
	title: string | null;
	title_link: string | null;
	text: string | null;
	color: string | null;
	ts: number | null;
	pretext: string | null;
	footer: string | null;
	footer_icon: string | null;
	author_name: string | null;
	author_link: string | null;
	author_icon: string | null;
	image_url: string | null;
	thumb_url: string | null;
	fields: Array<WebhookSlackEmbedField> | null;
}


export interface WebhookSlackEmbedField {
	name: string | null;
	value: string | null;
	inline: boolean | null;
}


export interface WebhookSourceChannelResponse {
	id: SnowflakeType;
	name: string;
}


export interface WebhookSourceGuildResponse {
	id: SnowflakeType;
	icon: string | null;
	name: string;
}


export type WebhookTypes = number;

export interface WelcomeMessageResponse {
	author_ids: Array<SnowflakeType>;
	message: string;
}


export interface WelcomeScreenPatchRequestPartial {
	description: string | null;
	welcome_channels: Array<GuildWelcomeChannel> | null;
	enabled: boolean | null;
}


export interface WidgetActivity {
	name: string;
}


export interface WidgetChannel {
	id: SnowflakeType;
	name: string;
	position: number;
}


export enum WidgetImageStyles {
	Shield = "shield",
	Banner1 = "banner1",
	Banner2 = "banner2",
	Banner3 = "banner3",
	Banner4 = "banner4",
}

export interface WidgetMember {
	id: string;
	username: string;
	discriminator: WidgetUserDiscriminator;
	avatar: null;
	status: string;
	avatar_url: string;
	activity: null | WidgetActivity;
	deaf: boolean | null;
	mute: boolean | null;
	self_deaf: boolean | null;
	self_mute: boolean | null;
	suppress: boolean | null;
	channel_id: null | SnowflakeType;
}


export interface WidgetResponse {
	id: SnowflakeType;
	name: string;
	instant_invite: string | null;
	channels: Array<WidgetChannel>;
	members: Array<WidgetMember>;
	presence_count: number;
}


export interface WidgetSettingsResponse {
	enabled: boolean;
	channel_id: null | SnowflakeType;
}


export enum WidgetUserDiscriminator {
	Zeroes = "0000",
}

export interface Error {
	code: number;
	message: string;
}


export interface InnerErrors {
	_errors: Array<Error>;
}


export type ErrorDetails = {
		[key: string]: ErrorDetails;
	} | InnerErrors;
export type ErrorResponse = Error & {
	errors: ErrorDetails;
	};

export type ClientErrorResponse = ErrorResponse;
