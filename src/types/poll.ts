import { Emoji } from "./emoji.js";

export interface Poll {
  question: PollMedia;
  answers: Array<PollAnswer>;
  expiry?: string;
  allow_multiselect: boolean;
  layout_type: PollLayoutType;
  results?: PollResults;
}

export enum PollLayoutType {
  Default = 1,
}

export interface PollMedia {
  text?: string;
  emoji?: Partial<Emoji>;
}

export interface PollAnswer {
  answer_id: number;
  poll_media: PollMedia;
}

export interface PollResults {
  is_finalized: boolean;
  answer_counts: Array<PollAnswerCount>;
}

export interface PollAnswerCount {
  id: string;
  count: number;
  me_voted: boolean;
}
