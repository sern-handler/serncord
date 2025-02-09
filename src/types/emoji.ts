import { User } from "./user.js";

export interface Emoji {
  id?: string;
  name?: string;
  roles?: Array<string>;
  user?: User;
  require_colons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}
