require('dotenv').config();
const botCommands = require('./BotCommands');
const { getCommandAndArguments } = require('./utils/getCommandAndArguments');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const TOKEN = process.env.H_TOKEN;
const PREFIX = "!";
client.login(TOKEN);

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content.startsWith(PREFIX)) {
    const { command, args } = getCommandAndArguments(msg.content.toString().replace(PREFIX, ""));
    switch (command) {
      case "meme":
        botCommands.meme(msg, args);
        break;
      default:
        console.log('no matching commands')
    }
  }
});