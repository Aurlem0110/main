const Discord = require("discord.js")

module.exports = {
    name: "/date",
    description: "Bah la date quoi",
    permission: "Aucune",
    dm: false,

    async run(bot, message) {
        const currentDate = new Date();
        message.channel.send(currentDate.toLocaleString());
    }
}