import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(new URL("..", import.meta.url).pathname);
const clientRoot = join(projectRoot, "dist", "client");
const serverEntry = join(projectRoot, "dist", "server", "index.js");
const outputRoot = join(projectRoot, "pages-dist");
const basePath = (process.env.GITHUB_PAGES_BASE_PATH || "/hiprime-led").replace(/\/$/, "");
const pagesUrl = (process.env.GITHUB_PAGES_URL || "https://marcosfurquim.github.io/hiprime-led").replace(/\/$/, "");

function prefixStaticPaths(html) {
  return html
    .replace(/([="'(])\/_next\//g, `$1${basePath}/_next/`)
    .replace(
      /([="'(])\/(hiprime-flyer\.jpg|led-repair-workshop\.webp|og\.png)/g,
      `$1${basePath}/$2`,
    )
    .replaceAll(
      "https://hiprime-led.marcosfurquim.chatgpt.site",
      pagesUrl,
    );
}

function removeRuntimeScripts(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*\/?>/gi, "");
}

async function renderPage() {
  const workerUrl = pathToFileURL(serverEntry);
  workerUrl.searchParams.set("pages-export", `${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("https://marcosfurquim.github.io/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Static render failed with HTTP ${response.status}`);
  }

  let html = await response.text();
  html = removeRuntimeScripts(html);
  html = prefixStaticPaths(html);
  html = html.replace(
    "</head>",
    `<link rel="canonical" href="${pagesUrl}/"/></head>`,
  );
  return html;
}

async function rewriteCssAssets() {
  const cssRoot = join(outputRoot, "_next", "static", "css");
  const entries = await readdir(cssRoot, { withFileTypes: true });

  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".css"))
      .map(async (entry) => {
        const cssPath = join(cssRoot, entry.name);
        const css = await readFile(cssPath, "utf8");
        await writeFile(
          cssPath,
          css.replaceAll(
            "url(/led-repair-workshop.webp)",
            `url(${basePath}/led-repair-workshop.webp)`,
          ),
        );
      }),
  );
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(clientRoot, outputRoot, { recursive: true });

for (const disposable of [
  ".assetsignore",
  ".vite",
  "_headers",
  "vinext-client-entry-manifest.json",
]) {
  await rm(join(outputRoot, disposable), { recursive: true, force: true });
}

const html = await renderPage();
await writeFile(join(outputRoot, "index.html"), html);
await writeFile(join(outputRoot, "404.html"), html);
await writeFile(join(outputRoot, ".nojekyll"), "");
await rewriteCssAssets();

console.log(`GitHub Pages export created at ${outputRoot}`);
