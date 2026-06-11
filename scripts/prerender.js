/**
 * Post-build prerender script for static hosting (GitHub Pages).
 *
 * This script:
 * 1. Imports the Nitro server bundle generated during `vite build`
 * 2. Makes a request to the root route to get the SSR HTML
 * 3. Writes the HTML to `dist/index.html`
 * 4. Moves client assets to `dist/assets/` so paths align with `base: "/el-alto-experience/"`
 * 5. Cleans up server-only files that are not needed for static hosting
 */

import { mkdir, writeFile, rm, cp, readdir } from "node:fs/promises";
import { join } from "node:path";

const DIST_DIR = join(process.cwd(), "dist");
const SERVER_ENTRY = join(DIST_DIR, "server", "index.mjs");
const ASSETS_SRC = join(DIST_DIR, "client", "assets");
const ASSETS_DST = join(DIST_DIR, "assets");
const HTML_DST = join(DIST_DIR, "index.html");

async function prerender() {
  console.log("[prerender] Starting static generation...");

  // 1. Import the server bundle
  const mod = await import(SERVER_ENTRY);
  const server = mod.default || mod;

  const mockContext = {
    waitUntil: () => {},
    passThroughOnException: () => {},
  };

  // 2. Request the root route (aligned with router basepath)
  const request = new Request("http://localhost/el-alto-experience/");
  const response = await server.fetch(request, {}, mockContext);

  if (!response.ok) {
    throw new Error(`Server returned ${response.status}: ${await response.text()}`);
  }

  let html = await response.text();

  // 3. Move assets from dist/client/assets to dist/assets
  await rm(ASSETS_DST, { recursive: true, force: true });
  await cp(ASSETS_SRC, ASSETS_DST, { recursive: true });
  console.log("[prerender] Assets copied to dist/assets/");

  // 4. Write the prerendered HTML
  await writeFile(HTML_DST, html);
  console.log("[prerender] Written dist/index.html");

  // 5. Clean up server-only artifacts not needed for static hosting
  const toRemove = [
    join(DIST_DIR, "server"),
    join(DIST_DIR, "client"),
    join(DIST_DIR, "nitro.json"),
    join(DIST_DIR, "package.json"),
    join(DIST_DIR, "package-lock.json"),
    join(DIST_DIR, "wrangler.json"),
  ];

  for (const p of toRemove) {
    await rm(p, { recursive: true, force: true });
  }
  console.log("[prerender] Cleaned up server artifacts");

  // 6. Verify final structure
  const files = await readdir(DIST_DIR, { recursive: true });
  console.log("[prerender] Final dist/ contents:");
  for (const f of files.sort()) {
    console.log("  -", f);
  }

  console.log("[prerender] Static generation complete!");
}

prerender().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
