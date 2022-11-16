import type { Config } from "@jest/types";

require("dotenv").config({
  path: ".env",
});
require("dotenv").config({
  path: ".env.tests",
});
require("dotenv").config({
  path: ".env.secrets",
});

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testRegex: "(/__tests__/.*|unit\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
};

export default config;
