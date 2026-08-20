# @myndui/cli

One command to add the [Myndui MCP server](https://www.npmjs.com/package/@myndui/mcp)
to your AI IDE. It writes the MCP config for you — no manual JSON editing.

## Usage

```bash
npx @myndui/cli@latest install cursor
```

Then **restart your IDE** and ask it for any Myndui component.

### Supported clients

```bash
npx @myndui/cli@latest install <client>
```

- `cursor`
- `windsurf`
- `claude` (Claude Desktop)
- `cline`
- `roo-cline`

The command merges the Myndui server into the client's existing MCP config
(creating it if needed) without touching your other servers.

## What it writes

```json
{
  "mcpServers": {
    "myndui": {
      "command": "npx",
      "args": ["-y", "@myndui/mcp@latest"]
    }
  }
}
```

Prefer to do it by hand? See the [Manual install](https://myndui.design/docs/mcp).

## License

MIT
