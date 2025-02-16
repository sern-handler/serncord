import { GatewayIntents } from "./gateway/types.js";

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class BitSet<T> {
  public constructor(
    private readonly map: T,
    private val: number = 0
  ) {}

  public all(): this {
    this.val = Object.values(this.map as never).reduce(
      (p, v) => (p as number) | (v as number),
      0
    ) as never;
    return this;
  }

  public bits(): number {
    return this.val;
  }

  public mask(key: keyof T): number {
    return Object.entries(this.map as never).find(
      (x) => x[0] === key
    )![1] as number;
  }

  public has(key: keyof T): boolean {
    return (this.val & this.mask(key)) !== 0;
  }

  public set(key: keyof T, value: boolean): this {
    if (value) {
      return this.add(key);
    } else {
      return this.remove(key);
    }
  }

  public add(key: keyof T): this {
    this.val |= this.mask(key);
    return this;
  }

  public remove(key: keyof T): this {
    this.val &= ~this.mask(key);
    return this;
  }

  public toggle(key: keyof T): this {
    this.val ^= this.mask(key);
    return this;
  }

  public keys(): Array<keyof T> {
    return Object.keys(this.map as never).filter((x) =>
      this.has(x as never)
    ) as never;
  }

  public values(): Array<T[keyof T]> {
    return Object.entries(this.map as never)
      .filter((x) => this.has(x[0] as never))
      .map((x) => x[1]) as never;
  }
}

export class Intents extends BitSet<typeof GatewayIntents> {
  constructor(val: number = 0) {
    super(GatewayIntents, val);
  }
}

export type Params<
  T extends string,
  M = {},
> = T extends `${string}{${infer V}}${infer R}`
  ? Params<R, Add<M, V, { toString(): string }>>
  : M;

export type Add<T, K extends string, V> = {
  [P in K | keyof T]: P extends K ? V : P extends keyof T ? T[P] : never;
};

export function toPascalCase(s: string) {
  return s
    .toLowerCase()
    .replace(/^(.)|[_\- ](.)/g, (_, $1, $2) => ($1 || $2).toUpperCase());
}

export function toCamelCase(s: string) {
  return s.toLowerCase().replace(/[_\- ](.)/g, (_, $1) => $1.toUpperCase());
}
