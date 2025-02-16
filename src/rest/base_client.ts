import { Params } from "../tools.js";
import * as ty from "../types/index.js";
import { Endpoint } from "./endpoints.js";
export interface RestOptions {
  token: string;
  tokenType: string;
  url: string;
  v: number;
}
export const DefaultRestOptions: RestOptions = {
  token: "",
  tokenType: "Bot",
  url: "https://discord.com/api",
  v: 10,
};

export class BaseClient {
  public readonly options;
  constructor(options: Partial<RestOptions> = DefaultRestOptions) {
    this.options = Object.assign({}, DefaultRestOptions, options);
  }

  public get defaultHeaders() {
    return { Authorization: `${this.options.tokenType} ${this.options.token}` };
  }

  public async request<T extends Endpoint | `${Endpoint}`>(
    path: T,
    params: Params<T>,
    query: object = {},
    options: RequestInit = {}
  ): Promise<Response> {
    const [method, endpoint] = path.split(" ") as [string, string];
    const qp = Object.entries(query)
      .map((key, value) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    const ne = endpoint.replace(/\{(.+?)\}/g, ($, $1) => params[$1 as never]);

    return await fetch(
      `${this.options.url}/v${this.options.v}${ne}${qp.length === 0 ? "" : "?"}${qp}`,
      {
        method,
        headers: this.defaultHeaders,
        ...options,
      }
    );
  }

  public async json<U, T extends Endpoint | `${Endpoint}`>(
    path: T,
    params: Params<T>,
    query: object = {},
    options: RequestInit = {}
  ): Promise<U> {
    const req = await this.request(path, params, query, options);
    if (req.status === 204) {
      return undefined as never; // um. sorry.
    }

    const data = (await req.json()) as U;
    if (req.status >= 400 && req.status <= 499) {
      throw data;
    }

    return data;
  }

  public async arrayBuffer<T extends Endpoint | `${Endpoint}`>(
    path: T,
    params: Params<T>,
    query: object = {},
    options: RequestInit = {}
  ): Promise<ArrayBuffer> {
    const req = await this.request(path, params, query, options);
    if (req.status === 204) {
      return undefined as never; // um. sorry.
    }

    const buf = await req.clone().arrayBuffer();

    if (req.status >= 400 && req.status <= 499) {
      const data = await req.json();
      throw data;
    }

    return buf;
  }
}
