import { MyService } from ".";

describe("Test runner", () => {
  /** To use with the jest runner extension, and the appropriate config:
   * Add this config in your settings.json:
   * "jestrunner.configPath": "jest.all.config.ts"
   */
  test("Get secret", () => {
    const secret = process.env.MY_SECRET;
    expect(secret).toBeDefined();
    expect(secret?.length).toBeGreaterThan(0);
  });

  /** Add this line to the .env.screts file (not committed):
   * MY_LOCAL_SECRET=<enter any secret>
   */
  test("Get a local secret", () => {
    const secret = process.env.MY_LOCAL_SECRET;
    expect(secret).toBeDefined();
    expect(secret?.length).toBeGreaterThan(0);
  });
});
