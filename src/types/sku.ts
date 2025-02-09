export interface Sku {
  id: string;
  type: SkuType;
  application_id: string;
  name: string;
  slug: string;
  flags: number;
}

export enum SkuType {
  Durable = 2,
  Consumable = 3,
  Subscription = 5,
  SubscriptionGroup = 6,
}

export enum SkuFlags {
  Available = 1 << 2,
  GuildSubscription = 1 << 7,
  UserSubscription = 1 << 8,
}
