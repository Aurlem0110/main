const Discord = require("discord.js")

module.exports = {
    name: "/hey",
    description: "Sois poli, dis bonjour nan?",
    permission: "Aucune",
    dm: false,

    async run(bot, message) {
        await message.reply(`hey!`)
    }
}