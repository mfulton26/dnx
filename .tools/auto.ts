import { walk } from "std/fs/walk.ts";

const data = await loadData();

await writeSymbolFiles();
await writeTypeMethodFiles();
await writeRootMethodFiles();

async function loadData() {
  const result = new Map<string, Set<string>>();
  const regExp = /^(?<typeName>[^/]+)\/methods\/(?<methodName>[^./]+)\.ts$/;
  for await (const entry of walk(".", { match: [regExp] })) {
    const { typeName, methodName } = regExp.exec(entry.path)!.groups!;
    if (!result.has(methodName)) result.set(methodName, new Set());
    result.get(methodName)!.add(typeName);
  }
  return result;
}

async function writeSymbolFiles() {
  for (const methodName of data.keys()) {
    await Deno.writeTextFile(
      `symbols/${methodName}.ts`,
      symbolFileData(methodName),
    );
  }

  function symbolFileData(methodName: string) {
    return `const ${methodName} = Symbol();\n\nexport default ${methodName};\n`;
  }
}

async function writeTypeMethodFiles() {
  for (const [methodName, typeNames] of data) {
    for (const typeName of typeNames) {
      await Deno.writeTextFile(
        `${typeName}/${methodName}.ts`,
        typeMethodFileData(methodName, typeName),
      );
    }
  }

  function typeMethodFileData(methodName: string, typeName: string) {
    return `${imports()}\n${declareGlobalAugmentation()}\n${globalAugmentation()}\n${defaultExport()}\n`;

    function imports() {
      let result = "";
      switch (typeName) {
        case "Iterator":
        case "AsyncIterator":
          result += `import * as ${typeName} from "../${typeName}.ts";\n\n`;
      }
      result += `import key from "../symbols/${methodName}.ts";\n`;
      result += `import value from "./methods/${methodName}.ts";\n`;
      return result;
    }

    function declareGlobalAugmentation() {
      return `declare global {
${
        typeNameArray()
          .map((typeName) =>
            `  interface ${typeName}${
              typeNameGenerics(typeName)
            } {\n    [key]: typeof value;\n  }`
          )
          .join("\n")
      }
}
`;

      function typeNameArray() {
        switch (typeName) {
          case "Array":
          case "Set":
          case "Map":
            return [typeName, `Readonly${typeName}`];
          default:
            return [typeName];
        }
      }

      function typeNameGenerics(typeName: string) {
        switch (typeName) {
          case "Array":
          case "AsyncIterator":
          case "Iterator":
          case "ReadonlyArray":
          case "ReadonlySet":
          case "Set":
          case "WeakSet":
            return "<T>";
          case "Map":
          case "ReadonlyMap":
          case "WeakMap":
            return "<K, V>";
          default:
            return "";
        }
      }
    }

    function globalAugmentation() {
      return `Object.defineProperty(${target(typeName)}, key, { value });\n`;

      function target(typeName: string) {
        switch (typeName) {
          case "Math":
            return typeName;
          default:
            if (typeName.endsWith("Constructor")) {
              return typeName.slice(0, -"Constructor".length);
            }
            return `${typeName}.prototype`;
        }
      }
    }

    function defaultExport() {
      return "export default key;";
    }
  }
}

async function writeRootMethodFiles() {
  for (const [methodName, typeNames] of data) {
    await Deno.writeTextFile(
      `${methodName}.ts`,
      rootMethodFileData(methodName, [...typeNames]),
    );
  }

  function rootMethodFileData(methodName: string, typeNames: string[]) {
    return `${reexportDefault()}\n${imports()}`;

    function reexportDefault() {
      return `export { default } from "./symbols/${methodName}.ts";\n`;
    }

    function imports() {
      return `${typeNames.map(importStatement).join("\n")}\n`;

      function importStatement(typeName: string) {
        return `import "./${typeName}/${methodName}.ts";`;
      }
    }
  }
}

// todo: create watch mode

// for await (const { kind, paths } of Deno.watchFs(".", { recursive: true })) {
//   for (const path of paths) {
//     if (!/\/methods\/[a-zA-Z]+.ts$/.test(path)) continue;
//     console.log(kind, path);
//   }
// }
