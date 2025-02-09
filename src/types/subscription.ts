export interface Subscription {
  id: string;
  user_id: string;
  sku_ids: Array<string>;
  entitlement_ids: Array<string>;
  renewal_sku_ids?: Array<string>;
  current_period_start: string;
  current_period_end: string;
  status: SubscriptionStatus;
  canceled_at?: string;
  country?: string;
}

export enum SubscriptionStatus {
  Active,
  Ending,
  Inactive,
}
