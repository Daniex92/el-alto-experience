/**
 * Post-build prerender script for static hosting (Hostinger, GitHub Pages, Netlify, etc.).
 *
 * Steps:
 *  1. Locate the SSR server bundle produced by Nitro (node-server preset).
 *  2. Invoke its fetch handler against "/" to obtain fully rendered HTML.
 *  3. Move client assets from dist/client/assets -> dist/assets.
 *  4. Write dist/index.html.
 *  5. Remove server-only artifacts so dist/ is 100% static.
 */

import { writeFile, rm, cp, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const DIST_DIR = join(process.cwd(), "dist");
const CLIENT_ASSETS = join(DIST_DIR, "client", "assets");
const PUBLIC_ASSETS = join(DIST_DIR, "assets");
const HTML_DST = join(DIST_DIR, "index.html");

async function findServerEntry() {
  const candidates = [
    join(DIST_DIR, "server", "index.mjs"),
    join(DIST_DIR, "server", "server.mjs"),
    join(DIST_DIR, "index.mjs"),
    join(DIST_DIR, "_worker.js", "index.js"),
  ];
  for (const p of candidates) {
    if (existsSync(p)) return p;
  }
  throw new Error(
    "Could not locate SSR server entry in dist/. Looked at:\n  " +
      candidates.join("\n  "),
  );
}

async function prerender() {
  console.log("[prerender] Locating server entry...");
  const entry = await findServerEntry();
  console.log("[prerender] Using:", entry);

  const mod = await import(pathToFileURL(entry).href);
  const server = mod.default || mod;

  if (typeof server.fetch !== "function") {
    throw new Error("Server bundle does not expose a fetch() handler.");
  }

  const request = new Request("http://localhost/");
  const response = await server.fetch(request, {}, {
    waitUntil: () => {},
    passThroughOnException: () => {},
  });

  if (!response.ok) {
    throw new Error(
      `Server returned ${response.status}: ${await response.text()}`,
    );
  }

  const html = await response.text();

  if (existsSync(CLIENT_ASSETS)) {
    await rm(PUBLIC_ASSETS, { recursive: true, force: true });
    await cp(CLIENT_ASSETS, PUBLIC_ASSETS, { recursive: true });
    console.log("[prerender] Copied client assets -> dist/assets/");
  }

  // Also copy any non-asset files (favicons, robots.txt, etc.) from dist/client
  const clientDir = join(DIST_DIR, "client");
  if (existsSync(clientDir)) {
    const entries = await readdir(clientDir);
    for (const name of entries) {
      if (name === "assets") continue;
      const src = join(clientDir, name);
      const dst = join(DIST_DIR, name);
      const s = await stat(src);
      await cp(src, dst, { recursive: s.isDirectory() });
    }
  }

  await writeFile(HTML_DST, html);
  console.log("[prerender] Wrote dist/index.html");

  const toRemove = [
    join(DIST_DIR, "server"),
    join(DIST_DIR, "client"),
    join(DIST_DIR, "nitro.json"),
    join(DIST_DIR, "package.json"),
    join(DIST_DIR, "package-lock.json"),
    join(DIST_DIR, "wrangler.json"),
    join(DIST_DIR, "_worker.js"),
  ];
  for (const p of toRemove) {
    await rm(p, { recursive: true, force: true });
  }
  console.log("[prerender] Cleaned server artifacts");

  const final = await readdir(DIST_DIR, { recursive: true });
  console.log("[prerender] Final dist/ contents:");
  for (const f of final.sort()) console.log("  -", f);

  console.log("[prerender] Done. Upload the dist/ folder to Hostinger.");
}

prerender().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
