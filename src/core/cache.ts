import { PoolOptions } from "./pool.js";

export interface CacheOptions extends PoolOptions {
  self?: boolean;
}

export class Cache {
  public constructor(public readonly options: CacheOptions) {}
}
