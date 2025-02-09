import { Channel } from "diagnostics_channel";
import { ApplicationIntegrationType } from "./application.js";
import { Locale } from "./common.js";
import { Entitlement } from "./entitlement.js";
import { Guild, GuildMember } from "./guild.js";
import { User } from "./user.js";
import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
} from "./application_command.js";
import { Role } from "./role.js";
import { Attachment, Message } from "./message.js";
import { ComponentType, SelectOption } from "./message_components.js";

export interface Interaction {
  id: string;
  application_id: string;
  type: InteractionType;
  data?: InteractionData;
  guild?: Partial<Guild>;
  guild_id?: string;
  channel?: Partial<Channel>;
  channel_id?: string;
  member?: GuildMember;
  user?: User;
  token: string;
  version: number;
  message?: Message;
  app_permissions: string;
  local?: Locale;
  guild_locale?: Locale;
  entitlements: Array<Entitlement>;
  authorizing_integration_owners: Record<ApplicationIntegrationType, string>;
  context: InteractionContextType;
}

export enum InteractionType {
  Ping = 1,
  ApplicationCommand = 2,
  MessageComponent = 3,
  ApplicationCommandAutocomplete = 4,
  ModalSubmit = 5,
}

export enum InteractionContextType {
  Guild = 0,
  BotDm = 1,
  PrivateChannel = 2,
}

export interface InteractionData {
  id: string;
  name: string;
  type: ApplicationCommandType;
  resolved?: ResolvedData;
  options?: Array<ApplicationCommandInteractionDataOption>;
  guild_id: string;
  target_id: string;
}

export interface Component {
  custom_id: string;
  component_type: ComponentType;
  values?: Array<SelectOption>;
  resolved?: ResolvedData;
}

export interface ModalSubmitData {
  custom_id: string;
  components: Array<Component>;
}

export interface ResolvedData {
  users?: Record<string, User>;
  members?: Record<string, Partial<GuildMember>>;
  roles?: Record<string, Role>;
  channels?: Record<string, Partial<Channel>>;
  messages?: Record<string, Partial<Message>>;
  attachments?: Record<string, Attachment>;
}

export interface ApplicationCommandInteractionDataOption {
  name: string;
  type: ApplicationCommandOptionType;
  value?: string | number | boolean;
  options?: Array<ApplicationCommandInteractionDataOption>;
  focused?: boolean;
}

export interface MessageInteraction {
  id: string;
  type: InteractionType;
  name: string;
  user: User;
  member?: Partial<GuildMember>;
}

export interface InteractionResponse {
    type: InteractionCallbackType,
    data?: unknown, // TODO: properly type this.
}

export enum InteractionCallbackType {
    Pong = 1,
    ChannelMessageWithSource = 4,
    DeferredChannelMessageWithSource = 5,
    DeferredUpdateMessage = 6,
    UpdateMessage = 7,
    ApplicationCommandAutocompleteResult = 8,
    Modal = 9,
    PremiumRequired = 10,
    LaunchActivity = 12
}

export interface InteractionCallbackResponse {
    interaction: InteractionCallback,
    resource?: InteractionCallbackResource
}

export interface InteractionCallback {
    id: string,
    type: InteractionType,
    activity_instance_id?: string,
    response_msesage_id?: string,
    response_message_loading?: boolean,
    response_message_ephemeral?: boolean,
}

export interface InteractionCallbackResource {
    type: InteractionCallbackType,
    activity_instance?: ActivityInstanceResource,
    message?: Message,
}

export interface ActivityInstanceResource {
    id: string
}