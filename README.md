# Jest test devops

This is a template to run test differently in different environment or setup. This enables running tests in local (for devs), using integration tests, unit tests, or tests in the pipeline (by the agent).

## Installation

```bash
npm i
```

## Test locally

```bash
npm run test
```

## Unit tests locally

```bash
npm run test-unit
```

## Integration tests locally

```bash
npm run test-integration
```

## Pipeline tests locally

```bash
npm run test-pipeline
```

## Using the Jest Runner for vscode

- Install the Jest Runner extension.

- The common config file is jest.config.ts

- Use the runner directly in vscode.

