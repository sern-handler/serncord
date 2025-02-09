import { ChannelType } from "./channel.js";
import { Emoji } from "./emoji.js";

export enum ComponentType {
  ActionRow = 1,
  Button = 2,
  StringSelect = 3,
  TextInput = 4,
  UserSelect = 5,
  RoleSelect = 6,
  MentionableSelect = 7,
  ChannelSelect = 8,
}

export interface Button {
  type: ComponentType.Button;
  style: ButtonStyle;
  label?: string;
  emoji?: Partial<Emoji>;
  custom_id?: string;
  sku_id?: string;
  url?: string;
  disabled?: boolean;
}

export enum ButtonStyle {
  Primary = 1,
  Secondary = 2,
  Success = 3,
  Danger = 4,
  Link = 5,
  Premium = 6,
}

export interface SelectMenu {
  type:
    | ComponentType.StringSelect
    | ComponentType.UserSelect
    | ComponentType.RoleSelect
    | ComponentType.MentionableSelect
    | ComponentType.ChannelSelect;
  custom_id: string;
  options?: Array<SelectOption>;
  channel_types?: Array<ChannelType>;
  placeholder?: string;
  default_values?: Array<SelectDefaultValue>;
  min_values?: number;
  max_values?: number;
  disabled: boolean;
}

export interface SelectOption {
  label: string;
  value: string;
  description?: string;
  emoji?: Partial<Emoji>;
  default?: boolean;
}

export interface SelectDefaultValue {
  id: string;
  type: "user" | "role" | "channel";
}

export interface TextInput {
    type: ComponentType.TextInput,
    custom_id: string,
    style: TextInputStyle,
    label: string,
    min_length?: number,
    max_length?: number,
    required?: boolean,
    value?: string,
    placeholder?: string,
}

export enum TextInputStyle {
    Short = 1,
    Paragraph = 2,
}