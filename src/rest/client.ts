// auto-generated file from discord's OpenAPI spec. do not modify.
import { BaseClient } from "./base_client.js";
import { Endpoint } from "./endpoints.js";
import * as ty from "./types.js";
export class RestClient extends BaseClient {
	public async getMyOauth2Application(
		extra: RequestInit = {}
	): Promise<ty.PrivateApplicationResponse> {
		return await this.json(Endpoint.GetMyOauth2Application, {  },
			{
				...extra
			}
		);
	}

	public async listMyConnections(
		extra: RequestInit = {}
	): Promise<Array<ty.ConnectedAccountResponse> | null> {
		return await this.json(Endpoint.ListMyConnections, {  },
			{
				...extra
			}
		);
	}

	public async createDm(
		body: ty.CreatePrivateChannelRequest,
		extra: RequestInit = {}
	): Promise<ty.PrivateChannelResponse | ty.PrivateGroupChannelResponse> {
		return await this.json(Endpoint.CreateDm, {  },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listMyGuilds(
		extra: RequestInit = {}
	): Promise<Array<ty.MyGuildResponse> | null> {
		return await this.json(Endpoint.ListMyGuilds, {  },
			{
				...extra
			}
		);
	}

	public async getMyApplication(
		extra: RequestInit = {}
	): Promise<ty.PrivateApplicationResponse> {
		return await this.json(Endpoint.GetMyApplication, {  },
			{
				...extra
			}
		);
	}

	public async updateMyApplication(
		body: ty.ApplicationFormPartial,
		extra: RequestInit = {}
	): Promise<ty.PrivateApplicationResponse> {
		return await this.json(Endpoint.UpdateMyApplication, {  },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getBotGateway(
		extra: RequestInit = {}
	): Promise<ty.GatewayBotResponse> {
		return await this.json(Endpoint.GetBotGateway, {  },
			{
				...extra
			}
		);
	}

	public async getOpenidConnectUserinfo(
		extra: RequestInit = {}
	): Promise<ty.OAuth2GetOpenIDConnectUserInfoResponse> {
		return await this.json(Endpoint.GetOpenidConnectUserinfo, {  },
			{
				...extra
			}
		);
	}

	public async getPublicKeys(
		extra: RequestInit = {}
	): Promise<ty.OAuth2GetKeys> {
		return await this.json(Endpoint.GetPublicKeys, {  },
			{
				...extra
			}
		);
	}

	public async getMyOauth2Authorization(
		extra: RequestInit = {}
	): Promise<ty.OAuth2GetAuthorizationResponse> {
		return await this.json(Endpoint.GetMyOauth2Authorization, {  },
			{
				...extra
			}
		);
	}

	public async listVoiceRegions(
		extra: RequestInit = {}
	): Promise<Array<ty.VoiceRegionResponse> | null> {
		return await this.json(Endpoint.ListVoiceRegions, {  },
			{
				...extra
			}
		);
	}

	public async getMyUser(
		extra: RequestInit = {}
	): Promise<ty.UserPIIResponse> {
		return await this.json(Endpoint.GetMyUser, {  },
			{
				...extra
			}
		);
	}

	public async updateMyUser(
		body: ty.BotAccountPatchRequest,
		extra: RequestInit = {}
	): Promise<ty.UserPIIResponse> {
		return await this.json(Endpoint.UpdateMyUser, {  },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getSoundboardDefaultSounds(
		extra: RequestInit = {}
	): Promise<Array<ty.SoundboardSoundResponse>> {
		return await this.json(Endpoint.GetSoundboardDefaultSounds, {  },
			{
				...extra
			}
		);
	}

	public async createStageInstance(
		body: {
			topic: string;
			channel_id: ty.SnowflakeType;
			privacy_level: null | ty.StageInstancesPrivacyLevels;
			guild_scheduled_event_id: null | ty.SnowflakeType;
			send_start_notification: boolean | null;
			},
		extra: RequestInit = {}
	): Promise<ty.StageInstanceResponse> {
		return await this.json(Endpoint.CreateStageInstance, {  },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listStickerPacks(
		extra: RequestInit = {}
	): Promise<ty.StickerPackCollectionResponse> {
		return await this.json(Endpoint.ListStickerPacks, {  },
			{
				...extra
			}
		);
	}

	public async getGateway(
		extra: RequestInit = {}
	): Promise<ty.GatewayResponse> {
		return await this.json(Endpoint.GetGateway, {  },
			{
				...extra
			}
		);
	}

	public async createGuild(
		body: ty.GuildCreateRequest,
		extra: RequestInit = {}
	): Promise<ty.GuildResponse> {
		return await this.json(Endpoint.CreateGuild, {  },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listMyPrivateArchivedThreads(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ThreadsResponse> {
		return await this.json(Endpoint.ListMyPrivateArchivedThreads, { channel_id },
			{
				...extra
			}
		);
	}

	public async listGuildApplicationCommandPermissions(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.CommandPermissionsResponse>> {
		return await this.json(Endpoint.ListGuildApplicationCommandPermissions, { application_id, guild_id },
			{
				...extra
			}
		);
	}

	public async getGuildApplicationCommandPermissions(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		command_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.CommandPermissionsResponse> {
		return await this.json(Endpoint.GetGuildApplicationCommandPermissions, { application_id, guild_id, command_id },
			{
				...extra
			}
		);
	}

	public async setGuildApplicationCommandPermissions(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		command_id: ty.SnowflakeType,
		body: {
			permissions: Array<ty.ApplicationCommandPermission> | null;
			},
		extra: RequestInit = {}
	): Promise<ty.CommandPermissionsResponse> {
		return await this.json(Endpoint.SetGuildApplicationCommandPermissions, { application_id, guild_id, command_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async addMyMessageReaction(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		emoji_name: string,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.AddMyMessageReaction, { channel_id, message_id, emoji_name },
			{
				...extra
			}
		);
	}

	public async deleteMyMessageReaction(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		emoji_name: string,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteMyMessageReaction, { channel_id, message_id, emoji_name },
			{
				...extra
			}
		);
	}

	public async listPrivateArchivedThreads(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ThreadsResponse> {
		return await this.json(Endpoint.ListPrivateArchivedThreads, { channel_id },
			{
				...extra
			}
		);
	}

	public async listPublicArchivedThreads(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ThreadsResponse> {
		return await this.json(Endpoint.ListPublicArchivedThreads, { channel_id },
			{
				...extra
			}
		);
	}

	public async getApplicationUserRoleConnection(
		application_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ApplicationUserRoleConnectionResponse> {
		return await this.json(Endpoint.GetApplicationUserRoleConnection, { application_id },
			{
				...extra
			}
		);
	}

	public async updateApplicationUserRoleConnection(
		application_id: ty.SnowflakeType,
		body: {
			platform_name: string | null;
			platform_username: string | null;
			metadata: {
		[key: string]: string;
	} | null;
			},
		extra: RequestInit = {}
	): Promise<ty.ApplicationUserRoleConnectionResponse> {
		return await this.json(Endpoint.UpdateApplicationUserRoleConnection, { application_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async deleteApplicationUserRoleConnection(
		application_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteApplicationUserRoleConnection, { application_id },
			{
				...extra
			}
		);
	}

	public async getMyGuildMember(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.PrivateGuildMemberResponse> {
		return await this.json(Endpoint.GetMyGuildMember, { guild_id },
			{
				...extra
			}
		);
	}

	public async getApplicationRoleConnectionsMetadata(
		application_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.ApplicationRoleConnectionsMetadataItemResponse> | null> {
		return await this.json(Endpoint.GetApplicationRoleConnectionsMetadata, { application_id },
			{
				...extra
			}
		);
	}

	public async updateApplicationRoleConnectionsMetadata(
		application_id: ty.SnowflakeType,
		body: Array<ty.ApplicationRoleConnectionsMetadataItemRequest> | null,
		extra: RequestInit = {}
	): Promise<Array<ty.ApplicationRoleConnectionsMetadataItemResponse> | null> {
		return await this.json(Endpoint.UpdateApplicationRoleConnectionsMetadata, { application_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async consumeEntitlement(
		application_id: ty.SnowflakeType,
		entitlement_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.ConsumeEntitlement, { application_id, entitlement_id },
			{
				...extra
			}
		);
	}

	public async getGuildApplicationCommand(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		command_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ApplicationCommandResponse> {
		return await this.json(Endpoint.GetGuildApplicationCommand, { application_id, guild_id, command_id },
			{
				...extra
			}
		);
	}

	public async deleteGuildApplicationCommand(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		command_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildApplicationCommand, { application_id, guild_id, command_id },
			{
				...extra
			}
		);
	}

	public async updateGuildApplicationCommand(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		command_id: ty.SnowflakeType,
		body: ty.ApplicationCommandPatchRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.ApplicationCommandResponse> {
		return await this.json(Endpoint.UpdateGuildApplicationCommand, { application_id, guild_id, command_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildApplicationCommands(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.ApplicationCommandResponse> | null> {
		return await this.json(Endpoint.ListGuildApplicationCommands, { application_id, guild_id },
			{
				...extra
			}
		);
	}

	public async bulkSetGuildApplicationCommands(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		body: Array<ty.ApplicationCommandUpdateRequest> | null,
		extra: RequestInit = {}
	): Promise<Array<ty.ApplicationCommandResponse> | null> {
		return await this.json(Endpoint.BulkSetGuildApplicationCommands, { application_id, guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async createGuildApplicationCommand(
		application_id: ty.SnowflakeType,
		guild_id: ty.SnowflakeType,
		body: ty.ApplicationCommandCreateRequest,
		extra: RequestInit = {}
	): Promise<ty.ApplicationCommandResponse | ty.ApplicationCommandResponse> {
		return await this.json(Endpoint.CreateGuildApplicationCommand, { application_id, guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async joinThread(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.JoinThread, { channel_id },
			{
				...extra
			}
		);
	}

	public async leaveThread(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.LeaveThread, { channel_id },
			{
				...extra
			}
		);
	}

	public async bulkDeleteMessages(
		channel_id: ty.SnowflakeType,
		body: {
			messages: Array<ty.SnowflakeType>;
			},
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.BulkDeleteMessages, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async deleteUserMessageReaction(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		emoji_name: string,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteUserMessageReaction, { channel_id, message_id, emoji_name, user_id },
			{
				...extra
			}
		);
	}

	public async listMessageReactionsByEmoji(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		emoji_name: string,
		extra: RequestInit = {}
	): Promise<Array<ty.UserResponse>> {
		return await this.json(Endpoint.ListMessageReactionsByEmoji, { channel_id, message_id, emoji_name },
			{
				...extra
			}
		);
	}

	public async deleteAllMessageReactionsByEmoji(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		emoji_name: string,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteAllMessageReactionsByEmoji, { channel_id, message_id, emoji_name },
			{
				...extra
			}
		);
	}

	public async deleteAllMessageReactions(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteAllMessageReactions, { channel_id, message_id },
			{
				...extra
			}
		);
	}

	public async crosspostMessage(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.CrosspostMessage, { channel_id, message_id },
			{
				...extra
			}
		);
	}

	public async createThreadFromMessage(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		body: ty.CreateTextThreadWithMessageRequest,
		extra: RequestInit = {}
	): Promise<ty.ThreadResponse> {
		return await this.json(Endpoint.CreateThreadFromMessage, { channel_id, message_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getAnswerVoters(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		answer_id: number,
		extra: RequestInit = {}
	): Promise<ty.PollAnswerDetailsResponse> {
		return await this.json(Endpoint.GetAnswerVoters, { channel_id, message_id, answer_id },
			{
				...extra
			}
		);
	}

	public async pollExpire(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.PollExpire, { channel_id, message_id },
			{
				...extra
			}
		);
	}

	public async getOriginalWebhookMessage(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.GetOriginalWebhookMessage, { webhook_id, webhook_token },
			{
				...extra
			}
		);
	}

	public async deleteOriginalWebhookMessage(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteOriginalWebhookMessage, { webhook_id, webhook_token },
			{
				...extra
			}
		);
	}

	public async updateOriginalWebhookMessage(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		body: ty.IncomingWebhookUpdateRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.UpdateOriginalWebhookMessage, { webhook_id, webhook_token },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildScheduledEventUsers(
		guild_id: ty.SnowflakeType,
		guild_scheduled_event_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.ScheduledEventUserResponse> | null> {
		return await this.json(Endpoint.ListGuildScheduledEventUsers, { guild_id, guild_scheduled_event_id },
			{
				...extra
			}
		);
	}

	public async getAutoModerationRule(
		guild_id: ty.SnowflakeType,
		rule_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.DefaultKeywordRuleResponse | ty.KeywordRuleResponse | ty.MLSpamRuleResponse | ty.MentionSpamRuleResponse | ty.SpamLinkRuleResponse> {
		return await this.json(Endpoint.GetAutoModerationRule, { guild_id, rule_id },
			{
				...extra
			}
		);
	}

	public async deleteAutoModerationRule(
		guild_id: ty.SnowflakeType,
		rule_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteAutoModerationRule, { guild_id, rule_id },
			{
				...extra
			}
		);
	}

	public async updateAutoModerationRule(
		guild_id: ty.SnowflakeType,
		rule_id: ty.SnowflakeType,
		body: ty.DefaultKeywordListUpsertRequestPartial | ty.KeywordUpsertRequestPartial | ty.MLSpamUpsertRequestPartial | ty.MentionSpamUpsertRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.DefaultKeywordRuleResponse | ty.KeywordRuleResponse | ty.MLSpamRuleResponse | ty.MentionSpamRuleResponse | ty.SpamLinkRuleResponse> {
		return await this.json(Endpoint.UpdateAutoModerationRule, { guild_id, rule_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listAutoModerationRules(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.DefaultKeywordRuleResponse | ty.KeywordRuleResponse | ty.MLSpamRuleResponse | ty.MentionSpamRuleResponse | ty.SpamLinkRuleResponse | null> | null> {
		return await this.json(Endpoint.ListAutoModerationRules, { guild_id },
			{
				...extra
			}
		);
	}

	public async createAutoModerationRule(
		guild_id: ty.SnowflakeType,
		body: ty.DefaultKeywordListUpsertRequest | ty.KeywordUpsertRequest | ty.MLSpamUpsertRequest | ty.MentionSpamUpsertRequest,
		extra: RequestInit = {}
	): Promise<ty.DefaultKeywordRuleResponse | ty.KeywordRuleResponse | ty.MLSpamRuleResponse | ty.MentionSpamRuleResponse | ty.SpamLinkRuleResponse> {
		return await this.json(Endpoint.CreateAutoModerationRule, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getSelfVoiceState(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.VoiceStateResponse> {
		return await this.json(Endpoint.GetSelfVoiceState, { guild_id },
			{
				...extra
			}
		);
	}

	public async updateSelfVoiceState(
		guild_id: ty.SnowflakeType,
		body: {
			request_to_speak_timestamp: string | null;
			suppress: boolean | null;
			channel_id: null | ty.SnowflakeType;
			},
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.UpdateSelfVoiceState, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async searchGuildMembers(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.GuildMemberResponse>> {
		return await this.json(Endpoint.SearchGuildMembers, { guild_id },
			{
				...extra
			}
		);
	}

	public async getActiveGuildThreads(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ThreadsResponse> {
		return await this.json(Endpoint.GetActiveGuildThreads, { guild_id },
			{
				...extra
			}
		);
	}

	public async updateMyGuildMember(
		guild_id: ty.SnowflakeType,
		body: {
			nick: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.PrivateGuildMemberResponse> {
		return await this.json(Endpoint.UpdateMyGuildMember, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async addGuildMemberRole(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		role_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.AddGuildMemberRole, { guild_id, user_id, role_id },
			{
				...extra
			}
		);
	}

	public async deleteGuildMemberRole(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		role_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildMemberRole, { guild_id, user_id, role_id },
			{
				...extra
			}
		);
	}

	public async leaveGuild(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.LeaveGuild, { guild_id },
			{
				...extra
			}
		);
	}

	public async applicationsGetActivityInstance(
		application_id: ty.SnowflakeType,
		instance_id: string,
		extra: RequestInit = {}
	): Promise<ty.EmbeddedActivityInstance> {
		return await this.json(Endpoint.ApplicationsGetActivityInstance, { application_id, instance_id },
			{
				...extra
			}
		);
	}

	public async getEntitlement(
		application_id: ty.SnowflakeType,
		entitlement_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.EntitlementResponse> {
		return await this.json(Endpoint.GetEntitlement, { application_id, entitlement_id },
			{
				...extra
			}
		);
	}

	public async deleteEntitlement(
		application_id: ty.SnowflakeType,
		entitlement_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteEntitlement, { application_id, entitlement_id },
			{
				...extra
			}
		);
	}

	public async getEntitlements(
		application_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<null | ty.EntitlementResponse>> {
		return await this.json(Endpoint.GetEntitlements, { application_id },
			{
				...extra
			}
		);
	}

	public async createEntitlement(
		application_id: ty.SnowflakeType,
		body: ty.CreateEntitlementRequestData,
		extra: RequestInit = {}
	): Promise<ty.EntitlementResponse> {
		return await this.json(Endpoint.CreateEntitlement, { application_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async uploadApplicationAttachment(
		application_id: ty.SnowflakeType,
		mpbody: {
			file: string;
			},
		extra: RequestInit = {}
	): Promise<ty.ActivitiesAttachmentResponse> {
		return await this.json(Endpoint.UploadApplicationAttachment, { application_id },
			{
				body: Object.entries(mpbody).reduce((p,v)=>{p.append(v[0],v[1]);return p},new FormData()),
				headers: { ...this.defaultHeaders, 'Content-Type': 'multipart/form-data' },
				...extra,
			}
		);
	}

	public async getApplicationCommand(
		application_id: ty.SnowflakeType,
		command_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ApplicationCommandResponse> {
		return await this.json(Endpoint.GetApplicationCommand, { application_id, command_id },
			{
				...extra
			}
		);
	}

	public async deleteApplicationCommand(
		application_id: ty.SnowflakeType,
		command_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteApplicationCommand, { application_id, command_id },
			{
				...extra
			}
		);
	}

	public async updateApplicationCommand(
		application_id: ty.SnowflakeType,
		command_id: ty.SnowflakeType,
		body: ty.ApplicationCommandPatchRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.ApplicationCommandResponse> {
		return await this.json(Endpoint.UpdateApplicationCommand, { application_id, command_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listApplicationCommands(
		application_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.ApplicationCommandResponse> | null> {
		return await this.json(Endpoint.ListApplicationCommands, { application_id },
			{
				...extra
			}
		);
	}

	public async bulkSetApplicationCommands(
		application_id: ty.SnowflakeType,
		body: Array<ty.ApplicationCommandUpdateRequest> | null,
		extra: RequestInit = {}
	): Promise<Array<ty.ApplicationCommandResponse> | null> {
		return await this.json(Endpoint.BulkSetApplicationCommands, { application_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async createApplicationCommand(
		application_id: ty.SnowflakeType,
		body: ty.ApplicationCommandCreateRequest,
		extra: RequestInit = {}
	): Promise<ty.ApplicationCommandResponse | ty.ApplicationCommandResponse> {
		return await this.json(Endpoint.CreateApplicationCommand, { application_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getApplicationEmoji(
		application_id: ty.SnowflakeType,
		emoji_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.EmojiResponse> {
		return await this.json(Endpoint.GetApplicationEmoji, { application_id, emoji_id },
			{
				...extra
			}
		);
	}

	public async deleteApplicationEmoji(
		application_id: ty.SnowflakeType,
		emoji_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteApplicationEmoji, { application_id, emoji_id },
			{
				...extra
			}
		);
	}

	public async updateApplicationEmoji(
		application_id: ty.SnowflakeType,
		emoji_id: ty.SnowflakeType,
		body: {
			name: string;
			},
		extra: RequestInit = {}
	): Promise<ty.EmojiResponse> {
		return await this.json(Endpoint.UpdateApplicationEmoji, { application_id, emoji_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listApplicationEmojis(
		application_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ListApplicationEmojisResponse> {
		return await this.json(Endpoint.ListApplicationEmojis, { application_id },
			{
				...extra
			}
		);
	}

	public async createApplicationEmoji(
		application_id: ty.SnowflakeType,
		body: {
			name: string;
			image: string;
			},
		extra: RequestInit = {}
	): Promise<ty.EmojiResponse> {
		return await this.json(Endpoint.CreateApplicationEmoji, { application_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async createInteractionResponse(
		interaction_id: ty.SnowflakeType,
		interaction_token: string,
		body: ty.ApplicationCommandAutocompleteCallbackRequest | ty.CreateMessageInteractionCallbackRequest | ty.LaunchActivityInteractionCallbackRequest | ty.ModalInteractionCallbackRequest | ty.PongInteractionCallbackRequest | ty.UpdateMessageInteractionCallbackRequest,
		extra: RequestInit = {}
	): Promise<ty.InteractionCallbackResponse | void> {
		return await this.json(Endpoint.CreateInteractionResponse, { interaction_id, interaction_token },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async sendSoundboardSound(
		channel_id: ty.SnowflakeType,
		body: ty.SoundboardSoundSendRequest,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.SendSoundboardSound, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getThreadMember(
		channel_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ThreadMemberResponse> {
		return await this.json(Endpoint.GetThreadMember, { channel_id, user_id },
			{
				...extra
			}
		);
	}

	public async addThreadMember(
		channel_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.AddThreadMember, { channel_id, user_id },
			{
				...extra
			}
		);
	}

	public async deleteThreadMember(
		channel_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteThreadMember, { channel_id, user_id },
			{
				...extra
			}
		);
	}

	public async listThreadMembers(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.ThreadMemberResponse>> {
		return await this.json(Endpoint.ListThreadMembers, { channel_id },
			{
				...extra
			}
		);
	}

	public async setChannelPermissionOverwrite(
		channel_id: ty.SnowflakeType,
		overwrite_id: ty.SnowflakeType,
		body: {
			type: null | ty.ChannelPermissionOverwrites;
			allow: number | null;
			deny: number | null;
			},
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.SetChannelPermissionOverwrite, { channel_id, overwrite_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async deleteChannelPermissionOverwrite(
		channel_id: ty.SnowflakeType,
		overwrite_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteChannelPermissionOverwrite, { channel_id, overwrite_id },
			{
				...extra
			}
		);
	}

	public async addGroupDmUser(
		channel_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		body: {
			access_token: string | null;
			nick: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.PrivateChannelResponse | ty.PrivateGroupChannelResponse | void> {
		return await this.json(Endpoint.AddGroupDmUser, { channel_id, user_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async deleteGroupDmUser(
		channel_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGroupDmUser, { channel_id, user_id },
			{
				...extra
			}
		);
	}

	public async followChannel(
		channel_id: ty.SnowflakeType,
		body: {
			webhook_channel_id: ty.SnowflakeType;
			},
		extra: RequestInit = {}
	): Promise<ty.ChannelFollowerResponse> {
		return await this.json(Endpoint.FollowChannel, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getMessage(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.GetMessage, { channel_id, message_id },
			{
				...extra
			}
		);
	}

	public async deleteMessage(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteMessage, { channel_id, message_id },
			{
				...extra
			}
		);
	}

	public async updateMessage(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		body: ty.MessageEditRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.UpdateMessage, { channel_id, message_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listMessages(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.MessageResponse> | null> {
		return await this.json(Endpoint.ListMessages, { channel_id },
			{
				...extra
			}
		);
	}

	public async createMessage(
		channel_id: ty.SnowflakeType,
		body: ty.MessageCreateRequest,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.CreateMessage, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listChannelWebhooks(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.ApplicationIncomingWebhookResponse | ty.ChannelFollowerWebhookResponse | ty.GuildIncomingWebhookResponse> | null> {
		return await this.json(Endpoint.ListChannelWebhooks, { channel_id },
			{
				...extra
			}
		);
	}

	public async createWebhook(
		channel_id: ty.SnowflakeType,
		body: {
			name: string;
			avatar: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildIncomingWebhookResponse> {
		return await this.json(Endpoint.CreateWebhook, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listChannelInvites(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.FriendInviteResponse | ty.GroupDMInviteResponse | ty.GuildInviteResponse> | null> {
		return await this.json(Endpoint.ListChannelInvites, { channel_id },
			{
				...extra
			}
		);
	}

	public async createChannelInvite(
		channel_id: ty.SnowflakeType,
		body: ty.CreateGroupDMInviteRequest | ty.CreateGuildInviteRequest,
		extra: RequestInit = {}
	): Promise<ty.FriendInviteResponse | ty.GroupDMInviteResponse | ty.GuildInviteResponse | void> {
		return await this.json(Endpoint.CreateChannelInvite, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async createThread(
		channel_id: ty.SnowflakeType,
		body: ty.CreateForumThreadRequest | ty.CreateTextThreadWithoutMessageRequest,
		extra: RequestInit = {}
	): Promise<ty.CreatedThreadResponse> {
		return await this.json(Endpoint.CreateThread, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async triggerTypingIndicator(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.TypingIndicatorResponse | void> {
		return await this.json(Endpoint.TriggerTypingIndicator, { channel_id },
			{
				...extra
			}
		);
	}

	public async pinMessage(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.PinMessage, { channel_id, message_id },
			{
				...extra
			}
		);
	}

	public async unpinMessage(
		channel_id: ty.SnowflakeType,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.UnpinMessage, { channel_id, message_id },
			{
				...extra
			}
		);
	}

	public async listPinnedMessages(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.MessageResponse> | null> {
		return await this.json(Endpoint.ListPinnedMessages, { channel_id },
			{
				...extra
			}
		);
	}

	public async getWebhookMessage(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.GetWebhookMessage, { webhook_id, webhook_token, message_id },
			{
				...extra
			}
		);
	}

	public async deleteWebhookMessage(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		message_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteWebhookMessage, { webhook_id, webhook_token, message_id },
			{
				...extra
			}
		);
	}

	public async updateWebhookMessage(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		message_id: ty.SnowflakeType,
		body: ty.IncomingWebhookUpdateRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse> {
		return await this.json(Endpoint.UpdateWebhookMessage, { webhook_id, webhook_token, message_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async executeGithubCompatibleWebhook(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		body: ty.GithubWebhook,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.ExecuteGithubCompatibleWebhook, { webhook_id, webhook_token },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async executeSlackCompatibleWebhook(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		body: ty.SlackWebhook,
		extra: RequestInit = {}
	): Promise<string | null> {
		return await this.json(Endpoint.ExecuteSlackCompatibleWebhook, { webhook_id, webhook_token },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildTemplate(
		code: string,
		extra: RequestInit = {}
	): Promise<ty.GuildTemplateResponse> {
		return await this.json(Endpoint.GetGuildTemplate, { code },
			{
				...extra
			}
		);
	}

	public async createGuildFromTemplate(
		code: string,
		body: {
			name: string;
			icon: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildResponse> {
		return await this.json(Endpoint.CreateGuildFromTemplate, { code },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildNewMemberWelcome(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildHomeSettingsResponse | void> {
		return await this.json(Endpoint.GetGuildNewMemberWelcome, { guild_id },
			{
				...extra
			}
		);
	}

	public async getGuildSoundboardSound(
		guild_id: ty.SnowflakeType,
		sound_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.SoundboardSoundResponse> {
		return await this.json(Endpoint.GetGuildSoundboardSound, { guild_id, sound_id },
			{
				...extra
			}
		);
	}

	public async deleteGuildSoundboardSound(
		guild_id: ty.SnowflakeType,
		sound_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildSoundboardSound, { guild_id, sound_id },
			{
				...extra
			}
		);
	}

	public async updateGuildSoundboardSound(
		guild_id: ty.SnowflakeType,
		sound_id: ty.SnowflakeType,
		body: ty.SoundboardPatchRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.SoundboardSoundResponse> {
		return await this.json(Endpoint.UpdateGuildSoundboardSound, { guild_id, sound_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildSoundboardSounds(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ListGuildSoundboardSoundsResponse> {
		return await this.json(Endpoint.ListGuildSoundboardSounds, { guild_id },
			{
				...extra
			}
		);
	}

	public async createGuildSoundboardSound(
		guild_id: ty.SnowflakeType,
		body: ty.SoundboardCreateRequest,
		extra: RequestInit = {}
	): Promise<ty.SoundboardSoundResponse> {
		return await this.json(Endpoint.CreateGuildSoundboardSound, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildScheduledEvent(
		guild_id: ty.SnowflakeType,
		guild_scheduled_event_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ExternalScheduledEventResponse | ty.StageScheduledEventResponse | ty.VoiceScheduledEventResponse> {
		return await this.json(Endpoint.GetGuildScheduledEvent, { guild_id, guild_scheduled_event_id },
			{
				...extra
			}
		);
	}

	public async deleteGuildScheduledEvent(
		guild_id: ty.SnowflakeType,
		guild_scheduled_event_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildScheduledEvent, { guild_id, guild_scheduled_event_id },
			{
				...extra
			}
		);
	}

	public async updateGuildScheduledEvent(
		guild_id: ty.SnowflakeType,
		guild_scheduled_event_id: ty.SnowflakeType,
		body: ty.ExternalScheduledEventPatchRequestPartial | ty.StageScheduledEventPatchRequestPartial | ty.VoiceScheduledEventPatchRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.ExternalScheduledEventResponse | ty.StageScheduledEventResponse | ty.VoiceScheduledEventResponse> {
		return await this.json(Endpoint.UpdateGuildScheduledEvent, { guild_id, guild_scheduled_event_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildScheduledEvents(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.ExternalScheduledEventResponse | ty.StageScheduledEventResponse | ty.VoiceScheduledEventResponse> | null> {
		return await this.json(Endpoint.ListGuildScheduledEvents, { guild_id },
			{
				...extra
			}
		);
	}

	public async createGuildScheduledEvent(
		guild_id: ty.SnowflakeType,
		body: ty.ExternalScheduledEventCreateRequest | ty.StageScheduledEventCreateRequest | ty.VoiceScheduledEventCreateRequest,
		extra: RequestInit = {}
	): Promise<ty.ExternalScheduledEventResponse | ty.StageScheduledEventResponse | ty.VoiceScheduledEventResponse> {
		return await this.json(Endpoint.CreateGuildScheduledEvent, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildWelcomeScreen(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildWelcomeScreenResponse> {
		return await this.json(Endpoint.GetGuildWelcomeScreen, { guild_id },
			{
				...extra
			}
		);
	}

	public async updateGuildWelcomeScreen(
		guild_id: ty.SnowflakeType,
		body: ty.WelcomeScreenPatchRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.GuildWelcomeScreenResponse> {
		return await this.json(Endpoint.UpdateGuildWelcomeScreen, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getVoiceState(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.VoiceStateResponse> {
		return await this.json(Endpoint.GetVoiceState, { guild_id, user_id },
			{
				...extra
			}
		);
	}

	public async updateVoiceState(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		body: {
			suppress: boolean | null;
			channel_id: null | ty.SnowflakeType;
			},
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.UpdateVoiceState, { guild_id, user_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async deleteGuildIntegration(
		guild_id: ty.SnowflakeType,
		integration_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildIntegration, { guild_id, integration_id },
			{
				...extra
			}
		);
	}

	public async listGuildIntegrations(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.DiscordIntegrationResponse | ty.ExternalConnectionIntegrationResponse | ty.GuildSubscriptionIntegrationResponse> | null> {
		return await this.json(Endpoint.ListGuildIntegrations, { guild_id },
			{
				...extra
			}
		);
	}

	public async getGuildWidget(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.WidgetResponse> {
		return await this.json(Endpoint.GetGuildWidget, { guild_id },
			{
				...extra
			}
		);
	}

	public async getGuildsOnboarding(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.UserGuildOnboardingResponse> {
		return await this.json(Endpoint.GetGuildsOnboarding, { guild_id },
			{
				...extra
			}
		);
	}

	public async putGuildsOnboarding(
		guild_id: ty.SnowflakeType,
		body: ty.UpdateGuildOnboardingRequest,
		extra: RequestInit = {}
	): Promise<ty.GuildOnboardingResponse> {
		return await this.json(Endpoint.PutGuildsOnboarding, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildVanityUrl(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.VanityURLResponse> {
		return await this.json(Endpoint.GetGuildVanityUrl, { guild_id },
			{
				...extra
			}
		);
	}

	public async listGuildAuditLogEntries(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildAuditLogResponse> {
		return await this.json(Endpoint.ListGuildAuditLogEntries, { guild_id },
			{
				...extra
			}
		);
	}

	public async getGuildWidgetPng(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ArrayBuffer> {
		return await this.arrayBuffer(Endpoint.GetGuildWidgetPng, { guild_id },
			{
				...extra
			}
		);
	}

	public async syncGuildTemplate(
		guild_id: ty.SnowflakeType,
		code: string,
		extra: RequestInit = {}
	): Promise<ty.GuildTemplateResponse> {
		return await this.json(Endpoint.SyncGuildTemplate, { guild_id, code },
			{
				...extra
			}
		);
	}

	public async deleteGuildTemplate(
		guild_id: ty.SnowflakeType,
		code: string,
		extra: RequestInit = {}
	): Promise<ty.GuildTemplateResponse> {
		return await this.json(Endpoint.DeleteGuildTemplate, { guild_id, code },
			{
				...extra
			}
		);
	}

	public async updateGuildTemplate(
		guild_id: ty.SnowflakeType,
		code: string,
		body: {
			name: string;
			description: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildTemplateResponse> {
		return await this.json(Endpoint.UpdateGuildTemplate, { guild_id, code },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildTemplates(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.GuildTemplateResponse> | null> {
		return await this.json(Endpoint.ListGuildTemplates, { guild_id },
			{
				...extra
			}
		);
	}

	public async createGuildTemplate(
		guild_id: ty.SnowflakeType,
		body: {
			name: string;
			description: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildTemplateResponse> {
		return await this.json(Endpoint.CreateGuildTemplate, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildSticker(
		guild_id: ty.SnowflakeType,
		sticker_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildStickerResponse> {
		return await this.json(Endpoint.GetGuildSticker, { guild_id, sticker_id },
			{
				...extra
			}
		);
	}

	public async deleteGuildSticker(
		guild_id: ty.SnowflakeType,
		sticker_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildSticker, { guild_id, sticker_id },
			{
				...extra
			}
		);
	}

	public async updateGuildSticker(
		guild_id: ty.SnowflakeType,
		sticker_id: ty.SnowflakeType,
		body: {
			name: string;
			tags: string;
			description: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildStickerResponse> {
		return await this.json(Endpoint.UpdateGuildSticker, { guild_id, sticker_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async bulkBanUsersFromGuild(
		guild_id: ty.SnowflakeType,
		body: {
			user_ids: Array<ty.SnowflakeType>;
			delete_message_seconds: number | null;
			},
		extra: RequestInit = {}
	): Promise<ty.BulkBanUsersResponse> {
		return await this.json(Endpoint.BulkBanUsersFromGuild, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildStickers(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.GuildStickerResponse>> {
		return await this.json(Endpoint.ListGuildStickers, { guild_id },
			{
				...extra
			}
		);
	}

	public async createGuildSticker(
		guild_id: ty.SnowflakeType,
		mpbody: {
			name: string;
			tags: string;
			description: string | null;
			file: string;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildStickerResponse> {
		return await this.json(Endpoint.CreateGuildSticker, { guild_id },
			{
				body: Object.entries(mpbody).reduce((p,v)=>{p.append(v[0],v[1]);return p},new FormData()),
				headers: { ...this.defaultHeaders, 'Content-Type': 'multipart/form-data' },
				...extra,
			}
		);
	}

	public async getGuildWebhooks(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.ApplicationIncomingWebhookResponse | ty.ChannelFollowerWebhookResponse | ty.GuildIncomingWebhookResponse> | null> {
		return await this.json(Endpoint.GetGuildWebhooks, { guild_id },
			{
				...extra
			}
		);
	}

	public async listGuildChannels(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.GuildChannelResponse | ty.PrivateChannelResponse | ty.PrivateGroupChannelResponse | ty.ThreadResponse> | null> {
		return await this.json(Endpoint.ListGuildChannels, { guild_id },
			{
				...extra
			}
		);
	}

	public async createGuildChannel(
		guild_id: ty.SnowflakeType,
		body: ty.CreateGuildChannelRequest,
		extra: RequestInit = {}
	): Promise<ty.GuildChannelResponse> {
		return await this.json(Endpoint.CreateGuildChannel, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async bulkUpdateGuildChannels(
		guild_id: ty.SnowflakeType,
		body: Array<{
	id: ty.SnowflakeType;
	position: number | null;
	parent_id: null | ty.SnowflakeType;
	lock_permissions: boolean | null;
	}>,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.BulkUpdateGuildChannels, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildMember(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildMemberResponse> {
		return await this.json(Endpoint.GetGuildMember, { guild_id, user_id },
			{
				...extra
			}
		);
	}

	public async addGuildMember(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		body: {
			nick: string | null;
			roles: Array<null | ty.SnowflakeType> | null;
			mute: boolean | null;
			deaf: boolean | null;
			access_token: string;
			flags: number | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildMemberResponse | void> {
		return await this.json(Endpoint.AddGuildMember, { guild_id, user_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async deleteGuildMember(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildMember, { guild_id, user_id },
			{
				...extra
			}
		);
	}

	public async updateGuildMember(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		body: {
			nick: string | null;
			roles: Array<null | ty.SnowflakeType> | null;
			mute: boolean | null;
			deaf: boolean | null;
			channel_id: null | ty.SnowflakeType;
			communication_disabled_until: string | null;
			flags: number | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildMemberResponse | void> {
		return await this.json(Endpoint.UpdateGuildMember, { guild_id, user_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildMembers(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.GuildMemberResponse>> {
		return await this.json(Endpoint.ListGuildMembers, { guild_id },
			{
				...extra
			}
		);
	}

	public async getGuildPreview(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildPreviewResponse> {
		return await this.json(Endpoint.GetGuildPreview, { guild_id },
			{
				...extra
			}
		);
	}

	public async listGuildInvites(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.FriendInviteResponse | ty.GroupDMInviteResponse | ty.GuildInviteResponse> | null> {
		return await this.json(Endpoint.ListGuildInvites, { guild_id },
			{
				...extra
			}
		);
	}

	public async listGuildVoiceRegions(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.VoiceRegionResponse> | null> {
		return await this.json(Endpoint.ListGuildVoiceRegions, { guild_id },
			{
				...extra
			}
		);
	}

	public async getGuildEmoji(
		guild_id: ty.SnowflakeType,
		emoji_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.EmojiResponse> {
		return await this.json(Endpoint.GetGuildEmoji, { guild_id, emoji_id },
			{
				...extra
			}
		);
	}

	public async deleteGuildEmoji(
		guild_id: ty.SnowflakeType,
		emoji_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildEmoji, { guild_id, emoji_id },
			{
				...extra
			}
		);
	}

	public async updateGuildEmoji(
		guild_id: ty.SnowflakeType,
		emoji_id: ty.SnowflakeType,
		body: {
			name: string;
			roles: Array<null | ty.SnowflakeType> | null;
			},
		extra: RequestInit = {}
	): Promise<ty.EmojiResponse> {
		return await this.json(Endpoint.UpdateGuildEmoji, { guild_id, emoji_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildEmojis(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.EmojiResponse> | null> {
		return await this.json(Endpoint.ListGuildEmojis, { guild_id },
			{
				...extra
			}
		);
	}

	public async createGuildEmoji(
		guild_id: ty.SnowflakeType,
		body: {
			name: string;
			image: string;
			roles: Array<null | ty.SnowflakeType> | null;
			},
		extra: RequestInit = {}
	): Promise<ty.EmojiResponse> {
		return await this.json(Endpoint.CreateGuildEmoji, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildWidgetSettings(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.WidgetSettingsResponse> {
		return await this.json(Endpoint.GetGuildWidgetSettings, { guild_id },
			{
				...extra
			}
		);
	}

	public async updateGuildWidgetSettings(
		guild_id: ty.SnowflakeType,
		body: {
			channel_id: null | ty.SnowflakeType;
			enabled: boolean | null;
			},
		extra: RequestInit = {}
	): Promise<ty.WidgetSettingsResponse> {
		return await this.json(Endpoint.UpdateGuildWidgetSettings, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildRole(
		guild_id: ty.SnowflakeType,
		role_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildRoleResponse> {
		return await this.json(Endpoint.GetGuildRole, { guild_id, role_id },
			{
				...extra
			}
		);
	}

	public async deleteGuildRole(
		guild_id: ty.SnowflakeType,
		role_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuildRole, { guild_id, role_id },
			{
				...extra
			}
		);
	}

	public async updateGuildRole(
		guild_id: ty.SnowflakeType,
		role_id: ty.SnowflakeType,
		body: {
			name: string | null;
			permissions: number | null;
			color: number | null;
			hoist: boolean | null;
			mentionable: boolean | null;
			icon: string | null;
			unicode_emoji: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildRoleResponse> {
		return await this.json(Endpoint.UpdateGuildRole, { guild_id, role_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async listGuildRoles(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.GuildRoleResponse>> {
		return await this.json(Endpoint.ListGuildRoles, { guild_id },
			{
				...extra
			}
		);
	}

	public async createGuildRole(
		guild_id: ty.SnowflakeType,
		body: {
			name: string | null;
			permissions: number | null;
			color: number | null;
			hoist: boolean | null;
			mentionable: boolean | null;
			icon: string | null;
			unicode_emoji: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildRoleResponse> {
		return await this.json(Endpoint.CreateGuildRole, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async bulkUpdateGuildRoles(
		guild_id: ty.SnowflakeType,
		body: Array<{
	id: null | ty.SnowflakeType;
	position: number | null;
	}>,
		extra: RequestInit = {}
	): Promise<Array<ty.GuildRoleResponse>> {
		return await this.json(Endpoint.BulkUpdateGuildRoles, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async previewPruneGuild(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildPruneResponse> {
		return await this.json(Endpoint.PreviewPruneGuild, { guild_id },
			{
				...extra
			}
		);
	}

	public async pruneGuild(
		guild_id: ty.SnowflakeType,
		body: {
			days: number | null;
			compute_prune_count: boolean | null;
			include_roles: string | Array<null | ty.SnowflakeType> | null;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildPruneResponse> {
		return await this.json(Endpoint.PruneGuild, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getGuildBan(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildBanResponse> {
		return await this.json(Endpoint.GetGuildBan, { guild_id, user_id },
			{
				...extra
			}
		);
	}

	public async banUserFromGuild(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		body: {
			delete_message_seconds: number | null;
			delete_message_days: number | null;
			},
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.BanUserFromGuild, { guild_id, user_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async unbanUserFromGuild(
		guild_id: ty.SnowflakeType,
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.UnbanUserFromGuild, { guild_id, user_id },
			{
				...extra
			}
		);
	}

	public async listGuildBans(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<Array<ty.GuildBanResponse> | null> {
		return await this.json(Endpoint.ListGuildBans, { guild_id },
			{
				...extra
			}
		);
	}

	public async setGuildMfaLevel(
		guild_id: ty.SnowflakeType,
		body: {
			level: ty.GuildMFALevel;
			},
		extra: RequestInit = {}
	): Promise<ty.GuildMFALevelResponse> {
		return await this.json(Endpoint.SetGuildMfaLevel, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getStageInstance(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.StageInstanceResponse> {
		return await this.json(Endpoint.GetStageInstance, { channel_id },
			{
				...extra
			}
		);
	}

	public async deleteStageInstance(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteStageInstance, { channel_id },
			{
				...extra
			}
		);
	}

	public async updateStageInstance(
		channel_id: ty.SnowflakeType,
		body: {
			topic: string;
			privacy_level: ty.StageInstancesPrivacyLevels;
			},
		extra: RequestInit = {}
	): Promise<ty.StageInstanceResponse> {
		return await this.json(Endpoint.UpdateStageInstance, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getStickerPack(
		pack_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.StickerPackResponse> {
		return await this.json(Endpoint.GetStickerPack, { pack_id },
			{
				...extra
			}
		);
	}

	public async getApplication(
		application_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.PrivateApplicationResponse> {
		return await this.json(Endpoint.GetApplication, { application_id },
			{
				...extra
			}
		);
	}

	public async updateApplication(
		application_id: ty.SnowflakeType,
		body: ty.ApplicationFormPartial,
		extra: RequestInit = {}
	): Promise<ty.PrivateApplicationResponse> {
		return await this.json(Endpoint.UpdateApplication, { application_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getWebhookByToken(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		extra: RequestInit = {}
	): Promise<ty.ApplicationIncomingWebhookResponse | ty.ChannelFollowerWebhookResponse | ty.GuildIncomingWebhookResponse> {
		return await this.json(Endpoint.GetWebhookByToken, { webhook_id, webhook_token },
			{
				...extra
			}
		);
	}

	public async executeWebhook(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		body: ty.IncomingWebhookRequestPartial | ty.IncomingWebhookUpdateRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.MessageResponse | void> {
		return await this.json(Endpoint.ExecuteWebhook, { webhook_id, webhook_token },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async deleteWebhookByToken(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteWebhookByToken, { webhook_id, webhook_token },
			{
				...extra
			}
		);
	}

	public async updateWebhookByToken(
		webhook_id: ty.SnowflakeType,
		webhook_token: string,
		body: {
			name: string;
			avatar: string | null;
			},
		extra: RequestInit = {}
	): Promise<ty.ApplicationIncomingWebhookResponse | ty.ChannelFollowerWebhookResponse | ty.GuildIncomingWebhookResponse> {
		return await this.json(Endpoint.UpdateWebhookByToken, { webhook_id, webhook_token },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getSticker(
		sticker_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildStickerResponse | ty.StandardStickerResponse> {
		return await this.json(Endpoint.GetSticker, { sticker_id },
			{
				...extra
			}
		);
	}

	public async getWebhook(
		webhook_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.ApplicationIncomingWebhookResponse | ty.ChannelFollowerWebhookResponse | ty.GuildIncomingWebhookResponse> {
		return await this.json(Endpoint.GetWebhook, { webhook_id },
			{
				...extra
			}
		);
	}

	public async deleteWebhook(
		webhook_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteWebhook, { webhook_id },
			{
				...extra
			}
		);
	}

	public async updateWebhook(
		webhook_id: ty.SnowflakeType,
		body: {
			name: string;
			avatar: string | null;
			channel_id: null | ty.SnowflakeType;
			},
		extra: RequestInit = {}
	): Promise<ty.ApplicationIncomingWebhookResponse | ty.ChannelFollowerWebhookResponse | ty.GuildIncomingWebhookResponse> {
		return await this.json(Endpoint.UpdateWebhook, { webhook_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getChannel(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildChannelResponse | ty.PrivateChannelResponse | ty.PrivateGroupChannelResponse | ty.ThreadResponse> {
		return await this.json(Endpoint.GetChannel, { channel_id },
			{
				...extra
			}
		);
	}

	public async deleteChannel(
		channel_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildChannelResponse | ty.PrivateChannelResponse | ty.PrivateGroupChannelResponse | ty.ThreadResponse> {
		return await this.json(Endpoint.DeleteChannel, { channel_id },
			{
				...extra
			}
		);
	}

	public async updateChannel(
		channel_id: ty.SnowflakeType,
		body: ty.PrivateChannelRequestPartial | ty.UpdateGuildChannelRequestPartial | ty.UpdateThreadRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.GuildChannelResponse | ty.PrivateChannelResponse | ty.PrivateGroupChannelResponse | ty.ThreadResponse> {
		return await this.json(Endpoint.UpdateChannel, { channel_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async inviteResolve(
		code: string,
		extra: RequestInit = {}
	): Promise<ty.FriendInviteResponse | ty.GroupDMInviteResponse | ty.GuildInviteResponse> {
		return await this.json(Endpoint.InviteResolve, { code },
			{
				...extra
			}
		);
	}

	public async inviteRevoke(
		code: string,
		extra: RequestInit = {}
	): Promise<ty.FriendInviteResponse | ty.GroupDMInviteResponse | ty.GuildInviteResponse> {
		return await this.json(Endpoint.InviteRevoke, { code },
			{
				...extra
			}
		);
	}

	public async getGuild(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.GuildWithCountsResponse> {
		return await this.json(Endpoint.GetGuild, { guild_id },
			{
				...extra
			}
		);
	}

	public async deleteGuild(
		guild_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<void> {
		return await this.json(Endpoint.DeleteGuild, { guild_id },
			{
				...extra
			}
		);
	}

	public async updateGuild(
		guild_id: ty.SnowflakeType,
		body: ty.GuildPatchRequestPartial,
		extra: RequestInit = {}
	): Promise<ty.GuildResponse> {
		return await this.json(Endpoint.UpdateGuild, { guild_id },
			{
				body: JSON.stringify(body),
				...extra,
			}
		);
	}

	public async getUser(
		user_id: ty.SnowflakeType,
		extra: RequestInit = {}
	): Promise<ty.UserResponse> {
		return await this.json(Endpoint.GetUser, { user_id },
			{
				...extra
			}
		);
	}

}