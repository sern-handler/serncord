import { Gateway } from "../gateway/index.js";
import { RestClient } from "../rest/client.js";
import { Intents } from "../tools.js";
import { Cache, CacheOptions } from "./cache.js";

export interface ClientOptions {
  token: string;
  intents: Intents;
  cacheOptions: CacheOptions;
}
export class Client {
  public readonly rest: RestClient;
  public readonly gw: Gateway;
  public readonly cache: Cache;
  public constructor(public readonly options: ClientOptions) {
    this.rest = new RestClient({ token: this.options.token });
    this.gw = new Gateway({
      token: this.options.token,
      intents: this.options.intents,
    });
    this.cache = new Cache(this.options.cacheOptions);
  }

  public async login() {
    this.gw.login();
  }
}
