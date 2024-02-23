const Discord = require('discord.js');
const { Message } = require('discord.js');
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({ intents });
const loadCommands = require("./Loaders/loadCommands");
const loadEvents = require("./Loaders/loadEvents");
const config = require('./config');

bot.commands = new Discord.Collection();

bot.login(config.token);
loadCommands(bot);
loadEvents(bot);

bot.on("messageCreate", async (message: { content: String }) => {
    if (message.content === "!ping") {
        return bot.commands.get("ping").run(bot, message);
    }

    if (message.content === "!hello") {
        return bot.commands.get("hello").run(message);
    }
});

bot.on("ready", async () => {
    console.info(`Connexion réussie : ${bot.user.tag} est en ligne !`);

});