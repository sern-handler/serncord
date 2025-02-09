import { User } from "./user.js";

export interface Team {
  icon?: string;
  id: string;
  members: Array<TeamMember>;
  name: string;
  owner_user_id: string;
}

export interface TeamMember {
  membership_state: TeamMembershipState;
  team_id: string;
  user: Partial<User>;
  role: TeamRole;
}

export enum TeamRole {
  Owner = "owner",
  Admin = "admin",
  Developer = "developer",
  ReadOnly = "read_only",
}

export enum TeamMembershipState {
  Invited = 1,
  Accepted = 2,
}
