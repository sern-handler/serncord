import { toCamelCase, toPascalCase } from "../tools.js";
import { parseSchema } from "./parseSchema.js";

export function client(paths: any) {
  const rf = (s: any) => "ty." + s.$ref.slice(s.$ref.lastIndexOf("/") + 1);
  let txt = "";
  for (const path in paths) {
    const spec = paths[path];
    for (const method in spec) {
      if (method === "parameters") {
        continue;
      }

      const p = spec[method];

      const pms = (spec.parameters || []).map(
        (x: any) =>
          `\t\t${x.name}: ${parseSchema(x.schema, undefined, undefined, rf)}`
      );

      const rts = [];
      let isBuf = false;
      for (const code in p.responses) {
        const ty = p.responses[code];
        // console.log(code);

        if (code === "4XX") {
          continue;
        }
        if ("$ref" in ty) {
          rts.push(parseSchema(ty, undefined, undefined, rf));
        } else if (ty.content && !("application/json" in ty.content)) {
          rts.push("ArrayBuffer");
          isBuf = true;
        } else if (ty.content && "application/json" in ty.content) {
          rts.push(
            parseSchema(
              ty.content["application/json"].schema,
              undefined,
              undefined,
              rf
            )
          );
        } else if (ty.content === undefined) {
          rts.push("void");
        }
      }

      let hasBody = false;
      let mpBody = false;
      if (p.requestBody) {
        if ("application/json" in p.requestBody.content) {
          const tty = parseSchema(
            p.requestBody.content["application/json"].schema,
            undefined,
            2,
            rf
          );

          hasBody = true;
          pms.push(`\t\tbody: ${tty}`);
        } else if ("multipart/form-data" in p.requestBody.content) {
          const tty = parseSchema(
            p.requestBody.content["multipart/form-data"].schema,
            undefined,
            2,
            rf
          );

          mpBody = true;
          pms.push(`\t\tmpbody: ${tty}`);
        }
      }

      pms.push(`\t\textra: RequestInit = {}`);

      txt += `\tpublic async ${toCamelCase(p.operationId)}(\n${pms.join(",\n")}\n\t): `;
      txt += `Promise<${rts.join(" | ")}> {\n`;
      txt += `\t\treturn await this.${isBuf ? "arrayBuffer" : "json"}(Endpoint.${toPascalCase(p.operationId)}, { ${(spec.parameters || []).map((x: any) => x.name).join(", ")} },\n\t\t\t{\n`;
      if (hasBody) {
        txt += `\t\t\t\tbody: JSON.stringify(body),\n\t\t\t\t...extra,\n`;
      } else if (mpBody) {
        txt += `\t\t\t\tbody: Object.entries(mpbody).reduce((p,v)=>{p.append(v[0],v[1]);return p},new FormData()),\n\t\t\t\theaders: { ...this.defaultHeaders, 'Content-Type': 'multipart/form-data' },\n\t\t\t\t...extra,\n`;
      } else {
        txt += `\t\t\t\t...extra\n`;
      }
      txt += "\t\t\t}\n\t\t);\n";
      txt += `\t}\n\n`;
    }
  }
  return txt;
}
