# forge-rovo-action-context-echo

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

A sample [Atlassian Forge](https://developer.atlassian.com/platform/forge/) app that defines a Rovo agent and action for echoing back the current Rovo request, including the Rovo context object (`cloudId`, `moduleKey`, and any Jira or Confluence detail) that Rovo sends to Forge actions. Use it as a reference for inspecting exactly what payload your own Rovo agent actions receive.

## How it works

The manifest declares one Rovo agent ("Request Echoer") with one action, `echo-request`. When invoked, the `echoRequest` function (`src/index.ts`) serializes the incoming request — including the Rovo `context` and an optional `message` input — back to the caller as JSON. The agent's prompt (`prompts/agent-instructions.md`) tells Rovo to render that JSON in a code block. A lifecycle trigger also logs app install/upgrade events, and a webtrigger (`dev-trigger`) echoes any request body for testing outside of Rovo.

## Prerequisites

- Node.js v24.11.0 (see `.nvmrc`)
- [Forge CLI](https://developer.atlassian.com/platform/forge/getting-started/), logged in (`forge login`) with a Forge-enabled Atlassian site to install into

## Install and run

Install dependencies, then deploy and install the app on a development site:

```shell
npm install
forge deploy
forge install
```

Open a chat with the "Request Echoer" agent in Rovo and try the conversation starter "Echo the current request." The agent responds with the JSON payload it received, including the current Rovo context.

## Scripts

| Command | Description |
| --- | --- |
| `npm run check` | Lint and format with Biome, applying fixes |
| `npm run format` | Format code with Biome |
| `npm run lint` | Lint code with Biome |
| `npm run changelog` | Generate a changelog with `git-cliff` |
| `npm run eval` | Run the promptfoo evals in `promptfooconfig.yaml` against the agent prompt |
| `npm run view` | Open the promptfoo results viewer |
| `npm run build` | Compile TypeScript with `tsc` |
| `npm run clean` | Remove the `dist` build output |
| `npm test` | Run unit tests with Vitest |
| `npm run actiontypes` | Regenerate `src/actionpayload.ts` from the actions defined in `manifest.yml` |

`npm run eval` calls the Google Gemini providers configured in `promptfooconfig.yaml` and requires valid provider credentials.

## Contributing

Contributions, issues, and comments are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). This project follows the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Copyright (c) 2025 Atlassian US., Inc. Apache 2.0 licensed, see [LICENSE](LICENSE) for details.
