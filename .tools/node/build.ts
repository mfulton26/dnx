#!/usr/bin/env -S deno run --allow-env=DENO_AUTH_TOKENS,DENO_DIR,HOME,XDG_CACHE_HOME --allow-read --allow-write --allow-run=npm --allow-net=deno.land

import {
  build,
  BuildOptions,
  emptyDir,
} from "https://deno.land/x/dnt@0.30.0/mod.ts";

const outDir = "./node";

await emptyDir(outDir);

await build({
  entryPoints: await getEntryPoints(),
  outDir,
  importMap: "./importMap.json",
  shims: { deno: "dev" },
  package: {
    name: "dnx",
    version: Deno.args[0]?.replace(/^v/, ""),
    description: "Fluent modular JavaScript utility library.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/mfulton26/dnx.git",
    },
    bugs: { url: "https://github.com/mfulton26/dnx/issues" },
    keywords: ["stdlib", "util"],
  },
});

await Deno.copyFile("LICENSE", `${outDir}/LICENSE`);
await Deno.copyFile("README.md", `${outDir}/README.md`);

async function getEntryPoints() {
  const result: BuildOptions["entryPoints"] = [];

  for await (const entry of Deno.readDir("./")) {
    if (entry.isDirectory || !/^(?!\.).+(?<!\.test)\.ts$/.test(entry.name)) {
      continue;
    }

    const key = entry.name.slice(0, entry.name.lastIndexOf("."));
    result.push({ name: `./${key}`, path: `./${entry.name}` });
  }

  return result;
}
