import { User } from "./user.js";

export interface SoundboardSound {
  name: string;
  sound_id: string;
  volume: number;
  emoji_id?: string;
  emoji_name?: string;
  guild_id?: string;
  available: boolean;
  user?: User;
}
