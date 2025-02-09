export interface Entitlement {
    id: string;
    sku_id: string;
    application_id: string;
    user_id?: string;
    type: EntitlementType;
    deleted: boolean;
    starts_at?: string;
    ends_at?: string;
    guild_id?: string;
    consumed?: boolean;
}

export enum EntitlementType {
    Purchase = 1,
    PremiumSubscription = 2,
    DeveloperGift = 3,
    TestModePurchase = 4,
    FreePurchase = 5,
    UserGift = 6,
    PremiumPurchase = 7,
    ApplicationSubscription = 8,
}