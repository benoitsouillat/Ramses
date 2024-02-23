import { Message } from "discord.js";

module.exports = {
    name: "hello",
    async run(message: Message) {
        await message.reply(`Bonjour ${message.author.globalName}, Ravi de te voir !`);
    }
}