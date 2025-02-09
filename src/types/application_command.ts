import { ApplicationIntegrationType } from "./application.js";
import { ChannelType } from "./channel.js";
import { Locale } from "./common.js";
import { InteractionContextType } from "./interaction.js";

export interface ApplicationCommand {
    id: string;
    type: ApplicationCommandType;
    application_id: string;
    guild_id?: string;
    name: string;
    name_localizations?: Record<Locale, string>;
    description: string;
    description_localizations?: Record<Locale, string>;
    options?: Array<ApplicationCommandOption>;
    default_member_permissions?: string;
    dm_permission?: boolean;
    default_permission?: boolean;
    nsfw?: boolean;
    integration_types?: Array<ApplicationIntegrationType>;
    contexts?: Array<InteractionContextType>;
    version: string;
    handler?: EntryPointCommandHandlerType;
}

export enum ApplicationCommandType {
    ChatInput = 1,
    User = 2,
    Message = 3,
    PrimaryEntryPoint = 4,
}

export interface ApplicationCommandOption {
    type: ApplicationCommandOptionType;
    name: string;
    name_localizations?: Record<Locale, string>;
    description: string;
    description_localizations?: Record<Locale, string>;
    required?: boolean;
    choices?: Array<ApplicationCommandOptionChoice>;
    options?: Array<ApplicationCommandOption>;
    channel_types?: Array<ChannelType>;
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
}

export enum ApplicationCommandOptionType {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
    Attachment = 11,
}

export interface ApplicationCommandOptionChoice {
    name: string;
    name_localizations?: Record<Locale, string>;
    value: string | number;
}

export enum EntryPointCommandHandlerType {
    AppHandler = 1,
    DiscordLaunchActivity = 2,
}

