import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
}

test("server-renders the complete HiPrime LED landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>HiPrime LED \| LED Screen &amp; Module Repair in Florida<\/title>/i);
  assert.match(html, /Because/);
  assert.match(html, /Every/);
  assert.match(html, /Pixel/);
  assert.match(html, /Counts/);
  assert.match(html, /LED SCREEN/);
  assert.match(html, /REPAIR/);
  assert.match(html, /EXPERTS/);
  assert.match(html, /Dead pixels &amp; modules/);
  assert.match(html, /LED module repair/);
  assert.match(html, /Precision inspection/);
  assert.match(html, /Expert soldering/);
  assert.match(html, /System diagnostics/);
  assert.match(html, /Final quality test/);
  assert.match(html, /led-repair-workshop\.webp/);
  assert.doesNotMatch(html, /hiprime-flyer\.jpg/);
  assert.match(html, /tel:\+15618662936/);
  assert.match(html, /mailto:eduffurquim@gmail\.com/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /ProfessionalService/);
});

test("does not ship the disposable starter preview", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /codex-preview/);
  assert.doesNotMatch(html, /Your site is taking shape/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
  assert.doesNotMatch(html, /SkeletonPreview/);
});
