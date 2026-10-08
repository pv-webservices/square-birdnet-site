// Playwright MCP browser_run_code_unsafe filename input; no new project dependency.
async (page) => {
  const results = [];
  for (const base of ["https://squarebirdnet.com", "http://localhost:3107"]) {
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(`${base}/`, { waitUntil: "networkidle" });
      if (response.status() !== 200) throw new Error(`${base}: homepage HTTP ${response.status()}`);
      if (width === 390) {
        await page.getByRole("button", { name: /open menu/i }).click();
        await page.getByRole("navigation", { name: "Mobile", exact: true })
          .getByRole("button", { name: /services/i }).click();
      }
      const nav = page.getByRole("navigation", { name: width === 390 ? "Mobile" : "Primary", exact: true });
      const hrefs = await nav.locator("a").evaluateAll(nodes => nodes.map(node => node.getAttribute("href")));
      const expected = ["/", "/about", "/services", "/projects", "/videos", "/faq", "/contact",
        "/services/bird-netting", "/services/invisible-grill", "/services/bird-spikes", "/services/cricket-net"];
      for (const href of expected) {
        if (!hrefs.includes(href)) throw new Error(`${base} ${width}px: navigation missing ${href}`);
      }
      await nav.locator('a[href="/about"]').click();
      await page.waitForURL(`${base}/about`);
      if (!await page.locator("h1").innerText()) throw new Error(`${base}: empty About H1`);
      if (await page.locator('link[rel="canonical"]').getAttribute("href") !== "https://squarebirdnet.com/about") {
        throw new Error(`${base}: wrong About canonical`);
      }
      if (width === 390 && await page.getByRole("dialog", { name: "Site menu" }).count()) {
        throw new Error(`${base}: mobile drawer did not close after navigation`);
      }
      results.push({ base, width, hrefs, clicked: "/about", finalUrl: page.url(), result: "PASS" });
    }
  }
  return results;
}
