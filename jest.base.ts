import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testMatch: ["\\.(test|spec)\\.(ts|tsx|js)$"],
  // testMatch: ["**/*.*"],
  moduleFileExtensions: ["ts", "tsx", "js"],
};

export default config;
