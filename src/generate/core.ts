import * as fs from "node:fs";
import { parseSchema } from "./parseSchema.js";
import { client } from "./client.js";
export async function generate() {
  const t: any = await fetch(
    "https://raw.githubusercontent.com/discord/discord-api-spec/refs/heads/main/specs/openapi.json"
  )
    .then((x) => x.text())
    .then((x) => JSON.parse(x));
  const header = `// auto-generated file from discord's OpenAPI spec. do not modify.`;
  let ep_text = `${header}\nexport enum Endpoint {\n`;
  for (const path in t.paths) {
    const data = t.paths[path];
    // console.log(path);

    for (const method in data) {
      if (method === "parameters") {
        continue;
      }

      const specific = data[method];

      const pascal = specific.operationId.replace(
        /^(.)|_(.)/g,
        (_: string, $1: string, $2: string) => ($1 || $2).toUpperCase()
      );

      ep_text += `\t${pascal} = '${method.toUpperCase()} ${path}',\n`;
    }
  }

  ep_text += "}";

  fs.writeFileSync("src/rest/endpoints.ts", ep_text);

  let ty_text = `${header}\n`;
  for (const component in t.components.schemas) {
    ty_text += parseSchema(t.components.schemas[component], component);
  }
//   console.log(t);
  for (const component in t.components.responses) {
    // console.log(component);
    const m = parseSchema(
      t.components.responses[component].content["application/json"].schema,
      component
    );
    // console.log(m);
    ty_text += m;
  }
  fs.writeFileSync("src/rest/types.ts", ty_text);

  let cl_text = `${header}\nimport { BaseClient } from "./base_client.js";\nimport { Endpoint } from "./endpoints.js";\nimport * as ty from "./types.js";\nexport class RestClient extends BaseClient {\n`;
  cl_text += client(t.paths);
  cl_text += "}";
  fs.writeFileSync("src/rest/client.ts", cl_text);
}
