# Discordeno

> Discord API library for Deno

[![Discord](https://img.shields.io/discord/785384884197392384?color=7289da&logo=discord&logoColor=dark)](https://discord.com/invite/5vBgXk3UcZ)
![Lint](https://github.com/discordeno/discordeno/workflows/Lint/badge.svg)
![Test](https://github.com/discordeno/discordeno/workflows/Test/badge.svg)

- First-class TypeScript & JavaScript support
- Security & stable
- Builtin Documentation
- Minimalistic
- Functional API
- Actively maintained

### Beginner Developers

Don't worry a lot of developers start out coding their first projects as a Discord bot (I did 😉) and it is not so easy to do so. Discordeno is built considering all the issues with pre-existing libraries and issues that I had when I first started out coding bots. 
If you are a beginner developer, you may check out these awesome official and unofficial boilerplates:

- Official Discordeno Boilerplate
  - [GitHub](https://github.com/Skillz4Killz/Discordeno-bot-template)
  - [Features](https://github.com/Skillz4Killz/Discordeno-bot-template#features)
  
If you do not wish to use a boilerplate, you may continue reading.

### Advanced Developers

Here's a minimal example to get started with:

```typescript
import startBot, { sendMessage, Intents } from "https://deno.land/x/discordeno@9.4.0/mod.ts";

startBot({
  token: "BOT TOKEN",
  intents: [Intents.GUILD_MESSAGES, Intents.GUILDS],
  eventHandlers: {
    ready: () => console.log('Successfully connected to gateway'),
    messageCreate: (message) => {
      if (message.content === "hello") {
        sendMessage(message.channelID, "Hi there!");
      }
    },
  },
});
```

## Documentation

- [Website](https://discordeno.mod.land)
- [Support server](https://discord.com/invite/5vBgXk3UcZ)
- [Contributing Guide](https://github.com/discordeno/discordeno/blob/master/.github/CONTRIBUTING.md)

## Contributing

## Code of Conduct

Discordeno expects participants to adhere to our [Code of Conduct](https://github.com/discordeno/discordeno/blob/master/.github/CODE_OF_CONDUCT.md).

## Contributing Guide

We appreciate your help!

Before contributing, please read the [Contributing Guide](https://github.com/discordeno/discordeno/blob/master/.github/CONTRIBUTING.md).

### License

[MIT © discordeno](https://github.com/discordeno/discordeno/blob/master/LICENSE)
