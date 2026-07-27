import { afterEach, describe, expect, it } from "vitest";
import { isProductionSite, siteEnv } from "@/lib/sanity/env";

describe("siteEnv indexing contract", () => {
  const originalSiteEnv = process.env.SITE_ENV;

  afterEach(() => {
    process.env.SITE_ENV = originalSiteEnv;
  });

  it("defaults to staging when SITE_ENV is unset", () => {
    delete process.env.SITE_ENV;
    expect(siteEnv()).toBe("staging");
    expect(isProductionSite()).toBe(false);
  });

  it("defaults to staging for any unrecognized value", () => {
    process.env.SITE_ENV = "prod";
    expect(siteEnv()).toBe("staging");
    expect(isProductionSite()).toBe(false);
  });

  it("only resolves to production for the exact literal 'production'", () => {
    process.env.SITE_ENV = "production";
    expect(siteEnv()).toBe("production");
    expect(isProductionSite()).toBe(true);
  });
});
