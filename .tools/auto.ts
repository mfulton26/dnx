// WIP
// plan: auto-generate all the mundane files

import { walk } from "std/fs/walk.ts";

const regExp = /^(?<constructorName>[^/]+)\/methods\/(?<methodName>[^./]+)\.ts$/;

for await (const entry of walk(".", { match: [regExp] })) {
  console.log(entry.name, entry.path);
}

for await (const { kind, paths } of Deno.watchFs(".", { recursive: true })) {
  for (const path of paths) {
    if (!/\/methods\/[a-zA-Z]+.ts$/.test(path)) continue;
    console.log(kind, path);
  }
}
