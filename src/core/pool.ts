export interface PoolOptions {
  enabled?: boolean;
  expiry?: number;
  maxKeys?: number;
}

export abstract class Pool<K, V> {
  private map = new Map<K, V>();

  constructor(private readonly options: PoolOptions = {}) {}

  public set(key: K, value: V): void {
    if (this.options.enabled === false) {
      return;
    }

    if (this.options.maxKeys && this.map.size >= this.options.maxKeys) {
      this.evict();
    }

    this.map.set(key, value);
    if (this.options.expiry) {
      setTimeout(() => this.map.delete(key), this.options.expiry);
    }
  }

  public get(key: K): V | undefined {
    return this.map.get(key);
  }

  public has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  public delete(key: K): boolean {
    return this.map.delete(key);
  }

  public clear(): void {
    this.map.clear();
  }

  private evict(): void {
    const oldestKey = this.map.keys().next().value;
    if (oldestKey !== undefined) {
      this.map.delete(oldestKey);
    }
  }

  public abstract getOrFetch(key: K): Promise<V>;
}
