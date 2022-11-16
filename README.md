# Jest configuration to run different tests in different files using npm scripts.

## How to run all tests

    npm run test

## How to run unit tests

    npm run test-unit

## How to run integration tests

    npm run test-integration

## How to run pipeline tests

    npm run test-pipeline

## How to use a custom config with the Jest Runner for vscodes

    Install the Jest Runner extension.

    Add this setting to the settings.json file for vscode:

        "jestrunner.configPath": "jest.all.config.ts"

    Use the runner directly in with the editor.

## How to run a specific test

    npm test --config=jest.base.ts -- -t "<name of test>"

    or

    npm test --config=jest.base.ts -- -t "<name of suite>"

    or

    npm test --config=jest.base.ts -- -t "<name of suite> <name of test>"
