import { toPascalCase } from "../tools.js";

export function parseSchema(
  s: any,
  name?: string,
  depth: number = 0,
  ref: (r: any) => string = (s) => s.$ref.slice(s.$ref.lastIndexOf("/") + 1)
) {
  let txt = "";
  if (Object.keys(s).length === 0) {
    const v = "unknown";
    if (name) {
      txt += `export type ${name} = ${v};\n`;
    } else {
      txt += v;
    }

    return txt;
  }
  if (s.$ref) {
    const v = ref(s);
    if (name) {
      txt += `export type ${name} = ${v};\n`;
    } else {
      txt += v;
    }

    return txt;
  }
  if (s.oneOf && s.type === undefined) {
    const v = s.oneOf
      .map((x: any) => parseSchema(x, undefined, undefined, ref))
      .join(" | ");
    if (name) {
      txt += `export type ${name} = ${v};\n`;
    } else {
      txt += v;
    }

    return txt;
  }

  if ("x-discord-union" in s) {
    const v = s.anyOf
      .map((x: any) => parseSchema(x, undefined, undefined, ref))
      .join(" | ");
    if (name) {
      txt += `export type ${name} = ${v};\n`;
    } else {
      txt += v;
    }

    return txt;
  }

  if (Array.isArray(s.type)) {
    txt += s.type
      .map((x: any) =>
        parseSchema(
          Object.assign({}, s, { type: x }),
          undefined,
          undefined,
          ref
        )
      )
      .join(" | ");
  } else if (s.type === "object") {
    // intersection object
    if (s.allOf) {
      // console.log(s.allOf);
      if (name) {
        txt += `export type ${name} = `;
        txt += s.allOf
          .map((x: any) => parseSchema(x, undefined, undefined, ref))
          .join(" & ");
        txt += ";\n\n";
      } else {
        txt += s.allOf
          .map((x: any) => parseSchema(x, undefined, undefined, ref))
          .join(" & ");
      }

      return txt;
    }
    if (name) {
      txt += `export interface ${name} `;
    }

    txt += `{\n`;

    // console.log(s.properties);
    for (const property in s.properties) {
      txt += `${"\t".repeat(depth + 1)}${property}: ${parseSchema(s.properties[property], undefined, depth + 1, ref)};\n`;
    }

    if (s.additionalProperties) {
      const kt = parseSchema(s.additionalProperties, undefined, depth + 1, ref);
      txt += `${"\t".repeat(depth + 2)}[key: string]: ${kt};\n`;
    }
    txt += `${"\t".repeat(depth + (name ? 0 : 1))}}${name ? "\n\n" : ""}`;
  } else if (s.type === "string") {
    if (s.oneOf) {
      if (name) {
        txt += `export enum ${name} {\n`;
        for (const member of s.oneOf) {
          txt += `\t${toPascalCase(member.title)} = "${member.const}",\n`;
        }

        txt += "}\n";
      } else {
        console.log(s);
      }
    } else {
      if (name) {
        txt += `export type ${name} = string;\n`;
      } else {
        txt += "string";
      }
    }
  } else if (s.type === "null") {
    if (name) {
      txt += `export type ${name} = null;\n`;
    } else {
      txt += "null";
    }
  } else if (s.type === "boolean") {
    if (name) {
      txt += `export type ${name} = boolean;\n`;
    } else {
      txt += "boolean";
    }
  } else if (s.type === "integer") {
    const tsKind = s.format === "int64" ? "bigint" : "number";
    if (name) {
      txt += `export type ${name} = ${tsKind};\n`;
    } else {
      txt += tsKind;
    }
  } else if (s.type === "number") {
    if (name) {
      txt += `export type ${name} = number;\n`;
    } else {
      txt += "number";
    }
  } else if (s.type === "array") {
    // console.log(s);
    const v = parseSchema(s.items, undefined, undefined, ref);
    if (name) {
      txt += `export type ${name} = Array<${v}>;\n`;
    } else {
      txt += `Array<${v}>`;
    }
  } else {
    // console.error(`unhandled schema type @ ${name || "?"}: ${s.type}`);
  }

  return txt + (name ? "\n" : "");
}
