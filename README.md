# Discordeno

[![Discord](https://img.shields.io/discord/785384884197392384?color=7289da&logo=discord&logoColor=dark)](https://discord.com/invite/5vBgXk3UcZ)
![Lint](https://github.com/discordeno/discordeno/workflows/Lint/badge.svg)
![Test](https://github.com/discordeno/discordeno/workflows/Test/badge.svg)

Discord API library for Deno

- **Secure & stable**: Discordeno internally handle Discord rate-limitation and checks for required permission(s) before performing an API request to avoid IP ban from Discord.
- **Functional API**: Overall neat, efficient and performant API, while removing the nuisances of extending built-in classes and inheritance. This approach avoids potential memory leaks, crashes and other silly issues.
- **100% API coverage**: 
- **TypeScript & JavaScript support**: Discordeno utilizes latest TypeScript and JavaScript. Types are always up-to-date and accurate.

## Usage

### Boilerplate

Don't worry a lot of developers start out coding their first projects as a Discord bot (I did 😉) and it is not so easy to do so. Discordeno is built considering all the issues with pre-existing libraries and issues that I had when I first started out coding bots. 
If you are a beginner developer, you may check out these awesome official and unofficial boilerplates:

- [Official Discordeno Boilerplate](https://github.com/Skillz4Killz/Discordeno-bot-template)
- [Dencord Starter](https://github.com/ayntee/dencord-starter)
- [Add your Own]

If you do not wish to use a boilerplate, you may continue reading.

### Example

Here's a minimal example to get started with:

```typescript
import { startBot, sendMessage, Intents } from "https://deno.land/x/discordeno@10.0.0/mod.ts";

startBot({
  token: "BOT TOKEN",
  intents: [Intents.GUILDS, Intents.GUILD_MESSAGES],
  eventHandlers: {
    ready: () => console.log('Successfully connected to the gateway'),
    messageCreate(message) {
      if (message.content === "ping") {
        sendMessage(message.channelID, "Pong using Discordeno!");
      }
    },
  },
});
```

## Links

- [Website/Guide](https://discordeno.mod.land)
- [Documentation](https://doc.deno.land/https/deno.land/x/discordeno/mod.ts)
- [Discord](https://discord.com/invite/5vBgXk3UcZ)

## Contributing

We appreciate your help!

Before contributing, please read the [Contributing Guide](https://github.com/discordeno/discordeno/blob/master/.github/CONTRIBUTING.md).

### License

[MIT © discordeno](https://github.com/discordeno/discordeno/blob/master/LICENSE)
