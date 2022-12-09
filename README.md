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

## Run in the pipeline

- Setup a Github repository supporting workflow and use the appropriate branch names (see workflow definitions).

- Push or make an appropriate PR to trigger the workflow. the pipeline tests will automatically run.

## Using the Jest Runner for vscode

- Install the Jest Runner extension.

- The common config file is jest.config.ts

- Use the runner directly in vscode.

